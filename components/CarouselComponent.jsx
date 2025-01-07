import React, { useState, useEffect } from "react";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add more images as needed
  const images = [
    "/assets/home-gallery-images/1.JPG",
    "/assets/home-gallery-images/2.JPG",
    "/assets/home-gallery-images/3.JPG",
    "/assets/home-gallery-images/4.JPG",
    "/assets/home-gallery-images/5.JPG",
    "/assets/home-gallery-images/6.JPG",
    "/assets/home-gallery-images/7.JPG",
    "/assets/home-gallery-images/8.JPG",
    "/assets/home-gallery-images/9.JPG",
    "/assets/home-gallery-images/10.JPG",
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-0 max-sm:p-0">
      <div
        className="relative w-96 h-96 max-sm:w-80 max-sm:h-80 perspective-1000"
        style={{ perspectiveOrigin: "50% 25%" }} // Tilt effect
      >
        {/* Carousel Container */}
        <div
          className="absolute w-full h-full transform-gpu transition-transform duration-500"
          style={{
            transform: `rotateX(${ window.innerWidth < 640 ? "0deg" : "-5deg"}) rotateY(${currentSlide * -(360 / images.length)}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-full h-full bg-cover bg-center border-2 border-yellow-300"
              style={{
                transform: `rotateY(${(index * 360) / images.length}deg) translateZ(${
                  window.innerWidth < 640 ? "550px" : "900px" // Adjust radius dynamically
                })`,
                backgroundImage: `url(${image})`,
                opacity: currentSlide === index ? 1 : 0.5,
                transition: "opacity 0.5s, transform 0.5s", // Smooth transition for scaling
                scale: currentSlide === index ? 1 : 1,
              }}
            />
          ))}
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

export default CarouselComponent;
