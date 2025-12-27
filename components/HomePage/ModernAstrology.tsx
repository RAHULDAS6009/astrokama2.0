import React from "react";

const ModernAstrology = () => {
  return (
    <section className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8 bg-[#371326] p-2 rounded-md">
          {/* Header */}
          <div className="text-center bg-primary p-2 rounded-md">
            <p className="text-sm text-primarysec font-alkatra">
              Director, Founder & Principal of
            </p>
            <h1 className="text-3xl font-bold text-orange-400 font-amaranath">
              Modern Astrology
            </h1>
            <p className="text-xs text-gray-300 mt-1 font-alkatra">
              A Unit of Krishnamurti Academy of Modern Astrology & Spiritual
              Development
            </p>
          </div>

          {/* About */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              About <span className="text-white">Suvendu Paul</span>
            </h2>

            <ul className="space-y-2 text-sm text-gray-200">
              <li>• Blending Science with Spiritual Wisdom</li>
              <li>• Accurate KP Astrology for Today’s Lifestyle</li>
              <li>
                • Each consultation is conducted on a one-to-one basis, with
                dedicated time given to every client
              </li>
            </ul>
          </div>

          {/* INFO CARD */}
          <div className="bg-primarysec text-black rounded-xl p-6 text-sm leading-relaxed">
            <p>
              Astrologer Suvendu Paul is introduced as a devoted KP Astrologer,
              by whom astrology is regarded as more than a belief system.
            </p>
            <p className="mt-2">
              It is described as a science through which people are guided
              toward a practical, purposeful and fulfilling lifestyle.
            </p>
            <p className="mt-2">
              His approach blends traditional principles with modern
              methodologies, making predictions precise and reliable.
            </p>
          </div>

          {/* LONG DESCRIPTION */}
          <div className="bg-primarysec text-black rounded-xl p-6 text-xs leading-relaxed">
            <p>
              Astrologer Suvendu Paul practices KP Astrology with deep
              understanding of planetary sub-lords, cuspal charts and timing
              techniques...
            </p>
            <p className="mt-2">
              For over 11 years, this system has been practiced, delivering
              accurate, practical and fulfilling guidance.
            </p>
          </div>
        </div>

        {/* RIGHT REVIEW FORM */}
        <div className="bg-secondary rounded-2xl p-6 space-y-4">
          <h3 className="bg-orange-500 text-white text-center py-2 rounded-lg font-semibold">
            Write A Review After Consultancy
          </h3>

          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[var(--color-primarysec)] text-black outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Phone (Optional)</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[var(--color-primarysec)] text-black outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Email (Optional)</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[var(--color-primarysec)] text-black outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Upload your photo (Optional)</label>
            <button className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-md text-sm">
              Upload
            </button>
          </div>

          <div>
            <label className="text-sm">Write a Review</label>
            <textarea
              rows={4}
              className="w-full mt-1 px-3 py-2 rounded-md bg-[var(--color-primarysec)] text-black outline-none resize-none"
            />
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded-full font-semibold">
            Submit Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernAstrology;
