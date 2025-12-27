"use client";
import GetConsultancyFormandKusti from "@/components/GetConsultancyAndKusti";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
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

function Hero() {
  return (
    <div className="h-screen  bg-[linear-gradient(176deg,#280116_60%,#d1c1b4_60%)]">
      {/* <div className="bg-primary h-[80%] absolute"></div>
      <div className="bg-primarysec h-[20%] absolute"></div> */}
      <div className="flex items-center gap-12 max-w-7xl mx-auto translate-y-28">
        <Image
          className="rounded-2xl"
          src={"/dummyBanner.png"}
          alt="banner"
          width={800}
          height={800}
        />
        <GetConsultancyFormandKusti
          title="Get Consultancy"
          buttonTitle="Clik For Next Process"
        />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="bg-primary w-full border border-white">
      <div className="  flex  justify-between items-center max-w-350 py-5 mx-auto">
        <div className="flex flex-col justify-center">
          <span className="courgette-regular text-orange-500">
            Astrologer Suvendu paul
          </span>
          <span className="rounded-md bg-white text-primary font-amaranath text-center">
            Krishnamurti Paddhati
          </span>
        </div>
        <Navigation />
        <div className="flex gap-2 items-center">
          <span className="font-amaranath text-amber-200">
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
    title: "Contact",
    url: "/contact",
  },
];
function Navigation() {
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
    <div className=" border border-amber-100 rounded-full flex  justify-between items-center gap-8 px-8 h-10 bg-secondary">
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
            } text-sm cursor-pointer`}
          >
            {nav.title}
          </div>
        );
      })}
    </div>
  );
}

function Badge() {}

function CTAButton() {
  return (
    <button className="layer-btn h-10">
      <span></span>
      <span className="font-amaranath text-amber-200 h-10">Book Now</span>
    </button>
  );
}
