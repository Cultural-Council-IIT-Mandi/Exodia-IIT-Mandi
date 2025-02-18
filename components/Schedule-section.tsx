"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ScheduleEventList } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const ScheduleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the vertical line
    gsap.from(".timeline-line", {
      scaleY: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate event cards
    const eventCards = gsap.utils.toArray(".event-card");

    eventCards.forEach((card, index) => {
      const direction = index % 2 === 0 ? -1 : 1; // Alternate left/right
      gsap.fromTo(
        card as HTMLElement,
        { opacity: 0, x: direction * 100 }, // Start off-screen
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card as Element,
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            scrub: true,
            toggleActions: "play none none reverse", // Reverse on scroll up
          },
        }
      );
    });

    // Animate images inside event cards
    const images = document.querySelectorAll(".event-card img");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: img as Element,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate text inside event cards
    const texts = gsap.utils.toArray(".text");

    texts.forEach((text) => {
      gsap.fromTo(
        text as HTMLElement,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: text as Element,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="timeline max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Schedule</h1>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="timeline-line absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-white"></div>

        {/* Event cards */}
        {ScheduleEventList.map((event, index) => (
          <div
            key={index}
            className={`event-card p-4 mb-12 bg-gray-800 rounded-lg shadow-lg relative ${
              index % 2 === 0 ? "ml-auto origin-right" : "mr-auto origin-left"
            } w-[calc(50%-1em)]`}
          >
            <div className="checkpoint">
              <div className="overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="rounded-md mb-4"
                />
              </div>
              <div className="text">
                <h3 className="text-2xl mb-2">Title: {event.title}</h3>
                <p className="text-lg">Day: {event.Day}</p>
                <p className="text-lg">Time: {event.Time}</p>
                <p className="text-sm">Date: {event.Date}</p>
              </div>
            </div>
            <span className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-900"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;