
"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

// --- Mock Data Structure ---
type Slot = {
  day: string;
  time: string;
};

type Fees = {
  semesterAdmission: {
    amount: number;
    count: number;
    total: number;
  };
  monthlyFees: {
    amount: number;
    count: number;
    total: number;
  };
  totalCourseFee: number;
};

type CourseData = {
  id: string;
  category: string;
  location?: string; // Optional, mainly for Offline
  duration: string;
  module: string;
  classFrequency: string;
  classTime: string;
  availableSlots: Slot[];
  fees: Fees;
};

const MOCK_COURSES: CourseData[] = [
  {
    id: "offline-tollygunge",
    category: "Astrology Offline",
    location: "Tollygunge",
    duration: "24 Months",
    module: "Basic to Advance",
    classFrequency: "Weekly 1 Day",
    classTime: "4 Hours",
    availableSlots: [
      { day: "Sunday", time: "1:00 PM to 5:00 PM" },
      { day: "Wednesday", time: "1:00 PM to 5:00 PM" },
    ],
    fees: {
      semesterAdmission: { amount: 1000, count: 4, total: 4000 },
      monthlyFees: { amount: 2000, count: 12, total: 24000 },
      totalCourseFee: 28000,
    },
  },
  {
    id: "offline-midnapore",
    category: "Astrology Offline",
    location: "Midnapore",
    duration: "24 Months",
    module: "Basic to Advance",
    classFrequency: "Weekly 1 Day",
    classTime: "4 Hours",
    availableSlots: [
      { day: "Sunday", time: "10:00 AM to 2:00 PM" },
    ],
    fees: {
      semesterAdmission: { amount: 1000, count: 4, total: 4000 },
      monthlyFees: { amount: 1500, count: 12, total: 18000 }, // Different fee for example
      totalCourseFee: 22000,
    },
  },
  {
    id: "online",
    category: "Astrology Online",
    duration: "18 Months",
    module: "Basic to Advance",
    classFrequency: "Weekly 2 Days",
    classTime: "2 Hours",
    availableSlots: [
      { day: "Tuesday", time: "8:00 PM to 10:00 PM" },
      { day: "Friday", time: "8:00 PM to 10:00 PM" },
    ],
    fees: {
      semesterAdmission: { amount: 1000, count: 3, total: 3000 },
      monthlyFees: { amount: 2000, count: 18, total: 36000 },
      totalCourseFee: 39000,
    },
  },
  {
    id: "vastu",
    category: "Vastu",
    duration: "6 Months",
    module: "Commercial & Residential",
    classFrequency: "Weekly 1 Day",
    classTime: "3 Hours",
    availableSlots: [
        { day: "Saturday", time: "4:00 PM to 7:00 PM" }
    ],
    fees: {
      semesterAdmission: { amount: 2000, count: 1, total: 2000 },
      monthlyFees: { amount: 2500, count: 6, total: 15000 },
      totalCourseFee: 17000,
    },
  },
  {
    id: "kavacha",
    category: "Kavacha With Puja",
    duration: "3 Months",
    module: "Rituals & Remedies",
    classFrequency: "Weekend",
    classTime: "4 Hours",
    availableSlots: [
        { day: "Sunday", time: "8:00 AM to 12:00 PM" }
    ],
    fees: {
       semesterAdmission: { amount: 1500, count: 1, total: 1500 },
       monthlyFees: { amount: 1000, count: 3, total: 3000 },
       totalCourseFee: 4500,
    },
  },
    {
    id: "reiki",
    category: "Reiki",
    duration: "2 Days Workshop",
    module: "Level 1 & 2",
    classFrequency: "Consecutive Days",
    classTime: "6 Hours",
    availableSlots: [
        { day: "Sat-Sun", time: "10:00 AM to 4:00 PM" }
    ],
    fees: {
       semesterAdmission: { amount: 0, count: 0, total: 0 },
       monthlyFees: { amount: 0, count: 0, total: 5000 }, // Lump sum
       totalCourseFee: 5000,
    },
  },
];

const CATEGORIES = [
  "Astrology Offline",
  "Astrology Online",
  "Vastu",
  "Kavacha With Puja",
  "Reiki",
];

