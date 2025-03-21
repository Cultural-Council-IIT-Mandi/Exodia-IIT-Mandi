"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <>
      <div>
        <div
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-3xl border-2 border-white relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-80 w-72 transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <Image
            src={card.photo}
            alt={card.name}
            fill
            className="object-cover absolute inset-0"
          />
          <div
            className={cn(
              "z-[900] absolute inset-0 bg-black/50 flex flex-col justify-end items-center gap-2 px-4 transition-opacity duration-300",
              hovered === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.name}
            </div>
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              <div className="flex justify-center items-center gap-2 mb-4">
                {/* social media link on circles mapp  */}
                {card.socialMediaLinks.map((l: { name: string; link: string }, index: number) => (
                  <div className="bg-white rounded-3xl hover:scale-150 transition-transform duration-300" key={index}>
                    <Link href={l.link}>
                      <Image src={`/icons/socialmedia2/${l.name}.png`} height={10} width={30} alt={l.name} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {card.heading && (
          <div className="text-center mt-4">
            <h3 className="text-lg md:text-xl font-semibold">{card.heading}</h3>
          </div>
        )}
      </div>
    </>
  )
);

Card.displayName = "Card";

// type Card = {
//   title: string;
//   src: string;
// };

type Card = {
  name: string;
  photo: string;
  heading?: string;
  socialMediaLinks: {
    name: string;
    link: string;
  }[];
};


export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto md:px-8 w-full"> */}
      <div className="flex flex-row justify-center items-center gap-10 h-auto flex-wrap w-full">
        {cards.map((card, index) => (
          <>
            <div className="flex flex-col justify-center items-center ">
              <Card
                key={card.name}
                card={card}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
              { card.name == "Vishal Kumar" && (
                  <div className="flex justify-center items-center gap-2 mb-4">
                    {card.socialMediaLinks.map((l: { name: string; link: string }, index: number) => (
                      <div className="bg-white rounded-3xl hover:scale-150 transition-transform duration-300" key={index}>
                        <Link href={l.link}>
                          <Image src={`/icons/socialmedia2/${l.name}.png`} height={10} width={30} alt={l.name} />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </>
        ))}

      </div>
    </>
  );
}
