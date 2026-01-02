"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Triangle } from "lucide-react";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  address: string;
  testimonial: string;
  rating: number;
  avatar: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    name: "Elizabeth Jones",
    role: "Client Member",
    address: "123 Street Name, City Name, State, Country 12345",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam and very erat volutpat.",
    rating: 5,
    avatar: "EJ",
  },
  {
    id: 2,
    name: "Michael Anderson",
    role: "Premium Member",
    address: "456 Oak Avenue, Downtown, State, Country 67890",
    testimonial:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.",
    rating: 5,
    avatar: "MA",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Gold Member",
    address: "789 Park Boulevard, Central District, State, Country 54321",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
    rating: 5,
    avatar: "SW",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Gold Member",
    address: "789 Park Boulevard, Central District, State, Country 54321",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
    rating: 5,
    avatar: "SW",
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Gold Member",
    address: "789 Park Boulevard, Central District, State, Country 54321",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
    rating: 5,
    avatar: "SW",
  },
];

const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => {
  return (
    <div className="w-76 h-[330px] bg-[#492736] rounded-3xl px-4 pb-4 relative shadow-xl h-[220px]">
      {/* Arrow Button */}
      <div className="absolute top-6 right-6 ">
        <button className="w-10 h-10 border-3 border-orange-500 rounded-full flex items-center justify-center hover:bg-orange-800 transition-colors">
          <ArrowUpRight
            className="w-7 h-7 text-white"
            stroke="white"
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="rounded-r-full rounded-tl-full bg-orange-500 w-64 h-12  absolute top-0 -left-10"></div>
      <div className=" rounded-bl-full bg-orange-900 w-10 h-20  absolute top-12 -left-10"></div>

      {/* Content Card */}
      <div className=" rounded-2xl p-5 mt-8 mb-4">
        {/* Star Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(data.rating)].map((_, i) => (
            <span key={i} className="text-white text-lg">
              ★
            </span>
          ))}
        </div>

        {/* Testimonial Text */}
        <div className="border-l-4 border-orange-500 pl-4">
          <p className="text-white text-sm leading-relaxed">
            {data.testimonial}
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg">
          {data.avatar}
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg">{data.name}</h3>
          <p className="text-orange-300 text-sm font-medium mb-1">
            {data.role}
          </p>
          <p className="text-white text-xs leading-tight opacity-90">
            {data.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialCards() {
  const VISIBLE_CARDS = 3;
  const CARD_HEIGHT = 330;
  const GAP = 80;
  const STEP = CARD_HEIGHT + GAP;

  const [index, setIndex] = useState(0);

  const canGoUp = index > 0;
  const canGoDown = index + VISIBLE_CARDS < testimonialData.length;

  const handleUp = () => {
    if (canGoUp) setIndex((prev) => prev - 1);
  };

  const handleDown = () => {
    if (canGoDown) setIndex((prev) => prev + 1);
  };

  return (
    <div className="h-full space-y-20">
      {/* HEADER */}
      <div className="pt-20 space-y-4">
        <div className="w-full flex justify-center">
          <div className="w-32 px-3 py-1 bg-orange-500 text-[10px] text-white rounded-md text-center">
            Client Testimonial
          </div>
        </div>
        <h3 className="text-3xl text-center text-white font-semibold px-4">
          What our Clients Say About Working With Us
        </h3>
      </div>

      {/* UP ARROW */}
      <div className="flex justify-center">
        <Triangle
          onClick={handleUp}
          className={`w-10 h-10 cursor-pointer transition ${
            canGoUp ? "opacity-100" : "opacity-30 pointer-events-none"
          }`}
          fill="#d1c1b4"
        />
      </div>

      {/* CARDS */}
      <div className="overflow-hidden h-[1170px] pt-5 flex justify-center">
        <div
          className="flex flex-col items-center gap-20 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${index * STEP}px)`,
          }}
        >
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </div>

      {/* DOWN ARROW */}
      <div className="flex justify-center">
        <Triangle
          onClick={handleDown}
          className={`w-10 h-10 rotate-180 cursor-pointer transition ${
            canGoDown ? "opacity-100" : "opacity-30 pointer-events-none"
          }`}
          fill="#d1c1b4"
        />
      </div>
    </div>
  );
}
