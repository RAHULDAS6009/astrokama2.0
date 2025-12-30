import React, { useState } from "react";
import { Triangle } from "lucide-react";

const images = ["/update1.jpg", "/update1.jpg", "/update1.jpg", "/update1.jpg"];

const LatestUpdates = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h3 className="text-center font-archivo archivo-normal text-4xl text-white font-semibold mb-4">
        Latest Updates
      </h3>

      <section className="w-full flex justify-between items-center py-10">
        <div className="bg-formbg w-10 h-[390px] rounded-r-full"></div>

        <div>
          <div className="max-w-[800px] p-4 mx-auto bg-[#590033] rounded-2xl flex flex-col gap-2">
            <div className="text-white font-archivo archivo-normal text-center text-xs">
              Click For any View For Better View
            </div>

            <div className="flex gap-3 items-center overflow-hidden">
              {/* Left */}
              <Triangle
                onClick={prevSlide}
                className="-rotate-90 w-6 h-6 cursor-pointer"
                fill="#d1c1b4"
              />

              {/* Slides */}
              <div className="flex w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${current * 33.333}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="w-[222.5px] px-1 rounded-2xl overflow-hidden min-h-[300px]"
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <Triangle
                onClick={nextSlide}
                className="rotate-90 w-6 h-6 cursor-pointer"
                fill="#d1c1b4"
              />
            </div>

            {/* Dots */}
            <div className="w-full flex justify-center gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    current === i ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-formbg w-10 h-[390px] rounded-l-full"></div>
      </section>
    </div>
  );
};

export default LatestUpdates;
