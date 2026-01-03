import React from "react";
import Image from "next/image";

const services = [
  { icon: "/kpastrologyanalysis.png", label: "KP Horoscope Analysis" },
  { icon: "/palmistry.png", label: "Palmistry" },
  { icon: "/numerology.png", label: "Numerology" },
  { icon: "/vastu.png", label: "Vastu" },
  { icon: "/reiki.png", label: "Reiki" },
  { icon: "/kavachapuja.png", label: "Kavacha Puja" },
  { icon: "/remedies.png", label: "Remedies" },
];
const AboutModernAstrology = () => {
  return (
    <section className="bg-primary py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Icons Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24  rounded-[2rem] bg-[#E8C4A8] border-2 border-orange-300 flex items-center justify-center shadow-lg shadow-black/30 hover:scale-105 transition-transform duration-300">
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <span className="text-[#E8C4A8] font-bold text-center text-sm md:text-base leading-tight max-w-[100px] font-amaranath">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="relative p-6 md:p-10 rounded-[3rem] border-2 border-orange-300/30 bg-[#351024] shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Images Collage */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
              {/* Main Circular Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-10 relative">
                <Image
                  src="/image1.png"
                  alt="Classroom Session"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Rectangular Image (Offset) */}
              <div className="absolute -bottom-4 -left-4 md:left-10 w-48 h-32 md:w-60 md:h-40 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl z-20">
                {/* Using a placeholder div or another image if available. Reusing image1 for demo as placeholder */}
                <Image
                  src="/image1.png"
                  alt="Group Photo"
                  width={240}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Third Rectangular Image (Offset Right) */}
              <div className="absolute -bottom-10 right-0 md:right-10 w-48 h-32 md:w-60 md:h-40 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl z-20">
                <Image
                  src="/image1.png"
                  alt="Event Photo"
                  width={240}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="bg-linear-to-br from-[#2D0C1F] via-[#601030] to-[#2D0C1F] p-6 md:p-8 rounded-3xl border border-[#E8C4A8] shadow-2xl">
                <p className="text-[#EDDCD2] font-serif italic text-lg md:text-xl leading-relaxed text-justify">
                  The Modern Astrology Institute was founded in 2018 to make
                  astrology relevant for modern life. KP Astrology was chosen as
                  the foundation, but prediction was recognized as needing
                  refinement. In today&apos;s fast-paced world, astrology must
                  evolve to match modern challenges and thinking. Modern
                  Astrology was therefore created as a new system of guidance.
                  It blends KP&apos;s scientific precision with innovative
                  methods. The goal is to guide people not only through charts
                  but also through practical life journeys.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bengali/Text Section Placeholder */}
          <div className="mt-12 p-6 md:p-8 rounded-3xl border border-orange-300/30 bg-linear-to-br  from-[#2D0C1F] via-[#601030] to-[#2D0C1F] text-center">
            <p className="text-[#EDDCD2] font-serif text-lg leading-relaxed opacity-80 ">
              The Modern Astrology Institute was founded in 2018 to make
              astrology relevant for modern life. KP Astrology was chosen as the
              foundation, but prediction was recognized as needing refinement.
              In today's fast-paced world, astrology must evolve to match modern
              challenges and thinking. Modern Astrology was therefore created as
              a new system of guidance. It blends KP's scientific precision with
              innovative methods. The goal is to guide people not only through
              charts but also through practical life journeys The Modern
              Astrology Institute was founded in 2018 to make astrology relevant
              for modern life. KP Astrology was chosen as the foundation, but
              prediction was recognized as needing refinement. In today's
              fast-paced world, astrology must evolve to match modern challenges
              and thinking. Modern Astrology was therefore created as a new
              system of guidance. It blends KP's scientific precision with
              innovative methods. The goal is to guide people not only through
              charts but also through practical life journeys
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutModernAstrology;
