import React from "react";

const LatestVideos = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-center text-white font-semibold mb-6">
          Latest Videos
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-24 bg-secondary rounded-lg flex items-center justify-center text-xs text-gray-300"
            >
              Video {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
