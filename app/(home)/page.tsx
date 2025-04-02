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
import { characters1, characters10, characters11, characters11s, characters12, characters12s, characters13, characters13s, characters14, characters14s, characters15, characters15s, characters16, characters16s, characters17, characters17s, characters18s, characters19s, characters1s, characters2, characters20s, characters21s, characters2s, characters3, characters3s, characters4, characters4s, characters5, characters5s, characters6, characters6s, characters7, characters8, characters9, horiscrollimage, projects, VERimages } from "@/lib/utils";
import Section11 from "@/components/Home_Home_Section11";
import TextReveal from "@/components/Home_TextReveal";
import CardStacked from "@/components/Home_CardStack";
import JoinExodiaForm from "@/components/JoinExodiaForm";



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
        <div ref={gallery} className="max-sm:hidden homeverticalParallax glass relative flex gap-[2vw] p-[2vw] box-border overflow-hidden h-[175vh]">
          <Column images={[VERimages[0], VERimages[1], VERimages[2], VERimages[11], VERimages[1]]} y={y} />
          <Column images={[VERimages[3], VERimages[4], VERimages[5], VERimages[3], VERimages[4]]} y={y2} />
          <Column images={[VERimages[6], VERimages[7], VERimages[8], VERimages[9], VERimages[10]]} y={y3} />
          {/* <Column images={[VERimages[9], VERimages[10], VERimages[11], VERimages[9], VERimages[10], VERimages[11]]} y={y4} /> */}
        </div>

        <div className="h-[20vh] flex justify-center items-end">
          {/* <TextReveal className="text-8xl max-sm:text-sm" text="Explore Flagship Events" /> */}
          <div className={`text-8xl max-sm:text-3xl ${aboutNPfont11.className}`}> Explore Flagship Events </div>
        </div>

        {/* crads stacked animation  */}
        {/* 4 */}
        <CardStacked scrollYProgress={scrollYProgress} />

        <div className=" flex justify-end items-start w-[90%]">
          {/* <TextReveal className="text-8xl max-sm:text-sm" text="Explore Flagship Events" /> */}
          <div className={`text-2xl max-sm:text-xs cursor-pointer sm:hover:scale-125 transform transition-all duration-300 ${aboutNPfont11.className}`}>
            <Link href="/events">
              Explore More ....
            </Link>
          </div>
        </div>

        {/* 11 */}
        <div className="flex flex-col justify-center items-center gap-5 max-sm:gap-3 h-[50vh] max-sm:h-[40vh] max-sm:w-[90%] mx-auto ">
          <TextReveal className="text-4xl max-sm:text-sm max-sm:hidden" text={characters1} />
          <TextReveal className="text-4xl max-sm:text-sm max-sm:hidden" text={characters2} />
          <TextReveal className="text-4xl max-sm:text-sm max-sm:hidden" text={characters3} />
          <TextReveal className="text-4xl max-sm:text-sm max-sm:hidden" text={characters4} />
          <TextReveal className="text-4xl max-sm:text-sm max-sm:hidden" text={characters5} />
          <TextReveal className="text-4xl max-sm:text-sm sm:hidden" text={characters1s} />
          <TextReveal className="text-4xl max-sm:text-sm sm:hidden" text={characters2s} />
          <TextReveal className="text-4xl max-sm:text-sm sm:hidden" text={characters3s} />
          <TextReveal className="text-4xl max-sm:text-sm sm:hidden" text={characters4s} />
          <TextReveal className="text-4xl max-sm:text-sm sm:hidden" text={characters5s} />
          <TextReveal className="text-4xl max-sm:text-sm sm:hidden" text={characters6s} />

        </div>

        {/* 5 */}
        <div ref={imagescontainer} className="h-[300vh]  relative mb-3">
          <div className="  sticky overflow-hidden top-0  h-[100vh]">
            {
              pictures.map(({ src, scale }, i) => {
                return <motion.div key={i} style={{ scale }} className=" absolute max-sm:top-[1rem] flex justify-center items-center w-full h-full">
                  <div className={`relative ${getImageContainerStyles(i)}`}>
                    <Image src={src} alt="image" fill className="object-cover  rounded-2xl border-2 border-white/[0.2]" />
                  </div>
                </motion.div>
              })}
          </div>
        </div>

        {/* 5-new-aboutEXODIA */}
        <div className="relative h-[100vh] max-sm:h-[75vh]  mx-auto flex flex-col justify-center items-center"
        //  style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 86%)" }} 
        >
          <div className="absolute inset-0 h-[100vh] max-sm:h-[75vh] bg-white  w-full glass blur-xl max-sm:blur-md" ></div>
          <div className="flex flex-col gap-10">
            <div className="flex max-sm:flex-col justify-center items-center gap-40">
              <div className="relative flex flex-col justify-center items-start  gap-6 max-sm:gap-2 text-black py-16 mx-10 max-sm:mx-5 max-sm:py-6">
                <div className={`text-6xl max-sm:text-3xl font-bold text-center ${aboutNPfont11.className}`}>
                  About Exodia'25
                </div>
                <div className="flex flex-col justify-center items-start gap-2 ">
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters11} />
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters12} />
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters13} />
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters14} />
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters15} />
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters16} />
                  <TextReveal className="text-xl max-sm:text-xs max-sm:hidden" text={characters17} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters11s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters12s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters13s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters14s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters15s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters16s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters17s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters18s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters19s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters20s} />
                  <TextReveal className="text-xl max-sm:text-xs sm:hidden" text={characters21s} />
                </div>
              </div>
              <div className=" max-sm:hidden relative w-[25vw] h-[25vh] max-sm:w-[80vw] max-sm:h-[30vh] flex justify-center items-center">
                <Image
                  src="/e.png"
                  alt="image"
                  width={100}
                  height={100}
                  className="absolute max-sm:top-[1rem] flex justify-center items-center w-full h-full"
                />
              </div>
            </div>
            <div className={`relative text-6xl max-sm:text-3xl font-bold text-center text-black ${aboutNPfont11.className}`}>
              <Link href="/join">
                <button
                  className="border-2 home-card-text-outline text-white hover:bg-white hover:text-black transition-all duration-300 font-medium px-10 py-2 rounded-full "
                  data-cursor-hover
                >
                  Join Exodia
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className=" mt-20 max-sm:mt-8 rotate-[3deg] max-sm:rotate-0" >
          <div className="sticky top-0 flex items-center overflow-hidden ">
            <motion.div style={{ x }} className="flex gap-4">
              {horiscrollimage.map((imgsrc, i) => {
                return <Card key={i} imgsrc={imgsrc} i={i} />;
              })}
            </motion.div>
          </div>
        </div>

        <About_VideoSection />

        <div className=" max-sm:mb-2" style={{ rotate: "-3deg" }}>
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
        <div ref={textZoomToVideocontainer} className="relative h-[300vh] bg-white [clip-path:polygon(0_4%,100%_0%,100%_100%,0%_100%)] max-sm:[clip-path:polygon(0_1%,100%_0%,100%_100%,0%_100%)]" >
          <div
            ref={textZoomToVideostickyMask}
            className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
            style={{
              WebkitMaskImage: "url('/assets/homefifth/EXODIA.svg')",
              WebkitMaskPosition: "46% center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "10%",
            }} >
            <video autoPlay muted loop className="h-screen w-full object-cover">
              <source src="/assets/homefifth/mdi.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="bg-purple-900 h-screen text-white flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 h-[50vh] max-sm:w-[80%] mx-auto ">
            <TextReveal className="text-4xl max-sm:text-sm" text={characters6} />
            <TextReveal className="text-4xl max-sm:text-sm" text={characters7} />
            <TextReveal className="text-4xl max-sm:text-sm" text={characters8} />
            <TextReveal className="text-4xl max-sm:text-sm" text={characters9} />
            <TextReveal className="text-4xl max-sm:text-sm" text={characters10} />
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
            <div className="h-[60vh] max-sm:h-[75vh] bg-white flex justify-between items-center gap-20">
              <div>
                <Image
                  src="/e.png"
                  alt="image"
                  width={300}
                  height={300}
                  className="max-sm:hidden max-sm:top-[1rem] flex justify-center items-center w-full h-full ml-24"
                />
              </div>
              <div className={` mt-28 max-sm:mt-36 text-purple-900 ${aboutNPfont11.className} flex flex-col justify-center items-center gap-6`}>
                <div className="flex flex-col justify-center items-center gap-0 max-sm:mt-20">
                  <div className="text-[5rem] max-sm:text-6xl">
                    Exodia'25
                  </div>
                  <div className="text-[2rem] max-sm:text-2xl">
                    18-20 April 2025
                  </div>
                </div>
                <div className="mt-10 max-sm:mt-20">
                  <CountdownTimer />
                </div>
              </div>
              <div>
                <Image
                  src="/e.png"
                  alt="image"
                  width={300}
                  height={300}
                  className="max-sm:hidden max-sm:top-[1rem] flex justify-center items-center w-full h-full mr-32"
                />
              </div>
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
