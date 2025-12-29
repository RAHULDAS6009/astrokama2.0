import TestimonialCards from "./TestimonialSection";
import { VideoBackgroundSection } from "./WhatClientSayAboutUs";
import CircularAvatarCarousel from "./OrbitAvatar/OrbitAvatar";

export const Remaining = () => {
  return (
    <div>
      <div className="w-full h-full flex">
        <div className="w-[63%] bg-primary h-full">
          <div className=" space-y-12">
            {/* WHY + HOW */}
            <VideoBackgroundSection />
            {/* REMEDIES */}
            <CircularAvatarCarousel />

            <div>
              <h3 className="text-orange-400 font-semibold mb-8 text-center">
                Remedies I Offer:
              </h3>

              <div className="flex flex-wrap justify-center gap-6 relative">
                {[
                  "Gem Stone",
                  "Rudraksha",
                  "Tantra & Kavach",
                  "Auspicious Puja",
                  "Vastu",
                  "Reiki",
                ].map((item) => (
                  <div
                    key={item}
                    className="w-24 h-24 rounded-full bg-[var(--color-primarysec)] text-black flex items-center justify-center text-xs font-semibold text-center shadow-md"
                  >
                    {item}
                  </div>
                ))}

                <div className="w-28 h-28 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-semibold text-center shadow-lg">
                  Modern Astrology
                  <br />
                  Remedies
                </div>
              </div>
            </div>
            {/* PHILOSOPHY */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-lime-400 font-semibold mb-4">
                My Philosophy
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Astrology, in its practice, is never meant to force or overpower
                destiny, but to guide one with clarity and awareness. The true
                purpose of astrology is to illuminate the path of life with
                precision, practicality and wisdom—empowering individuals to
                make informed decisions with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[37%]  bg-[#3c1728] flex">
          <div className="max-w-[500px] mx-auto h-full flex items-center">
            <TestimonialCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remaining;
