import React from "react";

const ConsultationBooking: React.FC = () => {
  return (
    <section className="h-full flex flex-col items-center w-full  text-white rounded-3xl p-8 space-y-10">
      {/* Header */}
      <h2 className="text-center text-2xl font-semibold">
        Consultation Booking – Offline or Online
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-start">
        <div className="max-w-md w-full rounded-2xl overflow-hidden shadow-xl bg-[#3b0f23] text-white">
          <div className="bg-primarysec text-center py-4">
            <h2 className="text-xl font-semibold font-amaranath text-primary">
              Offline Chamber Visit
            </h2>
          </div>

          <div className="px-6 py-5 space-y-4 text-sm leading-relaxed">
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Fill out the booking form –
                <span className="text-[#f5e7dc]">
                  আপনার বুকিং ফর্ম পূরণ করুন
                </span>
              </li>

              <li>
                After submission, you’ll receive a confirmation via WhatsApp –
                <span className="text-[#f5e7dc]">
                  সাবমিট করার পরে WhatsApp এ নিশ্চিতকরণ পাবেন
                </span>
              </li>

              <li>
                Please arrive at the chamber 10 minutes before your selected
                appointment time –
                <span className="text-[#f5e7dc]">
                  নির্ধারিত সময়ের ১০ মিনিট আগে উপস্থিত থাকুন
                </span>
              </li>

              <li>
                For any queries, feel free to call without hesitation –
                <span className="text-[#f5e7dc]">
                  যেকোনো প্রশ্নের জন্য নির্দ্বিধায় ফোন করুন
                </span>
              </li>
            </ul>
          </div>

          <div className="px-6 py-4 text-xs space-y-1 bg-[#3b0f23]">
            <p className="font-semibold text-sm">Chamber Address:</p>
            <p>Astrologer Suraj Paul, Modern Astrology</p>
            <p>2nd Floor, Above Volleyball UCO Bank</p>
            <p>Kolkata – 700040</p>
          </div>
        </div>

        <div className="max-w-md w-full rounded-2xl overflow-hidden shadow-xl bg-[#3b0f23] text-white">
          <div className="bg-primarysec text-center py-4">
            <h2 className="text-xl font-semibold font-amaranath text-primary">
              Online Consultation
            </h2>
          </div>

          <div className="px-6 py-5 space-y-4 text-sm leading-relaxed">
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Fill out the booking form –
                <span className="text-[#f5e7dc]"> প্রথমে ফর্ম ফিলাপ করুন।</span>
              </li>

              <li>
                After Submission, you'll receive a confirmation notification on
                WhatsApp –
                <span className="text-[#f5e7dc]">
                  {" "}
                  ফর্ম সাবমিট করার পর আপনার WhatsApp এ কনফার্মেশন নোটিফিকেশন
                  পাবেন
                </span>
              </li>

              <li>
                You may choose Phone Call or Video Call for your consultation –
                <span className="text-[#f5e7dc]">
                  {" "}
                  আপনি চাইলে ফোন কল বা ভিডিও কলের মাধ্যমে প্রেডিকশন নিতে পারবেন
                </span>
              </li>

              <li>
                If you prefer video call, please ensure Zoom App is installed on
                your phone –
                <span className="text-[#f5e7dc]">
                  {" "}
                  ভিডিও কল এর জন্য আপনার ফোনে Zoom App ইন্সটল করে রাখবেন।
                </span>
              </li>

              <li>
                At your selected time, Zoom meeting ID and Password will be sent
                via WhatsApp –
                <span className="text-[#f5e7dc]">
                  {" "}
                  নির্দিষ্ট টাইমে WhatsApp এ Zoom Meeting ID ও Password পাঠিয়ে
                  দেওয়া হবে।
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
