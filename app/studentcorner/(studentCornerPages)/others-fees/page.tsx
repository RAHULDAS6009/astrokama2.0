"use client";

import React, { useState } from "react";

export default function OthersFeesPage() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    // Placeholder for payment logic
    console.log("Pay clicked", { description, amount });
    alert(`Initiating payment of INR ${amount} for: ${description}`);
  };

  return (
    <div className="bg-[#a89f91] rounded-[2rem] p-6 md:p-12 shadow-2xl border-4 border-[#8f867a] min-h-[500px] flex flex-col items-center">
      <h2 className="text-3xl font-amaranath font-bold text-[#8B4513] mb-10 bg-[#eaccad] px-8 py-2 rounded-lg inline-block shadow-sm">
        Others Fees
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column: Description */}
        <div className="flex flex-col gap-2">
          <label className="text-black font-medium text-lg ml-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-64 bg-[#eecda3] rounded-xl p-4 text-[#4a1228] font-medium shadow-inner border border-[#dcb88e] outline-none focus:ring-2 focus:ring-[#8B4513] resize-none"
          />
        </div>

        {/* Right Column: Key Details & Payment */}
        <div className="flex flex-col justify-start md:mt-8 space-y-8">
          {/* Amount Input */}
          <div className="flex flex-col gap-2">
            {/* The image shows the label/placeholder inside or visually distinct. 
                 I'll use a visually distinct input container as per design. */}
            <div className="bg-[#e9dcc9] p-2 rounded-lg flex items-center shadow-sm">
              <input
                type="number"
                placeholder="Enter Amount INR"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent text-[#000080] font-bold text-lg placeholder-[#000080]/60 outline-none text-center"
              />
            </div>
          </div>

          {/* Pay Button */}
          <div className="flex justify-center">
            <button
              onClick={handlePay}
              className="bg-[#002884] text-pink-200 font-bold text-xl px-12 py-3 rounded-lg shadow-lg hover:bg-[#001f6b] transition-transform active:scale-95 uppercase tracking-wider"
            >
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
