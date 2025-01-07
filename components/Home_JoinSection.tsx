"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function Home_JoinSection() {
  const images = [
    "/assets/home-join-images/j1aaaa.JPG",
    "/assets/home-join-images/j1bbbb.JPG",
    "/assets/home-join-images/j1cccc.JPG",
    "/assets/home-join-images/j1dddd.JPG",
  ];
  return (
    <ImagesSlider className="h-[40rem] mx-[100px] max-2xl:mx-[80px] max-xl:mx-[70px] max-lg:mx-[60px] max-md:mx-[40px] max-sm:mx-[20px] border-2 border-gray-500" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Be The Part of  <br /> Exodia
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
