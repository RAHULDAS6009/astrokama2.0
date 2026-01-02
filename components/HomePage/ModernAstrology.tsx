import React from "react";
const modernAstrologyPoints = [
  "It is described as a way through which people are guided toward a practical, purposeful, and fulfilling lifestyle.",
  "Faith is placed above all in the Supreme Lord, whose divine grace is acknowledged as greater than any forecast.",
  "Across the world, reliance is continued on traditional methods by many astrologers, though limitations are often perceived.",
  "Too often, astrology is dismissed by society, and astrologers are spoken of lightly or misunderstood.",
  "From this, inspiration was drawn for a different path—defined both by scientific method and spiritual essence.",
  "The KP technique, with its remarkable precision in calculation, was adopted as the foundation of practice.",
  "Yet it was realized that prediction alone required refinement to meet modern realities.",
  "Out of this realization, Modern Astrology was developed—a unique blend of KP methods and personal innovations.",
  "For over 11 years, this system has been practiced, through which accurate, practical, and fulfilling guidance has been offered.",
];

const ModernAstrology = () => {
  return (
    <section className="bg-secondary text-white h-[1000px] overflow-hidden">
      <div className="flex h-full">
        <div className="w-[70%] h-full flex flex-col">
          {/* Header */}
          <div className="h-[15%]">
            <div className="text-center bg-primary px-4 py-4 h-full flex flex-col justify-center">
              <p className="text-lg text-primarysec font-alkatra leading-none">
                Director, Founder & Principal of
              </p>
              <h1 className="text-4xl font-bold text-orange-400 font-amaranath leading-tight">
                Modern Astrology
              </h1>
              <p className="text-xs text-gray-300 mt-1 font-alkatra">
                A Unit of Krishnamurti Academy of Modern Astrology & Spiritual
                Development
              </p>
            </div>
          </div>

          <div className="h-[85%] flex flex-col max-w-3xl mx-auto w-full">
            <div className="h-[55%] flex py-4">
              <div className="w-1/2 h-full">
                <div className="flex-1 flex flex-col justify-center gap-4 h-full">
                  <div className="flex flex-col gap-2 justify-center">
                    <div className="w-16 inline-block px-3 py-1 bg-orange-500 text-[10px] text-white rounded-md">
                      About us
                    </div>

                    <div className="archivo-normal text-4xl font-bold leading-tight">
                      About <br />
                      <span>Suvendu Paul</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm w-80">
                    <div className="flex gap-2 items-start ">
                      <span className="mt-1 rounded-full bg-orange-500 w-4 h-4 shrink-0"></span>
                      Blending Science with Spiritual Wisdom
                    </div>
                    <div className="flex gap-2 items-start ">
                      <span className="mt-1 rounded-full bg-orange-500 w-4 h-4 shrink-0"></span>
                      Accurate KP Astrology for Today’s Lifestyle
                    </div>
                    <div className="flex gap-2 items-start ">
                      <span className="mt-1 rounded-full bg-orange-500 w-4 h-4 shrink-0"></span>
                      Each consultation is conducted on a one-to-one basis, with
                      dedicated time given to every client.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center px-4 text-sm text-center bg-primarysec text-black rounded-2xl overflow-hidden leading-snug ">
                Astrologer Suvendu Paul is introduced as a devoted KP
                Astrologer, by whom astrology is regarded as more than charts
                and predictions. - It is described as a way through which people
                are guided toward a practical, purposeful, and fulfilling
                lifestyle. - Faith is placed above all in the Supreme Lord,
                whose divine grace is acknowledged as greater than any forecast.
                - Across the world, reliance is continued on traditional methods
                by many astrologers, though limitations are often perceived. -
                Too often, astrology is dismissed by society, and astrologers
                are spoken of lightly or misunderstood. - From this, inspiration
                was drawn for a different path—defined both by scientific method
                and spiritual essence. - The KP technique, with its remarkable
                precision in calculation, was adopted as the foundation of
                practice.
              </div>
            </div>
            <div className="h-[45%] bg-primarysec text-black rounded-2xl flex justify-center items-center mb-4">
              <p className="px-6 text-center text-sm leading-relaxed">
                {modernAstrologyPoints.join(" ")}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT REVIEW FORM */}
        <div className="w-[30%] bg-[#3c1728] flex flex-col border-b-1 border-l-2 rounded-b-2xl border-primary h-full">
          <h3 className="bg-orange-500 font-amaranath rounded-b-full text-xl text-white text-center py-3 font-semibold shrink-0">
            Write A Review After Consultancy
          </h3>

          <div className="px-6 py-4 flex flex-col justify-evenly flex-1 overflow-hidden">
            <div>
              <label className="text-base libre-franklin-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-xl bg-[var(--color-primarysec)] text-black outline-none h-10"
              />
            </div>

            <div>
              <label className="text-base libre-franklin-medium">
                Phone (Optional)
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-xl bg-[var(--color-primarysec)] text-black outline-none h-10"
              />
            </div>

            <div>
              <label className="text-base libre-franklin-medium">
                Email (Optional)
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-xl bg-[var(--color-primarysec)] text-black outline-none h-10"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base libre-franklin-medium">
                Upload your photo (Optional)
              </label>
              <button className="w-fit mt-1 px-6 py-2 bg-primarysec text-black rounded-xl text-sm h-8 flex items-center">
                Upload
              </button>
            </div>

            <div className="flex-1 min-h-0 flex flex-col">
              <label className="text-sm libre-franklin-medium">
                Write a Review
              </label>
              <textarea
                rows={3}
                className="w-full mt-1 px-4 py-2 rounded-xl bg-[var(--color-primarysec)] text-black outline-none resize-none flex-1 min-h-[60px]"
              />
            </div>
          </div>

          <div className="px-6 pb-6 shrink-0">
            <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-full font-semibold">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAstrology;

