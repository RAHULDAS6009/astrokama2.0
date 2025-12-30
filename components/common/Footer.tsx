import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2b0016] to-[#3b0a23] text-gray-200">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* BRAND */}
        <div className="space-y-3">
          <h3 className="text-orange-400 font-courgette courgette-regular text-lg">
            Astrologer Suvendu Paul
          </h3>
          <h4 className="text-white font-semibold text-base font-amaranath">
            AstroKama
          </h4>
          <p className="text-gray-300 text-xs leading-relaxed font-amaranath">
            Your trusted partner for accurate astrology predictions, horoscope
            readings, and personalized guidance.
          </p>
        </div>

        {/* SERVICES - LEFT */}
        <div>
          <h4 className="text-orange-400 font-semibold mb-3 font-archivo archivo-normal ">
            Service
          </h4>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>Horoscope Analysis</li>
            <li>Birth Time Rectification</li>
            <li>Financial Astrology</li>
            <li>Marital Life Astrology</li>
            <li>Marriage Match Making (Jotak Bichar)</li>
            <li>School & Higher Education Astrology</li>
            <li>Child Issue Astrology</li>
            <li>Health Disease Accident Astrology</li>
            <li>New Baby Naamkoron</li>
          </ul>
        </div>

        {/* SERVICES - RIGHT */}
        <div>
          <h4 className="text-orange-400 font-semibold mb-3 font-archivo archivo-normal">
            Service
          </h4>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>Numerology</li>
            <li>Business Naamkoron</li>
            <li>Kusthi Bicher</li>
            <li>Profession Astrology</li>
            <li>Love Relation Astrology</li>
            <li>Palmistry</li>
            <li>Vastu</li>
            <li>Reiki & Meditation</li>
            <li>Mantra · Gemstone · Rudraksha</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-orange-400 font-semibold mb-3 font-archivo archivo-normal">
            Contact
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li>Tollygunge, Kolkata</li>
            <li>India</li>
            <li className="pt-2">📞 +91 97485 5888 62</li>
            <li>✉ whitelightofuniverse@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20" />

      {/* COPYRIGHT */}
      <div className="text-center text-xs py-4 text-gray-400">
        © 2026 Astrokama. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
