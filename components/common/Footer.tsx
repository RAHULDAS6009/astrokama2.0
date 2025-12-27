import React from "react";

const Footer = () => {
  return (
    <div>
      {/* FOOTER STRIP */}
      <div className="bg-secondary py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-semibold text-orange-400 mb-2">
              Astrologer Suvendu Paul
            </p>
            <p className="text-xs text-gray-300">
              Accurate KP Astrology & Modern Remedies
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2">Services</p>
            <ul className="text-xs space-y-1 text-gray-300">
              <li>KP Astrology</li>
              <li>Numerology</li>
              <li>Vedic Astrology</li>
              <li>Kundali Matching</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-xs text-gray-300">
              Email: support@modernastrology.com
            </p>
            <p className="text-xs text-gray-300">Phone: +91 XXXXX XXXXX</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Disclaimer</p>
            <p className="text-xs text-gray-300">
              Astrology guidance is based on planetary positions and individual
              belief.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
