import React from "react";

const ConsultationBooking: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-12 py-8">
      {/* Header */}
      <h2 className="text-center text-3xl font-semibold text-orange-400 font-amaranath tracking-wide">
        Please read carefuly before proceeding
      </h2>

      {/* TOP SECTION: 3 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {/* Card 1: Image Split */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full min-h-[400px]">
          <img
            src="/office_online_split.png"
            alt="Office vs Online Consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2: Offline Chamber Visit */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#3b0f23] to-[#25000f] text-white border border-white/10 flex flex-col h-full">
          <div className="bg-gradient-to-r from-gray-200 to-white text-center py-3 shadow-md">
            <h2 className="text-xl font-bold font-serif text-black tracking-wide uppercase">
              Offline Chamber Visit
            </h2>
          </div>

          <div className="p-6 space-y-4 text-xs leading-relaxed flex-1 font-sans">
            <ul className="list-disc pl-4 space-y-3 marker:text-orange-500">
              <li>
                <span className="font-semibold text-orange-200">
                  Fill out the booking form
                </span>{" "}
                - প্রথমে ফর্ম ফিলাপ করুন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  After Submission, you'll receive a confirmation notification
                  on WhatsApp.
                </span>{" "}
                - ফর্ম সাবমিট করার পর আপনার WhatsApp - এ কনফার্মেশন নোটিফিকেশন
                পাবেন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  Please arrive at the Chamber 10 Minutes before your selected
                  appointment time.
                </span>{" "}
                - আপনি চাইলেন এপোয়েন্টমেন্ট সিলেক্ট করেছেন, সেইদিন বুকিং টাইমের ১০
                মিনিট আগে চেম্বারে চলে আসবেন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  For any queries, feel free call without hesitation.
                </span>{" "}
                - যেকোনো প্রয়োজনে নির্দ্বিধায় ফোন করে যোগাযোগ করতে পারেন।
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="font-bold text-pink-400 underline mb-1">
                Chamber Address:
              </p>
              <p className="text-gray-300">
                Astrologer Suvendu Paul, Modern Astrology,
                <br />
                85 NSC Bose Road,
                <br />
                2nd Floor, Above Tollygunge UCO Bank
                <br />
                Kolkata – 700040
                <br />
                <span className="text-white font-semibold">
                  Phone: 9748 5888 62
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Online Consultation */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#3b0f23] to-[#25000f] text-white border border-white/10 flex flex-col h-full">
          <div className="bg-gradient-to-r from-gray-200 to-white text-center py-3 shadow-md">
            <h2 className="text-xl font-bold font-serif text-black tracking-wide uppercase">
              Online Consultation
            </h2>
          </div>

          <div className="p-6 space-y-4 text-xs leading-relaxed flex-1 font-sans">
            <ul className="list-disc pl-4 space-y-3 marker:text-orange-500">
              <li>
                <span className="font-semibold text-orange-200">
                  Fill out the booking form
                </span>{" "}
                - প্রথমে ফর্ম ফিলাপ করুন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  After Submission, you'll receive a confirmation notification
                  on WhatsApp.
                </span>{" "}
                - ফর্ম সাবমিট করার পর আপনার WhatsApp - এ কনফার্মেশন নোটিফিকেশন
                পাবেন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  You may choose Phone Call or Video Call for your consultation.
                </span>{" "}
                - আপনি চাইলে ফোন কল বা ভিডিও কলের মাধ্যমে প্রেডিকশন নিতে পারবেন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  If you prefer video call, please ensure Zoom App is installed
                  on your phone.
                </span>{" "}
                - ভিডিও কলের জন্য আপনার ফোনে আগে থেকেই Zoom App ইন্সটল করে
                রাখবেন।
              </li>
              <li>
                <span className="font-semibold text-orange-200">
                  At your selected time, Zoom meeting ID and Password will be
                  sent via WhatsApp.
                </span>{" "}
                - নির্দিষ্ট টাইমে WhatsApp এ Zoom Meeting ID ও Password পাঠিয়ে
                দেওয়া হবে।
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MID SECTION: Proven Track Record */}
      <div className="w-full max-w-5xl text-center space-y-4 pt-8">
        <h3 className="text-orange-400 font-serif text-lg tracking-widest uppercase">
          Proven Track Record
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
          A Decade of <span className="text-orange-500 italic">Transforming Lives</span>
        </h2>
        
        <div className="relative mt-8 py-6 px-10 border-2 border-orange-500/50 rounded-full bg-black/20 backdrop-blur-sm inline-block">
            <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl text-white font-serif">
                <span className="text-6xl text-orange-400 font-bold">11+</span> Years of Experience
            </div>
            <p className="text-orange-400 text-sm md:text-base mt-2 font-sans tracking-wide">
                Delivering accurate, practical guidance worldwide
            </p>
        </div>
      </div>

      {/* BOTTOM SECTION: 3 Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl px-4 pt-8">
        <div className="bg-[#2a0e1e] border border-orange-500/30 rounded-3xl p-8 text-center space-y-4 hover:bg-[#3b152b] transition duration-300">
            <h3 className="text-xl font-bold text-white font-serif">Guidance with Empathy</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
                Helping clients make confident decisions in career, relationships, and finance with a compassionate, non-judgmental approach.
            </p>
        </div>

        <div className="bg-[#2a0e1e] border border-orange-500/30 rounded-3xl p-8 text-center space-y-4 hover:bg-[#3b152b] transition duration-300">
            <h3 className="text-xl font-bold text-white font-serif">Ethical Transparency</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
                A strictly ethical process with no fear-mongering. Honest readings that focus on what is possible, not just what is destined.
            </p>
        </div>

        <div className="bg-[#2a0e1e] border border-orange-500/30 rounded-3xl p-8 text-center space-y-4 hover:bg-[#3b152b] transition duration-300">
            <h3 className="text-xl font-bold text-white font-serif">Actionable Clarity</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
                Clients leave with more than just predictions — they leave with a grounded plan, specific timing, and simple language they can understand.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
