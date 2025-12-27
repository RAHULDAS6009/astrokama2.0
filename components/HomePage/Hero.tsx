import Image from "next/image";
import GetConsultancyFormandKusti from "../GetConsultancyAndKusti";

export function Hero() {
  return (
    <div
      className="
      min-h-screen w-full
    bg-[linear-gradient(to_right,#280116_66.6%,#3c1728_66.6%),linear-gradient(#d1c1b4,#d1c1b4)]
    bg-[length:100%_80%,100%_80%]
    bg-[position:top,bottom]
    bg-no-repeat
    "
    >
      <div className=" mx-auto h-full flex  justify-between px-4 translate-y-20">
        {/* Left Half - Image */}
        <div className="w-[60%] h-[500px] relative">
          <Image
            src="/dummyBanner.png"
            alt="banner"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Right Half - Form */}
        <div className="w-[30%] h-full ">
          <GetConsultancyFormandKusti
            title="Get Consultancy"
            buttonTitle="Click For Next Process"
          />
        </div>
      </div>
    </div>
  );
}
