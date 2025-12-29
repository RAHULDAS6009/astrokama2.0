"use client";
import GetConsultancyFormandKusti from "@/components/GetConsultancyAndKusti";
import { Hero } from "@/components/HomePage/Hero";
import ModernAstrology from "@/components/HomePage/ModernAstrology";
import ServicesOfferedAndKusti from "@/components/HomePage/ServicesOfferedAndKusti";
import WhatClientSayAboutUs from "@/components/HomePage/WhatClientSayAboutUs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <ModernAstrology />
      <WhatClientSayAboutUs />
      <ServicesOfferedAndKusti />

      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[30%]">
          {/* <GetConsultancyFormandKusti
            title="Get Consultancy"
            buttonTitle="Click On Next Process"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className=" w-full  ">
      <div className="bg-primary w-full grid grid-cols-6  justify-between items-center  ">
        <div className="flex flex-col col-span-2   h-full lg:pl-5  lg:pt-10   justify-center ">
          <span className="courgette-regular text-orange-500 text-xl lg:text-2xl w-full ">
            Astrologer Suvendu paul
          </span>
          <div>
            <span className="text-xs lg:text-xl rounded-md px-2 bg-white text-primary font-amaranath text-center">
              Krishnamurti Paddhati
            </span>
          </div>
        </div>
        <div className="col-span-2 py-5 max-w-2xl mx-auto ">
          <Navigation />
        </div>
        <div className="col-span-2 pt-6  bg-secondary h-full flex justify-center gap-5 items-center">
          <span className="font-amaranath text-amber-200 text-2xl lg:text-3xl">
            +91 9748 5888 62
          </span>
          <CTAButton />
        </div>
      </div>
    </div>
  );
}
const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Consultancy",
    url: "/consultancy",
  },
  {
    title: "Courses",
    url: "/courses",
  },

  {
    title: "Student Corner",
    url: "/studentcorner",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Product",
    url: "/product",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
export function Navigation() {
  const router = useRouter();
  const pathName = usePathname();
  const [isactive, setIsActive] = useState("/");

  useEffect(() => {
    setIsActive(pathName);
  }, []);

  function activeTab(url: string) {
    console.log(isactive);
    return isactive === url;
  }
  return (
    <div className="shadow-lg shadow-amber-300/50 border border-amber-100 rounded-2xl flex  justify-between items-center gap-8 px-8 h-8 bg-secondary">
      {navLinks.map((nav, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              router.push(`${nav.url}`);
              setIsActive(nav.url);
            }}
            className={`${
              activeTab(nav.url) ? "text-orange-400" : "text-white"
            } text-[10px] cursor-pointer`}
          >
            {nav.title}
          </div>
        );
      })}
    </div>
  );
}

export function CTAButton() {
  return (
    <button className="layer-btn h-14">
      <span className="h-14"></span>
      <span className="font-amaranath text-amber-200 h-14 text-2xl lg:text-3xl">
        Book Now
      </span>
    </button>
  );
}
