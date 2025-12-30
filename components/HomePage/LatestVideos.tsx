import React, { useEffect, useState } from "react";

const API_KEY = "AIzaSyDvrWO26C5Jno1MDn7MfdquRT2WVFut2U0";
const CHANNEL_ID = "UCHrIkvzbuAHabjBCMZakdpw";

const LatestVideos = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadInfiniteVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`
        );
        const data = await res.json();

        const filtered = data.items.filter((v: any) => v.id.videoId);

        // duplicate for infinite scroll
        setVideos([...filtered, ...filtered]);
      } catch (err) {
        setError("Failed to load videos");
      }
    };

    loadInfiniteVideos();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <h3 className="text-center font-archivo archivo-normal text-4xl text-white font-semibold mb-4">
        Latest Videos
      </h3>

      {/* VIEWPORT */}
      <div className="relative overflow-hidden">
        {/* TRACK */}
        <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused]">
          {error && <p className="text-red-500 text-center w-full">{error}</p>}

          {videos.map((video, index) => (
            <div
              key={index}
              className="w-[240px] sm:w-[300px] aspect-video rounded-xl overflow-hidden shadow-lg bg-black flex-shrink-0"
            >
              <iframe
                className="w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${video.id.videoId}?mute=1`}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LatestVideos;
