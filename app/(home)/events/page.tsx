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
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/utils";

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

    <>
      <div className="m-0 p-0 overflow-x-hidden">
      <Navbar />

      <FloatingNav navItems={navItems} namex="P" className="max-md:hidden" />

      <div className=" m-0 p-0 w-full flex flex-col items-center justify-center flex-grow">
        <div className="h-[100vh] w-full flex flex-col items-center justify-center">
          <div className="mt-[2rem] max-sm:mt-[4rem] harry-text text-[15rem] max-2xl:text-[12rem] max-xl:text-[11rem] max-lg:text-[10rem] max-md:text-[9rem] max-sm:text-[8rem] ">
            Events
          </div>
          <div className="mt-[6rem] max-sm:mt-[1rem]">
            <SwiperComponent />
          </div>
        </div>

        <div className="w-full">
          <div className="text-white text-4xl md:text-6xl text-center mt-[10rem] mb-[5rem] max-sm:mb-[2rem] max-sm:mt-[2rem]"
            style={{ color: "gold", fontFamily: "B2" }}>
            Events
          </div>
          <div>
            <AllCards />
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
};

export default Page;
