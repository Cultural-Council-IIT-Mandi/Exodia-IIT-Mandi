"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React, { use, useCallback, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import About_VideoSection from "@/components/About_VideoSection";
import { aboutNPfont, aboutNPfont11, aboutNPfont2, aboutNPfont4 } from "@/lib/font.utils";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Lenis from '@studio-freight/lenis';
import CountdownTimer from "@/components/HomecountTime";
import Card from "@/components/Home_Home_Card";
import Column from "@/components/Home_Home_Column";
import Section3 from "@/components/Home_Home_Section3";
import Section2 from "@/components/Home_Home_Section2";
import Section1 from "@/components/Home_Home_Section1";
import { projects } from "@/lib/utils";
import Section11 from "@/components/Home_Home_Section11";



const HomePage = () => {

  const futureDate = new Date("2025-03-01T00:00:00").getTime(); // Change to your target date


  // horizontal scroll on scroll list 
  const horiscrollimage = ["1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg"];

  // vertical moving images on scroll 
  const images = [
    "DSC07046.jpg", "DSC07220.jpg", "DSC07252.jpg", "DSC08347.jpg", "DSC08403.jpg", "DSC08481.jpg",
    "LEH07282.jpg", "DSC08487.jpg", "DSC07249.jpg", "DSC06940.jpg", "DSC08482.jpg", "LEH07282.jpg"
  ];

  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });
  const { height } = dimension;
  const isMobile = window.innerWidth < 768;
  const y = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 0.5 : 2)]);
  const y2 = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 1.2 : 3.3)]);
  const y3 = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 0.5 : 1.25)]);
  const y4 = useTransform(scrollYProgress1, [0, 1], [0, height * (isMobile ? 1.2 : 3)]);

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

  // for text apearing on scroll 
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.25']
  });

  // for text apearing on scroll 2
  const element2 = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: element2,
    offset: ['start 0.7', 'start 0.35']
  })
  const characters1 = "The valley echoes with magical chants when the moon and stars paint the black canvas white. Where mystique captivates the mind of all those who seek, such is the magic of Exodia's twilight. ".split(" ");
  const characters2 = "Let The Magic Begin! ".split(" ");
  const characters3 = "The biggest college fest in the Himalayas is back to enchant the world with its vibrant mystique. The three-day-long fest guarantees a magical experience brimming with events that ignite zeal, craft, and empyreal artistry and will emblaze the starry night in its arcane brilliance.".split(" ");
  const characters4 = "So, pick your wands, mount your brooms, and meet us at Hogwarts in the hills — IIT Mandi !!!. ".split(" ");
  const characters = [characters1, characters2, characters3, characters4];
  const element22 = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress: scrollYProgress32 } = useScroll({
    target: element22,
    offset: ['start 0.7', 'start 0.35']
  })

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
      src: "/assets/exodia-gallery-images/DSC_0373.jpg",
      scale: scale4
    },
    {
      src: "/assets/exodia-gallery-images/DSC07253.jpg",
      scale: scale5
    },
    {
      src: "/assets/exodia-gallery-images/LEH07282.jpg",
      scale: scale6
    },
    {
      src: "/assets/exodia-gallery-images/DSC07223.jpg",
      scale: scale5
    },
    {
      src: "/assets/exodia-gallery-images/DSC08403.jpg",
      scale: scale6
    },
    {
      src: "/assets/exodia-gallery-images/DSC08482.jpg",
      scale: scale8
    },
    {
      src: "/assets/exodia-gallery-images/DSC06940.jpg",
      scale: scale9
    }
  ]
  const getImageContainerStyles = (index: number) => {
    const styles = [
      "w-[25vw] h-[25vh] max-sm:top-[2vh]", // Default
      "w-[35vw] h-[30vh] top-[-30vh] max-sm:top-[-27vh] left-[5vw]", // 2nd image
      "w-[20vw] h-[45vh] top-[-10vh] left-[-25vw]", // 3rd image
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


  // text moving on scroll
  const textMovingOnScrollMain = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress8 } = useScroll({
    target: textMovingOnScrollMain,
    offset: ['start end', 'end start']
  });



  // for horizontal moving cards on scroll
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);


  return (
    <>
      <div ref={targetRef} className="m-0 p-0 ">
        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />
        {/* <Home_MainSection /> */}
        {/* 1 */}
        {/* page ke upar page transition  */}
        <div ref={PageKeUparTransitionMain} className="relative h-[300vh] ">
          <Section1 scrollYProgress={scrollYProgress7} />
          <Section11 scrollYProgress={scrollYProgress7} />
          {/* <div className="relative ">
            <Section2 scrollYProgress={scrollYProgress7} element2={element2} characters={characters} scrollYProgress3={scrollYProgress3} />
            <Section3 scrollYProgress={scrollYProgress7} element2={element22} characters={characters} scrollYProgress3={scrollYProgress32} />
          </div> */}
        </div>


        {/* <div className="h-screen"></div> */}
        {/* 3 ccc*/}
        <div ref={gallery} className="homeverticalParallax glass relative flex gap-[2vw] p-[2vw] box-border overflow-hidden h-[175vh]">
          <Column images={[images[0], images[1], images[2], images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5], images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8], images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11], images[9], images[10], images[11]]} y={y4} />
        </div>

        {/* crads stacked animation  */}
        {/* <div className="h-screen"></div> */}
        {/* 4 */}
        <div ref={maincardstackedcontainer} className="mt-[0vh] pb-[10vh]  relative">
          {
            projects.map((project, i) => {
              const targetscale = 1 - ((projects.length - i) * 0.05);
              const imagescale = useTransform(scrollYProgress6, [0, 1], [1, 0.5]);
              const scale = useTransform(scrollYProgress5, [i / projects.length, 1], [1, targetscale]);
              return <div ref={cardstackedCard} key={i} className="sticky top-0 flex justify-center items-center w-full h-[100vh] ">
                <motion.div style={{  backgroundSize: 'cover', backgroundPosition: 'center', scale, top: `calc(-0vh + ${i * 15}px)` }}
                  className="glass flex flex-col relative top-[-25%] h-[700px] max-sm:h-[500px]  w-[1600px] max-sm:w-[350px] rounded-[25px] origin-top border-2 border-white/[0.2]">

                  <div className="flex flex-col mt-4  gap-12 h-full ">

                    <div>
                      <p className={`${aboutNPfont11.className} text-[5rem] max-sm:text-[2.5rem] home-card-text-outline`}>{project.eventType}</p>
                    </div>

                    <div
                      className={`grid gap-10 max-sm:gap-0 w-full h-full`}
                      style={{
                        gridTemplateColumns: `repeat(${project.events.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {project.events.map((event, index) => (
                        <div key={index} className="  h-full rounded-2xl flex flex-col items-center">
                          <div className=" relative rounded-2xl w-[80%] h-[80%] overflow-hidden ">
                            <motion.div
                              className=" rounded-2xl w-full h-full"
                              style={{
                                // scale: imagescale,

                              }}
                            >
                              <Image src={event.imageUrl} className="border-2 border-white/[0.2] rounded-2xl" alt="Event Image" layout="fill" objectFit="cover" />
                            </motion.div>
                          </div>

                          <div className="relative mt-2 text-center ">
                            <p className={`text-[2rem] max-sm:text-[0.8rem] ${aboutNPfont11.className}`}>{event.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                </motion.div>
              </div>
            })
          }
        </div>

        {/* <div className="h-screen bg-yellow-300"></div> */}
        {/* 5 */}
        <div ref={imagescontainer} className="h-[300vh]  relative">
          <div className="  sticky overflow-hidden top-0  h-[100vh]">
            {
              pictures.map(({ src, scale }, i) => {
                return <motion.div key={i} style={{ scale }} className=" absolute max-sm:top-[6rem] flex justify-center items-center w-full h-full">
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
        {/* <div className="bg-blue-300 h-screen"></div> */}
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
              <source src="/assets/homefifth/nature.mp4" type="video/mp4" />
            </video>
          </div>
          {/* <div className="bg-blue-300 h-screen"></div> */}
        </div>
        <div className="bg-purple-900 h-screen text-white flex justify-center items-center text-[5rem]">
          scroll down
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
            <div className="h-[60vh] bg-white flex justify-center items-end">
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
