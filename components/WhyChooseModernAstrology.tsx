
import React from "react";

const WhyChooseModernAstrology = () => {
  return (
    <section className="bg-[#2D0C1F] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-amaranath font-bold italic">
            <span className="text-pink-300">Why Choose </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFA500] to-[#FF4500]">
              Modern Astrology
            </span>
          </h2>
        </div>

        {/* 3 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-[#4A192C] to-[#2D0C1F] p-8 rounded-3xl border border-gray-600 shadow-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
             {/* Top Gold Bar */}
             <div className="absolute -top-6 w-24 h-12 bg-gradient-to-b from-[#D4AF37] to-[#8B4513] rounded-sm shadow-lg"></div>
             
             <p className="text-white font-medium text-sm md:text-base mt-6 leading-relaxed">
               In <span className="text-orange-400 font-bold">KP Astrology</span>, teachers often focus heavily on complex calculations. 
               <br />
               <span className="text-pink-300 font-bold">At Modern Astrology</span>, emphasis is placed only on 
               <span className="text-orange-400 font-bold"> practical prediction.</span>
             </p>
             
             {/* Bengali Text Placeholder/Simulation */}
             <p className="text-xs text-center text-yellow-100/70 mt-4 font-serif leading-loose">
               (Regional text describing how Modern Astrology simplifies the complex calculations of KP Astrology and focuses on practical outcomes.)
             </p>

             {/* Number Badge */}
             <div className="absolute -bottom-6 left-[-10px] w-16 h-16 bg-[#D4E157] rounded-full flex items-center justify-center border-4 border-[#2D0C1F] text-3xl font-bold text-[#2D0C1F] shadow-lg z-10">
               1
             </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-[#4A192C] to-[#2D0C1F] p-8 rounded-3xl border border-gray-600 shadow-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
             <div className="absolute -top-6 w-24 h-12 bg-gradient-to-b from-[#D4AF37] to-[#8B4513] rounded-sm shadow-lg"></div>
             
             <p className="text-white font-medium text-sm md:text-base mt-6 leading-relaxed">
               Many learners hesitate with calculations in KP Astrology and often return to Traditional Methods. 
               This barrier is removed by Modern Astrology, making astrology accessible and empowering.
             </p>

             <p className="text-xs text-center text-yellow-100/70 mt-4 font-serif leading-loose">
                (Regional text regarding the fear of math/calculations being removed by Modern Astrology techniques.)
             </p>

             <div className="absolute -bottom-6 left-[-10px] w-16 h-16 bg-[#D4E157] rounded-full flex items-center justify-center border-4 border-[#2D0C1F] text-3xl font-bold text-[#2D0C1F] shadow-lg z-10">
               2
             </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gradient-to-b from-[#4A192C] to-[#2D0C1F] p-8 rounded-3xl border border-gray-600 shadow-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
             <div className="absolute -top-6 w-24 h-12 bg-gradient-to-b from-[#D4AF37] to-[#8B4513] rounded-sm shadow-lg"></div>
             
             <p className="text-white font-medium text-sm md:text-base mt-6 leading-relaxed">
               Learning here means connecting cosmic wisdom with everyday life, not memorizing formulas. 
               Students from all backgrounds — professionals, homemakers, and young learners — share a passion for astrology&apos;s deeper meaning.
             </p>

             <p className="text-xs text-center text-yellow-100/70 mt-4 font-serif leading-loose">
                (Regional text about learning being a joy and connecting wisdom to daily life for everyone.)
             </p>

             <div className="absolute -bottom-6 left-[-10px] w-16 h-16 bg-[#D4E157] rounded-full flex items-center justify-center border-4 border-[#2D0C1F] text-3xl font-bold text-[#2D0C1F] shadow-lg z-10">
               3
             </div>
          </div>

        </div>

        {/* Info Section (Eligibility, etc.) */}
        <div className="bg-[#3c1728] rounded-[2rem] p-8 border-2 border-orange-400/30 relative mb-16 overflow-hidden">
            {/* Decorative Chevron Border at bottom */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                {/* Left Side */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-orange-400 font-bold text-xl md:text-2xl underline decoration-orange-400/50 underline-offset-4 mb-2">
                           Eligibility:
                        </h3>
                        <p className="text-white text-sm md:text-base leading-relaxed">
                            <span className="font-semibold text-pink-200">Anyone with at least HS (Higher Secondary) qualification can join.</span> 
                            <span className="text-orange-200 block mt-1">Age Range: From 22 years onward, with no upper limit.</span>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-orange-400 font-bold text-xl md:text-2xl underline decoration-orange-400/50 underline-offset-4 mb-2">
                           Modes:
                        </h3>
                        <p className="text-white text-sm md:text-base leading-relaxed">
                           <span className="text-pink-200 font-bold">Both Offline Sessions</span> in Tollygunge, Kolkata and Midnapore 
                           <br/>
                           and <span className="text-pink-200 font-bold">Online Classes</span> for learners across cities and villages.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-6 items-end text-right">
                    <div>
                         <h3 className="bg-orange-500 text-white font-bold px-4 py-1 rounded inline-block text-lg mb-2 shadow-md">
                            Comprehensive Course:
                         </h3>
                         <p className="text-white text-sm md:text-base">
                            For those who wish to take time and dive deep.
                            <br/>
                            <span className="text-orange-300 font-bold">(Long Duration Course)</span>
                         </p>
                    </div>
                    <div>
                         <h3 className="bg-orange-500 text-white font-bold px-4 py-1 rounded inline-block text-lg mb-2 shadow-md">
                            Fast - Track Course:
                         </h3>
                         <p className="text-white text-sm md:text-base">
                            For those eager to quickly begin their professional journey with deep dive learning 
                            <span className="text-orange-300 font-bold"> (Short Duration Course)</span>
                         </p>
                    </div>
                </div>
            </div>

            {/* Bottom Graphic / Separator Pattern Simulation */}
            <div className="mt-8 w-full h-4 bg-repeat-x opacity-30" style={{ backgroundImage: "linear-gradient(45deg, #FFA500 25%, transparent 25%, transparent 75%, #FFA500 75%, #FFA500), linear-gradient(45deg, #FFA500 25%, transparent 25%, transparent 75%, #FFA500 75%, #FFA500)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>

            <div className="mt-6 text-center bg-[#E6D5C3] p-4 rounded-xl shadow-inner border border-orange-800/20">
                <p className="text-[#3c1728] font-serif italic font-medium text-sm md:text-lg">
                   Modern Astrology is not just another institute—it is a movement to blend Science, Spirituality, and Practicality, creating Astrologers who are ready for the modern world.
                </p>
            </div>
        </div>

        {/* Admission Footer Banner */}
        <div className="w-full bg-gradient-to-r from-black via-[#3c1728] to-black py-4 border-t-4 border-orange-500/50 shadow-2xl">
            <h2 className="text-center text-3xl md:text-5xl font-amaranath font-bold text-orange-500 tracking-widest uppercase">
                ADMISSION
            </h2>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseModernAstrology;
