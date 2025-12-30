"use client";
import ModernAstrology from "@/components/HomePage/ModernAstrology";
import Image from "next/image";
import React from "react";
import GetConsultancyFormandKusti from "@/components/GetConsultancyAndKusti";

import Remaining from "@/components/HomePage/Remaining";
import MySvg from "@/components/MySvg";
import Skew3DButton from "@/components/Skew3DButton";
import { CTAButton, Navigation } from "@/components/common/Header";

const Page = () => {
  return (
    <div className="h-screen w-full">
      {/* <div className="my-10">
        <Skew3DButton />
      </div> */}
      <div
        className="
          w-full h-full
          bg-[linear-gradient(to_right,#280116_63%,#3c1728_63%),linear-gradient(#d1c1b4,#d1c1b4)]
          bg-[length:100%_83%,100%_17%]
          bg-[position:top,bottom]
          bg-no-repeat
        "
      >
        {/* TOP SECTION */}
        <div className="h-[83%] w-full flex">
          <div className="w-[63%] flex items-center justify-center text-white">
            <div className="max-w-[865px] mx-auto ">
              <div className=" flex w-full">
                <div className="w-[35%] flex flex-col   translate-y-10">
                  <span
                    className={`font-courgette courgette-regular  text-orange-500 text-xl lg:text-[1.375rem] w-full `}
                  >
                    Astrologer Suvendu Paul
                  </span>

                  <span className="text-xs  lg:text-xl rounded-md px-2 bg-white text-primary font-amaranath text-center w-[230px] height-[35px]">
                    Krishnamurti Paddhati
                  </span>
                </div>
                <div className="w-[65%]  rounded-full h-2 translate-y-15.5">
                  <Navigation />
                </div>
              </div>
              <div className="h-[67%]  translate-y-24">
                <Image
                  src="/dummyBanner.png"
                  alt="banner"
                  width={856}
                  height={482}
                  className=" rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="w-[37%]  text-white">
            <div className="max-w-[470px] mx-auto h-full flex flex-col items-center     justify-center ">
              <div className="flex gap-5 -translate-y-6">
                <span className="font-amaranath text-amber-200 text-2xl lg:text-3xl">
                  +91 9748 5888 62
                </span>
                <CTAButton />
              </div>
              <div className="">
                <GetConsultancyFormandKusti
                  title="Get Consultancy"
                  buttonTitle="Click For Next Process"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="h-[17%] w-full" />
      </div>
      <ModernAstrology />
      <Remaining />
    </div>
  );
};

export default Page;
