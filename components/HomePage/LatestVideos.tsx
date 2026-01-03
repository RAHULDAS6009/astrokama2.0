import React, { useEffect, useState } from "react";
import { X, Play } from "lucide-react";

// Use environment variable
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCHrIkvzbuAHabjBCMZakdpw";

const LatestVideos = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const loadInfiniteVideos = async () => {
      try {
        if (!API_KEY) {
          console.error("YouTube API Key is missing");
          return;
        }

        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`
        );
        const data = await res.json();
        console.log(data);
        if (data.error) {
          console.error("YouTube API Error:", data.error);
          setError("Failed to load videos");
          return;
        }

        const filtered = data.items.filter((v: any) => v.id.videoId);

        // Triplicate for smoother infinite scroll buffer
        setVideos([...filtered, ...filtered, ...filtered]);
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
      <div className="relative overflow-hidden w-full carousel-viewport">
        {/* TRACK */}
        <div className="flex gap-4 animate-scroll w-max">
          {error && <p className="text-red-500 text-center w-full">{error}</p>}

          {videos.map((video, index) => (
            <div
              key={index}
              className="w-[240px] sm:w-[300px] aspect-video rounded-xl overflow-hidden shadow-lg bg-black flex-shrink-0 cursor-pointer group relative"
              onClick={() => setSelectedVideo(video.id.videoId)}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play fill="white" className="text-white ml-1" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full z-50 cursor-pointer"
          >
            <X size={32} color="#ffffff" strokeWidth={3} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* keyframes */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(
              -33.333%
            ); /* Move exactly 1 set width (since we have 3 sets) */
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Explicit Pause on Hover */
        .carousel-viewport:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LatestVideos;
