"use client";
import AnimatedComponent from '@/components/Home_ParralaxHomeGallery'
import SkewedPages from '@/components/zzzzzzz'
import ParallaxHero from '@/components/zzzzzzzzzz'
import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

const page = () => {
   // for scaled image on scroll
   const imagescontainer = useRef<HTMLDivElement>(null);
   const { scrollYProgress: scrollYProgress4 } = useScroll({
     target: imagescontainer,
     offset: ['start start', 'end end']
   });
     const scale4 = useTransform(scrollYProgress4, [0, 1], [1, 4]);
     const scale5 = useTransform(scrollYProgress4, [0, 1], [1, 5]);
     const scale6 = useTransform(scrollYProgress4, [0, 1], [1, 6]);
     const scale8 = useTransform(scrollYProgress4, [0, 1], [1, 8]);
     const scale9 = useTransform(scrollYProgress4, [0, 1], [1, 9]);
     const pictures = [
         {
             src: "/assets/homesecond/1.jpeg",
             scale: scale4
         },
         {
             src: "/assets/homesecond/2.jpeg",
             scale: scale5
         },
         {
             src: "/assets/homesecond/3.jpg",
             scale: scale6
         },
         {
             src: "/assets/homesecond/4.jpg",
             scale: scale5
         },
         {
             src: "/assets/homesecond/5.jpg",
             scale: scale6
         },
         {
             src: "/assets/homesecond/6.jpg",
             scale: scale8
         },
         {
             src: "/assets/homesecond/7.jpeg",
             scale: scale9
         }
     ]
     const getImageContainerStyles = (index:number) => {
       const styles = [
           "w-[25vw] h-[25vh]", // Default
           "w-[35vw] h-[30vh] top-[-30vh] left-[5vw]", // 2nd image
           "w-[20vw] h-[45vh] top-[-10vh] left-[-25vw]", // 3rd image
           "w-[25vw] h-[25vh] left-[27.5vw]", // 4th image
           "w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]", // 5th image
           "w-[30vw] h-[25vh] top-[27.5vh] left-[-22.5vw]", // 6th image
           "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]", // 7th image
       ];
       return styles[index] || styles[0]; // Default to first style if out of range
   };
 
  return (
    <div>
      {/* <SkewedPages /> */}
      {/* <ParallaxHero />
      <ParallaxHero />
      <ParallaxHero /> */}
       <div className="h-screen bg-yellow-300"></div>
        <div ref={imagescontainer} className="h-[300vh] bg-black relative">
          <div className="bg-white  sticky overflow-hidden top-0 h-[100vh]">
            {
              pictures.map(({src,scale},i)=>{
                return <motion.div key={i} style={{ scale }} className=" absolute top-0 flex justify-center items-center w-full h-full">
                  <div className={`relative ${getImageContainerStyles(i)}`}>
                    <Image src={src} alt="image" fill className="object-cover" />
                  </div>
                </motion.div>
              })
            }
          </div>
        </div>
        <div className="bg-yellow-300 h-screen"></div>
    </div>
  )
}

export default page