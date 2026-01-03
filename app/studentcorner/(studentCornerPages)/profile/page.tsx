import React from "react";
import { STUDENT } from "../mock";

export default function ProfilePage() {
  const { profile } = STUDENT;

  return (
    <div className="bg-[#f2e6d6] rounded-[2rem] p-6 md:p-12 shadow-2xl border-4 border-[#e6cba8] relative min-h-[600px]">
      {/* Title */}
      <h2 className="text-center text-[#8B4513] text-3xl font-amaranath font-bold mb-10 tracking-wide">
        {profile.name} Profile
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form Fields (2 columns span) */}
        <div className="lg:col-span-2 space-y-5">
          <ProfileField label="Name" value={profile.name} />
          <ProfileField label="Mobile" value={profile.mobile} />
          <ProfileField label="Email" value={profile.email} />
          <ProfileField label="Password" value={profile.password} />
        </div>

        {/* Right Photo Section (1 column span) */}
        <div className="flex flex-col items-center gap-4 mt-4 lg:mt-0">
          <p className="text-[#8B4513] font-medium self-start lg:self-center">
            Recent Photo
          </p>
          <div className="w-40 h-48 bg-gray-500 rounded-lg shadow-inner border-4 border-[#e5cca9]">
            {/* Display photo if available, currently mock data has a placeholder path */}
            {profile.photo && !profile.photo.includes("path/to") && (
              <img
                src={profile.photo}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>

          <button className="bg-[#e5cca9] text-[#4a1228] font-bold px-6 py-2 rounded-md shadow-md hover:bg-[#d9bc96] transition-colors w-full max-w-[160px]">
            Change Photo
          </button>
        </div>
      </div>

      {/* Bottom Update Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#A08B6B] text-white font-bold text-lg px-12 py-3 rounded-md shadow-lg hover:bg-[#8e795a] transition-transform hover:scale-105 tracking-wider">
          UPDATE
        </button>
      </div>
    </div>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_100px] gap-2 items-center">
      <label className="text-[#8B4513] font-medium text-lg">{label}</label>
      <div className="bg-[#e8d1b0] text-[#2D0C1F] px-4 py-2 rounded-md font-medium text-lg shadow-inner">
        {value}
      </div>
      <button className="bg-[#e8d1b0] text-[#2D0C1F] px-4 py-2 rounded-md font-medium text-lg shadow-md hover:bg-[#dcc099] border border-[#d4b58e]">
        Change
      </button>
    </div>
  );
}
