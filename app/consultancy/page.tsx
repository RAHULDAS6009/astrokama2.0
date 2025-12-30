"use client";
import {
  CTAButton,
  Header,
  Logo,
  Navigation,
} from "@/components/common/Header";
import ConsultationBooking from "@/components/Consultancy/ConsultationBooking";
import ConsultationForm from "@/components/Consultancy/ConsultationForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-primary min-h-screen w-full">
      {/* Header  */}
      <Header />

      <div className="">
        <div className="max-w-7xl mx-auto h-full">
          <ConsultationBooking />
          <div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
