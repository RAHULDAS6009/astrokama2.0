"use client";

import React from "react";
import { STUDENT } from "../mock";

export default function ReExamPage() {
  const { reExamFees } = STUDENT;

  const handlePay = (examName: string, amount: number) => {
    // Placeholder for payment logic
    console.log(`Paying ${amount} for ${examName}`);
    alert(`Initiating payment of INR ${amount} for ${examName} Re-Exam`);
  };

  return (
    <div className="bg-[#a89f91] rounded-[2rem] p-6 md:p-12 shadow-2xl border-4 border-[#8f867a] min-h-[500px] flex flex-col items-center">
      <h2 className="text-3xl font-amaranath font-bold text-[#8B4513] mb-12 bg-[#eaccad] px-8 py-2 rounded-lg inline-block shadow-sm">
        Re-Exam Fees
      </h2>

      <div className="w-full max-w-3xl space-y-8">
        {reExamFees.map((fee) => (
          <div
            key={fee.id}
            className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8"
          >
            {/* Exam Name Label */}
            <div className="bg-[#eecda3] text-black font-bold text-lg py-3 px-12 rounded-lg shadow-md border border-[#dcb88e] w-full md:w-56 text-center">
              {fee.examName}
            </div>

            {/* Pay Button */}
            <button
              onClick={() => handlePay(fee.examName, fee.amount)}
              className="bg-[#002884] py-3 px-8 rounded-lg shadow-md hover:bg-[#001f6b] transition-transform active:scale-95 w-full md:w-auto"
            >
              {/* Inner Text with Pink Background as seen in design */}
              <span className="bg-pink-200 text-[#002884] md:text-black/80 font-bold px-4 py-1 rounded text-lg block md:inline-block">
                PAY {fee.amount}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
