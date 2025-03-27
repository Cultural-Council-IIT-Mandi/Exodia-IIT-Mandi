"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React, { use, useCallback, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import About_VideoSection from "@/components/About_VideoSection";
import { aboutNPfont, aboutNPfont11, aboutNPfont2, aboutNPfont4 } from "@/lib/font.utils";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Lenis from '@studio-freight/lenis';
import CountdownTimer from "@/components/HomecountTime";
import Card from "@/components/Home_Home_Card";
import Column from "@/components/Home_Home_Column";
import Section3 from "@/components/Home_Home_Section3";
import Section2 from "@/components/Home_Home_Section2";
import Section1 from "@/components/Home_Home_Section1";
import { horiscrollimage, projects, VERimages } from "@/lib/utils";
import Section11 from "@/components/Home_Home_Section11";
import TextReveal from "@/components/Home_TextReveal";
import CardStacked from "@/components/Home_CardStack";



const HomePage = () => {

  const futureDate = new Date("2025-03-01T00:00:00").getTime(); // Change to your target date


  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });
  const { height } = dimension;
  const isMobile = window.innerWidth < 768;
  const y = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 0.5 : 2)]);
  const y2 = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 1.2 : 3)]);
  const y3 = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 0.5 : 1.25)]);
  // const y4 = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 1.2 : 3)]);

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

 
  const characters1 = `The biggest college fest in the Himalayas is back to enchant the`;
  const characters2 = `world with its vibrant mystique. The three-day-long fest`;
  const characters3 = `guarantees a magical experience brimming with events that ignite`;
  const characters4 = `zeal, craft, and empyreal artistry and will emblaze the starry night`;
  const characters5 = `in its arcane brilliance.`;
  const characters6 = `IIT Mandi, cradled in the Himalayas, blends wisdom with nature's serenity.`;  
  const characters7 = `A place where innovation meets tranquility, shaping visions of tomorrow.`;  
  const characters8 = `With rivers whispering knowledge, it fosters brilliance in every mind.`;  
  const characters9 = `An abode of research, creativity, and dreams soaring beyond the peaks.`;  
  const characters10 = `Where intellect and nature converge, crafting a legacy of excellence.`;  
  


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
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OzvaoCZAVZirtFvpze2T4jfB9k1RaSXCLubx",
      scale: scale4
    },
    {
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
      scale: scale5
    },
    {
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA",
      scale: scale6
    },
    {
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAjgtGvLvuzkRJai146Y2oZCN0Q3DmjflbHw",
      scale: scale5
    },
    {
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nzPw094KFvlWGTIAJSubDhEoNp9XPaV5xw4j",
      scale: scale6
    },
    {
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80jj3l2O6nPm1We5dZyOsKhfk4grHcBuEtjiq",
      scale: scale8
    },
    {
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
      scale: scale9
    }
  ]
  const getImageContainerStyles = (index: number) => {
    const styles = [
      "w-[25vw] h-[25vh] max-sm:top-[2vh]", // Default
      "w-[35vw] h-[30vh] top-[-30vh] max-sm:top-[-27vh] left-[5vw]", // 2nd image
      "w-[30vw] h-[45vh] top-[-10vh] left-[-30vw]", // 3rd image
      "w-[25vw] h-[25vh] max-sm:top-[2vh] left-[27.5vw]", // 4th image
      "w-[20vw] h-[25vh] top-[27.5vh] max-sm:top-[28.5vh] left-[5vw]", // 5th image
      "w-[30vw] h-[25vh] top-[27.5vh] max-sm:top-[28vh] left-[-22.5vw]", // 6th image
      "w-[15vw] h-[15vh] top-[22.5vh] max-sm:top-[23vh] left-[25vw]", // 7th image
    ];
    return styles[index] || styles[0]; // Default to first style if out of range
  };


  {/* crads stacked animation  */ }
  const maincardstackedcontainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: maincardstackedcontainer,
    offset: ['start start', 'end end']
  });

  const cardstackedCard = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress6 } = useScroll({
    target: cardstackedCard,
    offset: ['start end', 'end end']
  });


  {/* page ke upar page transition  */ }
  const PageKeUparTransitionMain = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress7 } = useScroll({
    target: PageKeUparTransitionMain,
    offset: ['start start', 'end end']
  });


  // text zoom to video
  const textZoomToVideocontainer = useRef<HTMLDivElement>(null);
  const textZoomToVideostickyMask = useRef<HTMLDivElement>(null);
  const textZoomToVideoinitialMaskSize = 0.4;
  const textZoomToVideotargetMaskSize = 70;
  const textZoomToVideoeasing = 0.1;
  let textZoomToVideoeasedScrollProgress = 0;
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);
  const animate = () => {
    if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return;

    const maskSizeProgress = textZoomToVideotargetMaskSize * getScrollProgress();
    textZoomToVideostickyMask.current.style.webkitMaskSize = `${(textZoomToVideoinitialMaskSize + maskSizeProgress) * 100}%`;
    requestAnimationFrame(animate);
  };
  const getScrollProgress = () => {
    if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return 0;

    const scrollProgress =
      textZoomToVideostickyMask.current.offsetTop / (textZoomToVideocontainer.current.getBoundingClientRect().height - window.innerHeight);

    const delta = scrollProgress - textZoomToVideoeasedScrollProgress;
    textZoomToVideoeasedScrollProgress += delta * textZoomToVideoeasing;

    return textZoomToVideoeasedScrollProgress;
  };



  // for horizontal moving cards on scroll
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);


  // for video intro 
  const [showHome, setShowHome] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div ref={targetRef} className="m-0 p-0 ">
        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />
        {/* 1 */}
        {/* page ke upar page transition  */}
        <div ref={PageKeUparTransitionMain} className="relative h-[100vh] ">
          <Section1 scrollYProgress={scrollYProgress7} />
          {/* <Section11 scrollYProgress={scrollYProgress7} /> */}
        </div>


        {/* 3 ccc*/}
        <div ref={gallery} className="homeverticalParallax glass relative flex gap-[2vw] p-[2vw] box-border overflow-hidden h-[175vh]">
          <Column images={[VERimages[0], VERimages[1], VERimages[2], VERimages[11], VERimages[1]]} y={y} />
          <Column images={[VERimages[3], VERimages[4], VERimages[5], VERimages[3], VERimages[4]]} y={y2} />
          <Column images={[VERimages[6], VERimages[7], VERimages[8], VERimages[9], VERimages[10]]} y={y3} />
          {/* <Column images={[VERimages[9], VERimages[10], VERimages[11], VERimages[9], VERimages[10], VERimages[11]]} y={y4} /> */}
        </div>

        {/* crads stacked animation  */}
        {/* 4 */}
        <CardStacked scrollYProgress={scrollYProgress} />

        {/* 11 */}
        <div className="flex flex-col justify-center items-center gap-5 h-[50vh] max-sm:w-[80%] mx-auto ">
          <TextReveal text={characters1} />
          <TextReveal text={characters2} />
          <TextReveal text={characters3} />
          <TextReveal text={characters4} />
          <TextReveal text={characters5} />
        </div>

        {/* 5 */}
        <div ref={imagescontainer} className="h-[300vh]  relative">
          <div className="  sticky overflow-hidden top-0  h-[100vh]">
            {
              pictures.map(({ src, scale }, i) => {
                return <motion.div key={i} style={{ scale }} className=" absolute max-sm:top-[1rem] flex justify-center items-center w-full h-full">
                  <div className={`relative ${getImageContainerStyles(i)}`}>
                    <Image src={src} alt="image" fill className="object-cover  rounded-2xl border-2 border-white/[0.2]" />
                  </div>
                </motion.div>
              })
            }
          </div>
        </div>

        {/* 6 */}
        <div className=" mt-20" style={{ rotate: "3deg" }}>
          <div className="sticky top-0 flex items-center   overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {horiscrollimage.map((imgsrc, i) => {
                return <Card key={i} imgsrc={imgsrc} i={i} />;
              })}
            </motion.div>
          </div>
        </div>

        <About_VideoSection />

        <div className=" mb-40" style={{ rotate: "-3deg" }}>
          <div className="sticky top-0 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {horiscrollimage.map((imgsrc, i) => {
                return <Card key={i} imgsrc={imgsrc} i={i} />;
              })}
            </motion.div>
          </div>
        </div>
        {/* 6 */}
        {/* 9 */}
        <div ref={textZoomToVideocontainer} className="relative h-[300vh] bg-white">
          <div
            ref={textZoomToVideostickyMask}
            className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
            style={{
              WebkitMaskImage: "url('/assets/homefifth/EXODIA.svg')",
              WebkitMaskPosition: "46% center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "50%",
            }}
          >
            <video autoPlay muted loop className="h-full w-full object-cover">
              <source src="/assets/homefifth/mdi.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="bg-purple-900 h-screen text-white flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 h-[50vh] max-sm:w-[80%] mx-auto ">
            <TextReveal text={characters6} />
            <TextReveal text={characters7} />
            <TextReveal text={characters8} />
            <TextReveal text={characters9} />
            <TextReveal text={characters10} />
          </div>
        </div>
        {/* 9 */}


      </div>


      {/* {isParallaxDone && <Footer />} */}
      {/* 10 */}
      <div
        className='relative h-[calc(60vh+400px)]'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='relative h-[calc(160vh+400px)] -top-[100vh]'>
          <div className='h-[calc(60vh+400px)] sticky top-[calc(100vh-400px-60vh)]'>
            <div className="h-[60vh] max-sm:h-[75vh] bg-white flex justify-center items-end">
              <CountdownTimer targetDate={futureDate} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {/* 10 */}


    </>
  );
};

export default HomePage;
