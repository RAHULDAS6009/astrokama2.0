import React from "react";

const LatestUpdates = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <h3 className="text-center text-white font-semibold mb-6">
          Latest Updates
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-40 rounded-xl bg-secondary flex items-center justify-center text-xs text-gray-300"
            >
              Update Image {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
