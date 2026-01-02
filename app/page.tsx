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
    
    <Hero/>
      <ModernAstrology />
      <Remaining />
    </div>
  );
};
function Hero(){
  return(
      <div
        className="
          w-full h-full
          bg-[linear-gradient(to_right,#280116_70%,#3c1728_70%),linear-gradient(#d1c1b4,#d1c1b4)]
          bg-[length:100%_83%,100%_17%]
          bg-[position:top,bottom]
          bg-no-repeat
        "
      >
        {/* TOP SECTION */}
        <div className="h-[83%] w-full flex ">
          <div className="w-[70%] max-w-[1000px]  mx-auto h-full flex items-center  text-white">
            <div className="w-full flex flex-col justify-center gap-5 h-full translate-y-10">

              <div className=" flex items-end w-full">

                <div className="w-[30%] flex flex-col   ">
                  <span
                    className={`font-courgette courgette-regular  text-orange-500 text-xl lg:text-[1.375rem] w-full `}
                  >
                    Astrologer Suvendu Paul
                  </span>

                  <span className="text-xs  lg:text-xl rounded-md px-2 bg-white text-primary font-amaranath text-center w-[230px] height-[35px]">
                    Krishnamurti Paddhati
                  </span>
                </div>

                <div className="w-[70%]   rounded-full ">
                  <Navigation />
                </div>
              </div>

              <div className="w-full translate-y-3 ">
                <Image
                  src="/dummyBanner.png"
                  alt="banner"
                  width={1000}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-[30%]  text-white ">
            <div className="max-w-[400px] mx-auto h-full flex flex-col items-center     justify-center ">
              <div className="flex gap-5 items-center -translate-y-15">
                <span className="font-amaranath text-amber-200 text-xl lg:text-2xl">
                  +91 9748 5888 62
                </span>
                <CTAButton />
              </div>
              <div className="text-black">
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
  )
}

export default Page;
