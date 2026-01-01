import React, { useState, useRef, useEffect, useCallback } from "react";
import { Triangle, X } from "lucide-react";

const images = ["/update1.jpg", "/update1.jpg", "/update1.jpg", "/update1.jpg"];

const LatestUpdates = () => {
  // Triple the items to create buffers on both sides
  // [Set 1 (Buffer)] [Set 2 (Main)] [Set 3 (Buffer)]
  const extendedImages = [...images, ...images, ...images];
  
  // Start at the beginning of the middle set
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isAnimating = useRef(false);

  const prevSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handleTransitionEnd = () => {
    isAnimating.current = false;
    const totalSets = 3;
    const setLength = images.length;

    // If we've scrolled into the right buffer (Set 3), snap back to Main Set (Set 2)
    if (currentIndex >= 2 * setLength) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - setLength);
    }
    // If we've scrolled into the left buffer (Set 1), snap forward to Main Set (Set 2)
    else if (currentIndex < setLength) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + setLength);
    }
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
                className="-rotate-90 w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                fill="#d1c1b4"
              />

              {/* Slides */}
              <div className="flex w-full overflow-hidden">
                <div
                  className="flex"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: `translateX(-${currentIndex * 33.333}%)`, // Assuming 3 items visible, so each is 33.333% width
                    transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
                  }}
                >
                  {extendedImages.map((image, index) => (
                    // We map the key to be unique, but stable across renders for same items in same position
                    <div
                      key={index}
                      className="w-full min-w-[33.333%] px-1 rounded-2xl overflow-hidden min-h-[300px] cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <Triangle
                onClick={nextSlide}
                className="rotate-90 w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                fill="#d1c1b4"
              />
            </div>

            {/* Dots */}
            <div className="w-full flex justify-center gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    // Determine "active" dot based on the normalized index (relative to original set)
                    (currentIndex % images.length) === i ? "bg-white" : "bg-white/40"
                  }`}
                  // Optional: Allow clicking dots to jump (would need specific logic for infinite scroll jumping)
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-formbg w-10 h-[390px] rounded-l-full"></div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full z-50 cursor-pointer"
          >
            <X size={32} color="#ffffff" strokeWidth={3} />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestUpdates;
