import Image from "next/image";
import GetConsultancyFormandKusti from "../GetConsultancyAndKusti";

export function Hero() {
  return (
    <div className="h-screen  bg-[linear-gradient(176deg,#280116_60%,#d1c1b4_60%)]">
      {/* <div className="bg-primary h-[80%] absolute"></div>
      <div className="bg-primarysec h-[20%] absolute"></div> */}
      <div className="flex items-center gap-12 max-w-7xl mx-auto translate-y-20">
        {/* TODO: Image Slider  */}
        <Image
          className="rounded-2xl"
          src={"/dummyBanner.png"}
          alt="banner"
          width={1000}
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
