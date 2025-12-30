import TestimonialCards from "./TestimonialSection";
import { VideoBackgroundSection } from "./WhatClientSayAboutUs";
import CircularAvatarCarousel from "./OrbitAvatar/OrbitAvatar";
import GetConsultancyFormandKusti from "../GetConsultancyAndKusti";
import LatestUpdates from "./LatestUpdates";
import LatestVideos from "./LatestVideos";
import Footer from "../common/Footer";
import HoroscopeResult from "../GenerateHoroscope";

export const Remaining = () => {
  return (
    <div className="">
      <div className="w-full h-full flex">
        <div className="w-[63%] bg-primary h-full">
          <div className=" space-y-12 ">
            {/* WHY + HOW */}
            <VideoBackgroundSection />
            {/* REMEDIES */}
            <h3 className="text-orange-400 font-archivo archivo-normal font-semibold text-4xl mb-8 text-center  pt-8">
              Remedies I Offer:
            </h3>
            <CircularAvatarCarousel />
            {/* PHILOSOPHY */}
            <div className="text-center h-full bg-secondary py-10 px-8">
              <h3 className="text-lime-400  mb-4  font-archivo archivo-normal font-semibold text-4xl">
                My Philosophy
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Astrology, in its practice, is never meant to force or overpower
                destiny, but to guide one with clarity and awareness. The true
                purpose of astrology is to illuminate the path of life with
                precision, practicality and wisdom—empowering individuals to
                make informed decisions with confidence.
              </p>

              <p className="text-sm text-gray-200 leading-relaxed">
                Astrology, in its practice, is never meant to force or overpower
                destiny, but to guide one with clarity and awareness. The true
                purpose of astrology is to illuminate the path of life with
                precision, practicality and wisdom—empowering individuals to
                make informed decisions with confidence.
              </p>
            </div>

            <ServicesOffered />

            <LatestUpdates />

            <LatestVideos />
            <Footer />
          </div>
        </div>

        <div className="w-[37%]  bg-[#3c1728] flex flex-col ">
          <div className="max-w-[500px] mx-auto  flex items-center">
            <TestimonialCards />
          </div>

          <div className="mx-auto max-w-[500px]">
            <GetConsultancyFormandKusti
              title="আপনার জন্মরাশি ও লগ্ন জেনে নিন"
              buttonTitle="Click For Next Process"
            />

            <HoroscopeResult />
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  { title: "Gem Stones", gradient: "from-teal-600 to-cyan-800" },
  { title: "Vastu Shastra", gradient: "from-yellow-500 to-amber-700" },
  { title: "Numerology", gradient: "from-rose-500 to-red-700" },
  { title: "Palm Reading", gradient: "from-indigo-500 to-purple-700" },
  { title: "Horoscope", gradient: "from-pink-400 to-rose-600" },
  { title: "Marriage Match", gradient: "from-orange-500 to-orange-700" },
  { title: "Career Guidance", gradient: "from-yellow-400 to-yellow-600" },
  { title: "Spiritual Healing", gradient: "from-sky-400 to-sky-700" },
];

function ServicesOffered() {
  return (
    <section className="py-20 bg-[#2b0014]">
      <h2 className="text-center text-orange-400 font-semibold mb-12 font-archivo archivo-normal text-4xl">
        Services Offered
      </h2>

      <div className="h-[800px] flex flex-col justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto px-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative h-72
           w-full rounded-md overflow-hidden"
            >
              <img
                src="/service1.png"
                alt={service.title}
                className="w-full h-full object-fit"
              />

              {/* Title overlay */}
            </div>
          ))}
        </div>

        <div className="flex-1 justify-center">
          <AstrologyTags />
        </div>
      </div>
    </section>
  );
}

const items = [
  "Educational Astrology",
  "Marital Life Astrology",
  "Love Relation Astrology",
  "Child Issue Astrology",
  "Health / Disease Astrology",
  "Reiki / Meditation",
  "Mantra / Gemstone / Rudraksha / Kavach & Other Spiritual Processes",
];

function AstrologyTags() {
  return (
    <div className="max-w-3xl  mx-auto flex flex-wrap justify-center gap-4 px-6 py-8">
      {items.map((title, index) => (
        <div
          key={index}
          className="
            px-6 py-2
            rounded-full
            bg-gradient-to-b from-[#fff2c6] via-[#e4b15c] to-[#b57a1a]
            border border-[#ffecb3]
            text-[#7a0022]
            font-semibold
            text-md
            font-franklin
            libre-franklin-medium
            shadow-[inset_0_2px_2px_rgba(255,255,255,0.8)]
            cursor-default
            whitespace-nowrap
          "
        >
          {title}
        </div>
      ))}
    </div>
  );
}

export default Remaining;
