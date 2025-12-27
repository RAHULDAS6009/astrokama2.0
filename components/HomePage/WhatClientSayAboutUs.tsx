import React from "react";
import OrbitAvatars from "./OrbitAvatar/OrbitAvatar";
import CircularAvatarCarousel from "./OrbitAvatar/OrbitAvatar";

const WhatClientSayAboutUs = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">
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
            <h3 className="text-lime-400 font-semibold mb-4">My Philosophy</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Astrology, in its practice, is never meant to force or overpower
              destiny, but to guide one with clarity and awareness. The true
              purpose of astrology is to illuminate the path of life with
              precision, practicality and wisdom—empowering individuals to make
              informed decisions with confidence.
            </p>
          </div>
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">
            What our Clients Say About Working With Us
          </h3>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[var(--color-secondary)] rounded-2xl p-5 relative"
            >
              <div className="absolute top-3 right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                ↗
              </div>

              <div className="flex items-center gap-2 mb-3 text-orange-400">
                ★★★★★
              </div>

              <p className="text-sm text-gray-200 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Accurate guidance and practical remedies helped me immensely.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-400" />
                <div>
                  <p className="text-sm font-semibold">Elizabeth Jones</p>
                  <p className="text-xs text-gray-300">New Delhi, India</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function VideoBackgroundSection() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/servicesVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className=" backdrop-blur-md rounded-3xl p-8 grid md:grid-cols-2 gap-8">
          {/* WHY CLIENTS */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">
              Why Clients Choose Me
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <span className="text-orange-400 font-semibold">
                  Accurate Predictions:
                </span>{" "}
                Result-oriented guidance based on KP Astrology
              </li>
              <li>
                <span className="text-orange-400 font-semibold">
                  Simple Remedies:
                </span>{" "}
                Practical solutions without superstition
              </li>
              <li>
                <span className="text-orange-400 font-semibold">
                  Client Satisfaction:
                </span>{" "}
                Trust built through clarity and honesty
              </li>
              <li>
                <span className="text-orange-400 font-semibold">
                  Personalized Care:
                </span>{" "}
                Each chart studied individually
              </li>
              <li>
                <span className="text-orange-400 font-semibold">
                  Proven Track Record:
                </span>{" "}
                Years of consistent results
              </li>
            </ul>
          </div>

          {/* HOW I CONSULT */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">
              How I Consult
            </h3>
            <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside">
              <li>In-depth discussion and problem analysis</li>
              <li>Date, Time & Place based chart analysis</li>
              <li>KP sub-lord and cuspal study</li>
              <li>Clear predictions with timelines</li>
              <li>Simple & effective remedies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatClientSayAboutUs;
