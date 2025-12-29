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
    <section className="bg-primary text-white min-h-[695px] h-full">
      <div className="flex  h-full">
        <div className="w-[63%] h-[15%] h-full bg-[#371326]">
          {/* Header */}
          <div>
            <div className="text-center bg-primary px-4 py-6">
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
          </div>

          <div className="h-[80%] flex flex-col  max-w-3xl mx-auto">
            <div className="h-1/2 flex py-4">
              <div className="w-1/2 h-full">
                <div className="flex-1 flex flex-col justify-center gap-8 h-full">
                  <div className="flex flex-col gap-2 justify-center">
                    <div className="w-16 inline-block px-3 py-1 bg-orange-500 text-[8px]  text-white rounded-md">
                      About us
                    </div>

                    <div className="archivo-normal text-3xl font-bold leading-tight">
                      About <br />
                      <span>Suvendu Paul</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-[10px]  w-64">
                    <div className="flex gap-2 items-start ">
                      <span className="mt-1 rounded-full bg-orange-500 w-2 h-2 shrink-0"></span>
                      Blending Science with Spiritual Wisdom
                    </div>
                    <div className="flex gap-2 items-start ">
                      <span className="mt-1 rounded-full bg-orange-500 w-2 h-2 shrink-0"></span>
                      Accurate KP Astrology for Today’s Lifestyle
                    </div>
                    <div className="flex gap-2 items-start ">
                      <span className="mt-1 rounded-full bg-orange-500 w-2 h-2 shrink-0"></span>
                      Each consultation is conducted on a one-to-one basis, with
                      dedicated time given to every client.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center px-4 text-[10px] text-center  bg-primarysec text-black rounded-2xl ">
                - Astrologer Suvendu Paul is introduced as a devoted KP
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
                practice. - Yet it was realized that prediction alone required
                refinement to meet modern realities. - Out of this realization,
                Modern Astrology was developed—a unique blend of KP methods and
                personal innovations. - For over 11 years, this system has been
                practiced, through which accurate, practical, and fulfilling
                guidance has been offered.
              </div>
            </div>
            <div className="h-1/2  bg-primarysec text-black rounded-2xl flex justify-center items-center">
              description
            </div>
          </div>
        </div>

        {/* RIGHT REVIEW FORM */}
        <div className="w-[37%] bg-[#3c1728] rounded-md flex flex-col">
          <h3 className="bg-orange-500 font-amaranath rounded-b-full text-xl text-white text-center py-3 font-semibold">
            Write A Review After Consultancy
          </h3>

          <div className="px-6 py-6 space-y-4 flex-1">
            <div>
              <label className="text-lg libre-franklin-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-2xl bg-[var(--color-primarysec)] text-black outline-none"
              />
            </div>

            <div>
              <label className="text-lg libre-franklin-medium">
                Phone (Optional)
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-2xl bg-[var(--color-primarysec)] text-black outline-none"
              />
            </div>

            <div>
              <label className="text-lg libre-franklin-medium">
                Email (Optional)
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-2xl bg-[var(--color-primarysec)] text-black outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg libre-franklin-medium">
                Upload your photo (Optional)
              </label>
              <button className="w-fit mt-2 px-6 py-2 bg-primarysec text-black rounded-2xl text-sm">
                Upload
              </button>
            </div>

            <div>
              <label className="text-sm libre-franklin-medium">
                Write a Review
              </label>
              <textarea
                rows={4}
                className="w-full mt-1 px-4 py-2 rounded-2xl bg-[var(--color-primarysec)] text-black outline-none resize-none"
              />
            </div>
          </div>

          <div className="px-6 pb-6">
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

//  {/* Header */}

{
  /* Content */
}
{
  /* Top Row */
}
{
  /* About Left */
}

//               {/* About Right (image / card placeholder) */}
//               <div className="flex-1 bg-yellow-400 h-full p-4 text-black">
//                 <div className="flex flex-col gap-3 text-xs leading-relaxed">
//                   {/* Intro Text */}
//                   <p>
//                     Astrologer Suvendu Paul is introduced as a devoted KP
//                     Astrologer, by whom astrology is regarded as more than
//                     charts and predictions.
//                   </p>

//                   {/* Points */}
//                   <ul className="space-y-2">
//                     {modernAstrologyPoints.map((point, index) => (
//                       <li key={index} className="flex gap-2">
//                         <span className="mt-1 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="rounded-md bg-blue-200 h-1/2 flex items-center justify-center text-black font-semibold">
//               Bottom Content
//             </div>
//           </div>
