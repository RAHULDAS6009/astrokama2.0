import React from "react";
import GetConsultancyFormandKusti from "../GetConsultancyAndKusti";
import LatestUpdates from "./LatestUpdates";
import LatestVideos from "./LatestVideos";
import Footer from "../common/Footer";

const services = [
  {
    title: "KP Astrology",
    desc: "Accurate predictions based on Krishnamurti Paddhati with sub-lord analysis, event timing and practical remedies.",
  },
  {
    title: "Numerology",
    desc: "Name, date of birth and number-based analysis to understand life patterns, career and relationships.",
  },
  {
    title: "Vedic Astrology",
    desc: "Traditional horoscope reading including planetary positions, dashas and yogas for life guidance.",
  },
  {
    title: "Financial Astrology",
    desc: "Wealth, business growth, investment timing and financial stability through planetary combinations.",
  },
  {
    title: "Professional / Career Astrology",
    desc: "Career direction, job change, promotion and professional growth analysis using KP methods.",
  },
  {
    title: "Kundali Matching",
    desc: "Marriage compatibility, dosha analysis and long-term relationship harmony assessment.",
  },
  {
    title: "Birth Time Rectification",
    desc: "Correcting inaccurate birth time using past life events and KP astrology techniques.",
  },
];

const tags = [
  "Educational Astrology",
  "Marital Life Astrology",
  "Love Relation Astrology",
  "Child Issue Astrology",
  "Health / Disease Astrology",
  "Reiki / Meditation",
  "Mantra / Gemstone / Rudraksha / Kavach & Other Spiritual Process",
];

const ServicesOfferedAndKusti = () => {
  return (
    <section className="bg-primary text-white">
      {/* SERVICES + FORM */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* LEFT */}
          <div className="flex-1">
            <h2 className="text-center text-orange-400 text-2xl font-semibold mb-10">
              Services Offered
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-primarysec text-black rounded-xl p-4 shadow-md"
                >
                  <h3 className="text-sm font-bold text-orange-600 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full text-xs bg-orange-500 text-white font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <LatestUpdates />

            {/* LATEST VIDEOS */}
            <LatestVideos />

            <Footer />
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-[420px] h-full">
            <GetConsultancyFormandKusti
              title="Get Kusti"
              buttonTitle="Next Process"
            />

            <div>
              <GetConsultancyFormandKusti
                title="Get Kusti"
                buttonTitle="Next Process"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedAndKusti;
