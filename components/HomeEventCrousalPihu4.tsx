

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { eventcards } from "@/lib/utils";



const HomeEventCrousalPihu4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Images Array

  // Track window width for dynamic carousel adjustments
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % eventcards.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, [eventcards.length]);

  const handleSlideChange = (index:number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-0 max-sm:p-0 sm:hidden">
      <div
        className="relative w-96 h-96 max-sm:w-80 max-sm:h-80 perspective-1000"
        style={{ perspectiveOrigin: "50% 25%" }}
      >
        {/* Carousel Container */}
        <div
          className="absolute w-full h-full transform-gpu transition-transform duration-500"
          style={{
            transform: `rotateX(${windowWidth < 640 ? "0deg" : "-5deg"}) rotateY(${currentSlide * -(360 / eventcards.length)}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {eventcards.map((image, index) => {
            const isCurrent = currentSlide === index;
            const isNext = currentSlide === (index + 1) % eventcards.length;
            const isBefore = currentSlide === (index - 1) % eventcards.length;
            const isAfterNext = currentSlide === (index + 2) % eventcards.length;
            const isBeforeLast = currentSlide === (index - 2) % eventcards.length;

            return (
              <div
                key={index}
                className="absolute w-full h-full border-2 border-gold rounded-3xl"
                style={{
                  transform: `rotateY(${(index * 360) / eventcards.length}deg) translateZ(${windowWidth < 640 ? "600px" : "900px"
                    })`,
                  opacity: isCurrent || isNext || isBefore ? 1 : (isAfterNext || isBeforeLast ? 0.7 : 0),
                  filter: isCurrent || isNext || isBefore ? "none" : (isAfterNext || isBeforeLast ? "brightness(0.5)" : "blur(2px)"),
                  transition: "opacity 0.5s, transform 0.5s, filter 0.5s",
                }}
              >
                {/* Optimized Image */}
                <Image
                  className="rounded-3xl"
                  src={image.imageUrl}
                  alt={`Slide ${index + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            );
          })}

        </div>
      </div>

      {/* Navigation Dots */}
      {/* <div className="flex space-x-2 mt-[15rem] max-sm:mt-[10rem]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-5 h-5 max-sm:w-3 max-sm:h-3 rounded-full bg-white opacity-50 transition-opacity ${
              currentSlide === index ? "opacity-100" : ""
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default HomeEventCrousalPihu4;
