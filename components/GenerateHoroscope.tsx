const HoroscopeResult = () => {
  return (
    <section className="lg:h-[156.5%]  flex justify-center px-4">
      <div className="w-full  flex flex-col py-10">
        {/* CARD */}
        <div className="w-full flex flex-col flex-1 translate-y-10 rounded-[50px] border overflow-hidden shadow-xl mt-20">
          {/* HEADER */}
          <div className="bg-primarysec text-secondary text-center py-4 font-semibold font-amaranath">
            <h3 className="text-xl">Select Your Zodiac Sign</h3>

            <div className="flex justify-center gap-3 mt-3">
              <select className="bg-white text-xs px-3 py-1 rounded-md outline-none">
                <option>Choose your sign</option>
                <option>Aries</option>
                <option>Taurus</option>
                <option>Gemini</option>
                <option>Cancer</option>
                <option>Leo</option>
                <option>Virgo</option>
              </select>

              <button className="bg-secondary text-primarysec text-xs px-4 py-1 rounded-md font-semibold">
                Generate
              </button>
            </div>
          </div>

          {/* BODY – fills remaining height */}
          <div className="bg-formbg flex-1 overflow-y-auto px-4 py-5 space-y-3 text-[11px] text-secondary leading-relaxed">
            {[
              "Today brings mixed energies, requiring patience and thoughtful decisions.",
              "Financial matters may see gradual improvement if handled wisely.",
              "Avoid impulsive communication in personal relationships.",
              "A good day for spiritual practices and meditation.",
              "Unexpected news may alter your routine—stay flexible.",
              "Focus on health and maintain emotional balance.",
              "Professional responsibilities demand attention.",
              "Trust your intuition before making commitments.",
              "Small gains are indicated through persistent efforts.",
              "Keep expectations realistic to avoid disappointment.",
              "Seek guidance from elders or mentors.",
              "A calm mindset will attract positive outcomes.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white/90 border border-dashed border-primarysec rounded-xl px-3 py-2"
              >
                {text}
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="bg-primarysec text-secondary text-center py-3 text-[10px] px-4">
            This is a General Horoscope and may not occur exactly.
            <br />
            Please consult for your personalized accurate prediction.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeResult;
