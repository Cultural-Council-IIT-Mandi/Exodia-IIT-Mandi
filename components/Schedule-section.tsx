"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ScheduleEventList } from "@/lib/utils";

const ScheduleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Animate vertical line based on scroll position
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="timeline max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12 h-[100vh]">
        <h1 className="text-4xl font-bold">Schedule</h1>
      </div>

      <div className="relative">
        {/* Vertical line grows downward */}
        <motion.div
          className="timeline-line absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-white"
          style={{ height: lineHeight }}
        ></motion.div>

        {/* Event cards */}
        {ScheduleEventList.map((event, index) => {
          const direction = index % 2 === 0 ? -1 : 1; // Alternate left/right

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className={`event-card p-4 mb-12 h-[100vh]  rounded-lg shadow-lg relative flex justify-center items-center  ${index % 2 === 0 ? "ml-auto origin-right" : "mr-auto origin-left"
                } w-[calc(50%-1em)]`} >
              <div className="checkpoint border-2 border-gold"
                style={{
                  backgroundImage: `url('/assets/homefirst/download.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="overflow-hidden"
                >
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="rounded-md mb-4 h-[10rem]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text"
                >
                  <h3 className="text-2xl mb-2">Title: {event.title}</h3>
                  <p className="text-lg">Day: {event.Day}</p>
                  <p className="text-lg">Time: {event.Time}</p>
                  <p className="text-sm">Date: {event.Date}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ScheduleSection;
