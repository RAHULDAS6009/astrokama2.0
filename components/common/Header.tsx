import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  // Check if pathname exists and starts with /studentcorner
  // Removing the contact info section for all pages under /studentcorner
  const isStudentCorner = pathname?.startsWith("/studentcorner/");

  return (
    <div className="w-full flex items-center justify-between ">
      <div className="  -translate-y-5">
        <Logo />
      </div>
      <div className=" flex items-baseline mt-6 justify-center pb-1">
        <Navigation />
      </div>
      {!isStudentCorner && (
        <div className="   flex justify-center items-center pr-4 pb-4">
          <div className="flex gap-5 translate-y-6">
            <span className="font-amaranath text-amber-200 text-2xl lg:text-2xl">
              +91 9748 5888 62
            </span>
            <CTAButton />
          </div>
        </div>
      )}
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex flex-col   w-full    h-full lg:pl-5  lg:pt-10   justify-center ">
      <span className="courgette-regular text-orange-500 text-xl lg:text-2xl w-full ">
        Astrologer Suvendu Paul
      </span>
      <div>
        <div className=" text-xs w-full lg:text-xl rounded-md px-2 bg-white text-primary font-amaranath text-center ">
          Krishnamurti Paddhati
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
    url: "/course",
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
    <div className=" shadow-lg shadow-amber-300/50 border border-amber-100 rounded-2xl flex  justify-between items-center gap-8 px-8 h-10 bg-secondary">
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
            } text-[14px] cursor-pointer`}
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
    <button className="layer-btn h-12">
      <span className="h-12"></span>
      <span className="font-amaranath text-amber-200 h-12 text-xl lg:text-2xl">
        Book Now
      </span>
    </button>
  );
}
