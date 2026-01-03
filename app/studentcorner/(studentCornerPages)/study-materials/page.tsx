"use client";

import React, { useState } from "react";
import { STUDENT } from "../mock";

export default function StudyMaterialsPage() {
  const { studyMaterials } = STUDENT;
  const [selectedMaterialId, setSelectedMaterialId] = useState(
    studyMaterials[0]?.id || 0
  );

  const selectedMaterial =
    studyMaterials.find((m) => m.id === selectedMaterialId) ||
    studyMaterials[0];

  return (
    <div className="bg-[#f2e6d6] rounded-[2rem] p-6 md:p-10 shadow-2xl border-4 border-[#e6cba8] min-h-[500px] flex flex-col items-center">
      <h2 className="text-3xl font-amaranath font-bold text-[#8B4513] mb-8 bg-[#eaccad] px-6 py-2 rounded-lg inline-block shadow-sm">
        Study Materials
      </h2>

      <div className="w-full max-w-4xl space-y-6">
        {/* Top Row: Date and Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#4a1228] font-bold ml-1">Date</label>
            <div className="bg-[#eecda3] text-[#4a1228] p-4 rounded-xl font-medium shadow-inner border border-[#dcb88e] min-h-[56px] flex items-center">
              {selectedMaterial?.date || "No Date"}
            </div>
          </div>

          {/* Topics Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-[#4a1228] font-bold ml-1 text-right md:text-left">
              Topics{" "}
              <span className="text-sm font-normal text-[#8B4513]">
                (Drop down)
              </span>
            </label>
            <div className="relative">
              <select
                value={selectedMaterialId}
                onChange={(e) => setSelectedMaterialId(Number(e.target.value))}
                className="w-full bg-[#eecda3] text-[#4a1228] p-4 rounded-xl font-medium shadow-md border border-[#dcb88e] appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B4513] cursor-pointer"
              >
                {studyMaterials.map((material) => (
                  <option key={material.id} value={material.id}>
                    {material.topic}
                  </option>
                ))}
              </select>
              {/* Custom arrow icon */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#8B4513]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Description Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[#4a1228] font-bold ml-1">Description</label>
          <div className="bg-[#eecda3] text-[#4a1228] p-6 rounded-xl font-medium shadow-inner border border-[#dcb88e] min-h-[200px] whitespace-pre-wrap">
            {selectedMaterial?.description || "No description available."}
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-8 pt-4">
          <a
            href={selectedMaterial?.downloadUrl}
            className="bg-[#a68b6c] text-pink-100 font-bold text-xl px-12 py-3 rounded-xl shadow-lg hover:bg-[#8f7556] transition-transform active:scale-95 border-2 border-[#8f7556] uppercase tracking-widest"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
