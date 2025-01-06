"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SwiperComponent from "@/components/Event_EventsSwiper";
import { Vortex } from "@/components/ui/vortex";
import Card from "@/components/Event_Card";
import AllCards from "@/components/Event_AllCards";
import ArrowButton from "@/components/Button";

import Link from "next/link";
import { HomeEvents } from "@/components/HomeEvents";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: { duration: 0.5 },
  },
};

const Page = () => {
  const imageUrl =
    "https://www.ministryofvillas.com/wp-content/uploads/2017/12/phuket-kamala-villa-lomchoy-sunset.jpg";

  // Reset scroll position to left when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="events"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="m-0 p-0 w-full h-screen">
          <Vortex
            backgroundColor="#ffffff00"
            rangeY={800}
            particleCount={500}
            baseHue={55}
            className="px-2 md:px-10 py-0 w-full h-full flex flex-col items-center justify-start"
          >
            <br />
            <br />
            <div className="flex items-center justify-between w-full h-16 px-4 bg-black">
              <div className="flex-none ml-52 mb-12">
                <Link href="/">
                  <ArrowButton text="Back" style={{ scale: "0.7" }} />
                </Link>
              </div>
              <h2
                className="flex-1 text-2xl md:text-6xl font-bold text-center mr-72"
                style={{ color: "gold", fontFamily: "B1" }}
              >
                It's Exodia 2024!
              </h2>
            </div>

            <p
              className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center"
              style={{ color: "gold" }}
            >
              Join us at Exodia 2024, IIT Mandi's cultural festival, Explore a
              diverse lineup of thrilling events and performances in the heart
              of the Himalayas.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6"></div>
            <br />
            <br />
            <SwiperComponent />
            <br />
          </Vortex>

          <Vortex
            backgroundColor="#ffffff00"
            rangeY={800}
            particleCount={500}
            baseHue={55}
            className="px-2 md:px-10 py-0 w-full h-full flex flex-col items-center justify-start"
          >
            <div
              className="text-white text-4xl md:text-6xl text-start"
              style={{ color: "gold", fontFamily: "B2" }}
            >
              Events
            </div>
            <AllCards />
          </Vortex>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;
