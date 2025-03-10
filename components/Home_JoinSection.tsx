"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { AboutSociallinks } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { aboutNPfont } from "@/lib/font.utils";

export function Home_JoinSection() {
  const images = [
    // "/assets/exodia-gallery-images/DSC07046.jpg",
    // deploy check
    "/assets/exodia-gallery-images/DSC06940.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem] max-sm:h-[20rem] max-sm:rounded-xl mx-[100px] max-2xl:mx-[80px] max-xl:mx-[70px] max-lg:mx-[60px] max-md:mx-[40px] max-sm:mx-[20px] border-2 border-yellow-300" images={images}>
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
          duration: 0.1,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col w-[50%] h-full mb-[5rem] max-sm:mb-[3rem] items-center justify-center absolute right-0 ">
          <div className= {`flex gap-5 max-sm:gap-[8px] ${aboutNPfont.className}`}>
            <motion.p className="max-sm:m-0 font-bold max-sm:text-[0.5rem] max-xl:text-[2rem] max-md:text-[1.5rem] max-2xl:text-[2.5rem] text-[3rem]  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Join the
            </motion.p>
            <motion.p className="max-sm:m-0 text-gold font-bold max-sm:text-[0.5rem] max-xl:text-[2rem] max-md:text-[1.5rem] max-2xl:text-[2.5rem]  text-[3rem]  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Exodia
            </motion.p>
            <motion.p className="max-sm:m-0 font-bold max-sm:text-[0.5rem] max-xl:text-[2rem] max-md:text-[1.5rem] text-[3rem] max-2xl:text-[2.5rem]   text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Community
            </motion.p>
          </div>
          <div className='flex gap-[1rem]  max-sm:gap-[6px]'>
            {AboutSociallinks.map((link, index) => (
              <Link className='hover:scale-150 max-sm:w-[0.8rem] max-xl:w-[2rem]' key={index} href={link.href}>
                <Image src={link.icon} alt={link.title} width={50} height={50} />
              </Link>
            ))}
          </div>
          {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
        </div>
        <hr className=" absolute w-[2px] h-[80%] bg-yellow-300 my-4" />
        <div className="absolute flex items-center justify-center  text-[2rem] max-sm:text-[0.7rem] max-xl:text-[1.5rem] px-[3rem] max-sm:px-[20px] w-[50%] h-full left-0">
          Stay tuned for all the thrilling updates, event spotlights, and exclusive content about Exodia, our premier annual tech-cultural festival. Get ready to witness innovation, creativity, and the dynamic spirit of campus life coming together. Don`t miss a moment of the excitement. This is where brilliance takes center stage!
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