const AllBatchesAndCourse = () => {
  const [activeCategory, setActiveCategory] = useState("Astrology Offline");
  const [activeLocation, setActiveLocation] = useState("Tollygunge");

  // Filter Logic
  const currentCourse = MOCK_COURSES.find((course) => {
    if (course.category !== activeCategory) return false;
    if (activeCategory === "Astrology Offline") {
      return course.location === activeLocation;
    }
    return true;
  }) || MOCK_COURSES[0];

  return (
    <section className="bg-gradient-to-b from-[#4A192C] to-[#2D0C1F] py-16">
      <div className="container mx-auto px-4">
        
        {/* Top Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-t-xl font-bold text-sm md:text-base transition-colors ${
                activeCategory === cat
                  ? "bg-[#3c1728] text-white border-b-2 border-orange-500"
                  : "bg-[#1a0510] text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Location Pills (Only for Offline) */}
        {activeCategory === "Astrology Offline" && (
            <div className="flex gap-4 mb-6">
                {["Tollygunge", "Midnapore"].map((loc) => (
                     <button
                     key={loc}
                     onClick={() => setActiveLocation(loc)}
                     className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${
                       activeLocation === loc
                         ? "bg-[#6A4C93] text-white shadow-lg border border-white/20"
                         : "bg-[#3c1728] text-gray-400 hover:text-white"
                     }`}
                   >
                     {loc}
                   </button>
                ))}
            </div>
        )}

        {/* Main Content Card */}
        <div className="bg-[#EEDCC6] rounded-3xl p-6 md:p-10 shadow-2xl border-4 border-[#3c1728]/20">
             <div className="flex flex-col lg:flex-row gap-8">
                 
                 {/* Left: Placeholder / Image Area */}
                 <div className="w-full lg:w-1/3 bg-[#DDBEA9] rounded-2xl min-h-[300px] flex items-center justify-center border-2 border-[#3c1728]/10">
                    <p className="text-[#3c1728]/50 font-bold italic">Course Image / Banner</p>
                 </div>

                 {/* Right: Details */}
                 <div className="w-full lg:w-2/3 flex flex-col justify-between">
                     
                     {/* Top Details Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 border-b-2 border-[#3c1728]/10 pb-6">
                         <div className="flex justify-between items-center text-[#3c1728] font-bold">
                             <span className="text-orange-700">Duration:</span>
                             <span>{currentCourse.duration}</span>
                         </div>
                         <div className="flex justify-between items-center text-[#3c1728] font-bold">
                             <span className="text-orange-700">Module:</span>
                             <span>{currentCourse.module}</span>
                         </div>
                         <div className="flex justify-between items-center text-[#3c1728] font-bold">
                             <span className="text-orange-700">Class:</span>
                             <span>{currentCourse.classFrequency}</span>
                         </div>
                         <div className="flex justify-between items-center text-[#3c1728] font-bold">
                             <span className="text-orange-700">Time:</span>
                             <span>{currentCourse.classTime}</span>
                         </div>
                     </div>

                     {/* Available Days */}
                     <div className="py-6">
                         <h4 className="text-orange-700 font-bold mb-4 text-center md:text-left text-lg">Currently Available Days</h4>
                         <div className="flex flex-col md:flex-row items-center gap-6">
                             <div className="text-orange-900 font-bold flex items-center gap-2">
                                 Select <div className="text-3xl text-[#D4AF37]">»»»</div>
                             </div>
                             <div className="flex flex-col gap-3 w-full max-w-md">
                                 {currentCourse.availableSlots.map((slot, idx) => (
                                     <div key={idx} className="flex justify-between items-center bg-[#3F51B5] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#303F9F] cursor-pointer transition-colors border border-white/20">
                                         <span className="font-bold">{slot.day}</span>
                                         <span>{slot.time}</span>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>

                     {/* Fees Structure */}
                     <div className="bg-[#E6C6A0] rounded-xl p-6 border border-[#3c1728]/10">
                         <h4 className="text-orange-800 font-bold mb-4 border-b border-orange-800/20 pb-2">Fees Structure:</h4>
                         
                         {currentCourse.fees.semesterAdmission.total > 0 && (
                            <div className="flex justify-between items-center font-bold text-[#3c1728] mb-2 text-sm md:text-base">
                                <span>{currentCourse.fees.semesterAdmission.count} Semester Admission</span>
                                <span>{currentCourse.fees.semesterAdmission.amount} x {currentCourse.fees.semesterAdmission.count} = {currentCourse.fees.semesterAdmission.total} INR</span>
                            </div>
                         )}

                         <div className="flex justify-between items-center font-bold text-[#3c1728] mb-4 text-sm md:text-base">
                            <span>{currentCourse.fees.monthlyFees.count > 0 ? `${currentCourse.fees.monthlyFees.count} Months Fees` : "Course Fee"}</span>
                            <span>
                                {currentCourse.fees.monthlyFees.amount > 0 
                                  ? `${currentCourse.fees.monthlyFees.amount} x ${currentCourse.fees.monthlyFees.count} = ${currentCourse.fees.monthlyFees.total}` 
                                  : `${currentCourse.fees.totalCourseFee}`} INR
                            </span>
                         </div>
                         
                         <div className="w-full h-px bg-[#3c1728]/20 my-2"></div>
                         
                         <div className="flex justify-between items-center font-bold text-black text-xl">
                            <span>Total</span>
                            <span>{currentCourse.fees.totalCourseFee} INR</span>
                         </div>
                     </div>

                 </div>
             </div>
        </div>
        
        {/* Bottom Actions */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
            <button className="bg-[#1a0520] text-white px-12 py-4 rounded-full font-bold text-xl border-2 border-white/10 hover:bg-black hover:scale-105 transition-all shadow-xl">
                View Syllabus
            </button>
            <button className="bg-[#1a0520] text-white px-12 py-4 rounded-full font-bold text-xl border-2 border-white/10 hover:bg-black hover:scale-105 transition-all shadow-xl">
                Take Admission
            </button>
        </div>

      </div>
    </section>
  );
};

export default AllBatchesAndCourse;
