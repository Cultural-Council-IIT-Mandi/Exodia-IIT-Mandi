"use client";
import React, { useEffect, useState } from "react";
import AllCards from "@/components/Event_AllCards";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { aboutNPfont, aboutNPfont11 } from "@/lib/font.utils";
import HomeEventCrousalPihu3 from "@/components/HomeEventCrousalPihu3";

import Lenis from '@studio-freight/lenis';

const words = [
  {
    text: "Explore",
  },
  {
    text: "all",
  },
  {
    text: "events",
  },
  {
    text: "of",
  },
  {
    text: "EXODIA.",
    className: "text-yellow-300 dark:text-yellow-300",
  },
];

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

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
      const lenis = new Lenis();
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", resize);
      requestAnimationFrame(raf);
      resize();
  
      return () => {
        window.removeEventListener("resize", resize);
      };
    }, []);

  return (

    <>
      <div className="m-0 p-0 overflow-x-hidden">
        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />

        <div className="m-0 p-0 w-full flex flex-col items-center justify-center flex-grow mb-[-800px] sm:mb-0">
          <div className="z-[900]  h-[100vh] w-full flex flex-col items-center justify-center">
            <div className={`mt-[8rem]  max-sm:mt-[4rem] ${aboutNPfont11.className} text-white text-[6rem] max-2xl:text-[6rem] max-xl:text-[5rem] max-lg:text-[5rem] max-md:text-[4rem] max-sm:text-[3rem]`}>
              {/* Events */}
              Events Loading Soon...
            </div>
              {/* <HomeEventCrousalPihu3 /> */}
          </div>


          {/* <div className="w-full" id="maineventbody">
            <div className="text-white text-4xl md:text-6xl text-center mt-[5rem] mb-[5rem] max-sm:mb-[2rem] max-sm:mt-[2rem] z-10"
              style={{ color: "white", fontFamily: "B2" }}>
              Events
            </div>
            <div>
              <AllCards />
            </div>
          </div>
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Link href="#maineventbody">
            <TypewriterEffect words={words} />
            </Link>
          </div> */}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
