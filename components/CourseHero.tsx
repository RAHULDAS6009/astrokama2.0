import Image from "next/image";
import React from "react";

const CourseHero = () => {
  return (
    <section className="bg-primary text-white overflow-hidden">
      {/* Top Banner Strip */}

      {/* Banner Text Section */}
      <div className=" text-center mt-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Image
              src="/modernastrology.png"
              alt="Modern Astrology"
              width={150}
              height={150}
            />

            <div>
              <h1 className="text-4xl md:text-7xl font-amaranath text-orange-500 font-bold mb-2 tracking-wider">
                MODERN ASTROLOGY
              </h1>
              <p className="text-sm md:text-base text-orange-200/80 mb-2 tracking-[.06em]">
                A Unit of: Krishnamurti Academy of Modern Astrology & Spiritual
                Development - ESTD. 2018
              </p>
            </div>
          </div>

          <div className="text-[10px] md:text-xs text-orange-200/60 flex flex-wrap justify-center gap-2 md:gap-4 uppercase tracking-wider">
            <span className="text-[#ffb6b6]">
              Registered Under Government of West Bengal & Government of India
            </span>
            <span>•</span>
            <span className="text-[#ffb6b6]">ISO Certified Institute</span>
            <span>•</span>
            <span className="text-[#e5a300]">
              Registered Number Provided After Course Completion
            </span>
            <span>•</span>
            <span className="text-[#ffb6b6]">
              Official Certificate Every Semester
            </span>
          </div>
          <div className="mt-4 py-2 animate-gradient-flow bg-gradient-to-r from-[#2D0C1F] via-[#D35400] via-[#E91E63] to-[#2D0C1F]">
            <p className="text-[#FFD700] text-lg font-amranath font-bold tracking-wide">
              A New Path in Astrology ~~ Practical Prediction for Modern
              Lifestyles
            </p>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="">
        <div className="flex flex-col py-3 p-2 pl-8 md:flex-row items-center shadow-2xl shadow-black/50 overflow-hidden relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/solarsysystem.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Left: Image with Border */}
          <div className="w-full md:w-1/4 relative shrink-0 z-10">
            <div className="relative rounded-3xl overflow-hidden border-2 border-orange-300/30 shadow-lg">
              <Image
                src="/Suvendupaul.png"
                alt="Astrologer Suvendu Paul"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-3/4 flex flex-col items-center text-center gap-6 py-4 md:py-0 relative z-10">
            <div className="relative z-10 w-full flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-amaranath text-[#d8b475]">
                Are you Interested in Astrology
              </h2>

              <div className="w-full bg-secondary/80 py-6 border-y border-orange-500/10 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent"></div>
                <p className="text-xl md:text-2xl text-[#ffbbdf] font-serif italic mb-2">
                  Join Our Certified KP Astrology Courses –{" "}
                  <span className="not-italic font-bold text-white">
                    Online & Offline
                  </span>
                </p>
                <p className="text-orange-300 text-lg font-bold tracking-wide uppercase">
                  Offline Centre: KOLKATA & MIDNAPORE
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-2">
                <button className="px-8 py-3 rounded-full bg-[#ffbbdf] text-[#3c1728] font-medium text-lg hover:bg-white transition-colors shadow-lg shadow-orange-900/20">
                  Take Admission
                </button>
                <button className="px-8 py-3 rounded-full bg-[#ffbbdf] text-[#3c1728] font-medium text-lg hover:bg-white transition-colors shadow-lg shadow-orange-900/20 border border-orange-200/50">
                  Explore Our Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative  ">
        <div className="bg-gradient-to-r from-black via-secondary to-black py-6 rounded-b-[100%] border-b-4 border-orange-500 shadow-[0_4px_20px_rgba(255,165,0,0.3)]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl text-orange-500 font-bold font-amaranath tracking-wider">
              Learn Only Practical Prediction, No Calculation
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
