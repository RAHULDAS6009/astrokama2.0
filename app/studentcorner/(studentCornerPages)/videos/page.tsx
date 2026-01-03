import React from "react";
import { STUDENT } from "../mock";

export default function VideosPage() {
  const { videos } = STUDENT;

  return (
    <div className="bg-[#a89f91] rounded-[2rem] p-6 md:p-10 shadow-2xl border-4 border-[#8f867a] min-h-[600px] flex flex-col items-center">
      <h2 className="text-3xl font-amaranath font-bold text-[#8B4513] mb-8 bg-[#eaccad] px-6 py-2 rounded-lg inline-block shadow-sm">
        Class Recording Video
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-2">
            {/* Thumbnail Placeholder */}
            <div className="w-full aspect-video bg-[#eecda3] rounded-xl shadow-md border border-[#dcb88e] flex items-center justify-center cursor-pointer hover:bg-[#e4c399] transition-colors relative group">
              {/* Play Button Icon Overlay */}
              <div className="w-12 h-12 rounded-full bg-[#8B4513]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-[#8B4513]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Date Label */}
            <div className="bg-[#eecda3] text-[#2D0C1F] font-medium py-2 px-4 rounded-lg text-center shadow-sm border border-[#dcb88e]">
              {video.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
