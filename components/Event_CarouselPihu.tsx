import { eventcards } from "@/lib/utils";
import React, { ReactNode, useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";



// Card Component
type CardProps = {
  title: string;
  imageUrl: string;
};

const PihuCard: React.FC<CardProps> = ({ title, imageUrl }) => (
  <div className="h-[30rem] max-xl:h-[25rem] max-lg:h-[20rem] max-md:h-[18rem] max-sm:h-[15rem] bg-gold text-gray-300 p-4 rounded-3xl text-center transition-all duration-300 border-2 border-black flex flex-col items-center justify-center">
    <img
      src={imageUrl}
      alt={title}
      className="h-[80%] w-full object-cover rounded-3xl mb-4"
    />
    <h2 className="text-[2rem] max-sm:text-[1rem] font-bold text-black">{title}</h2>
  </div>
);

// Carousel Component
type CarouselProps = {
  children: ReactNode;
};

const MAX_VISIBILITY = 3;

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(3);
  const count = React.Children.count(children);

  return (
    <div className="carousel relative w-[30rem] h-[30rem] max-xl:w-[25rem] max-xl:h-[25rem] max-lg:w-[20rem] max-lg:h-[20rem] max-md:w-[18rem] max-md:h-[18rem] max-sm:w-[15rem] max-sm:h-[15rem] flex justify-center items-center">
      {/* Left Navigation */}
      {active > 0 && (
        <button
          className="left-0 text-black text-[5rem] max-md:text-[3rem] max-sm:text-[2rem] absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform -translate-x-full -translate-y-1/2"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}

      {/* Cards */}
      {React.Children.map(children, (child, i) => {
        const offset = i - active; // Distance of this card from the active card
        const absOffset = Math.abs(offset); // Absolute distance

        const translateX = (() => {
         if(typeof window !== 'undefined'){
          if (window.innerWidth < 640) return offset * 2; // Small screens
          if (window.innerWidth < 768) return offset * 5; // Medium screens
         }
          return offset * 8; // Default (large screens)
        })();

        return (
          <div
            className="absolute w-full h-full transition-all duration-300"
            style={{
              zIndex: MAX_VISIBILITY - absOffset, // Higher zIndex for closer cards
              transform: `
                translateX(${translateX}rem)
                scale(${1 - absOffset * 0.1})`,
              opacity: absOffset > MAX_VISIBILITY ? "0" : "1",
              display: absOffset > MAX_VISIBILITY ? "none" : "block",
              filter: absOffset === 0 ? "none" : "brightness(0.9) blur(0.2rem)",
            } as React.CSSProperties}
          >
            {child}
          </div>
        );
      })}

      {/* Right Navigation */}
      {active < count - 1 && (
        <button
          className="right-0 text-black text-[5rem] max-md:text-[3rem] max-sm:text-[2rem] absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform translate-x-full -translate-y-1/2"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

// Carousel Wrapper Component
export const CarouselComponentPihu: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Carousel>
        {eventcards.map((event, i) => (
          <PihuCard key={i} title={event.title} imageUrl={event.imageUrl} />
        ))}
      </Carousel>
    </div>
  );
};
