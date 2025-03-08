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

interface ColumnProps {
  images: string[];
  y: any;
}

interface CardProps {
  card: {
    imageUrl: string;
    title: string;
    description: string;
    location: string;
    price: string;
  };
}

const HomePage = () => {

  const futureDate = new Date("2025-03-01T00:00:00").getTime(); // Change to your target date


  // horizontal scroll on scroll list 
  const horiscrollimage = ["1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg"];

  // vertical moving images on scroll 
  const images = [
    "DSC07047.JPG", "DSC07218.JPG", "DSC07252.JPG", "DSC08347.JPG", "DSC08403.JPG", "DSC08481.JPG",
    "LEH07282.JPG", "DSC08503.JPG", "DSC07243.JPG", "DSC06940.JPG", "DSC08482.JPG", "LEH07282.JPG"
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
      src: "/assets/exodia-gallery-images/DSC_0373.JPG",
      scale: scale4
    },
    {
      src: "/assets/exodia-gallery-images/DSC07253.JPG",
      scale: scale5
    },
    {
      src: "/assets/exodia-gallery-images/LEH07282.jpg",
      scale: scale6
    },
    {
      src: "/assets/exodia-gallery-images/DSC07223.JPG",
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
      src: "/assets/exodia-gallery-images/DSC06940.JPG",
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

  const homemaincardstackedcontainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress9 } = useScroll({
    target: homemaincardstackedcontainer,
    offset: ['start start', 'end end']
  });
  const homeprojects = [
    {
      eventType: "Photography",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Matthias Leidinger",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent.",
        },
        {
          name: "Clément Chapillon",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "French photographer Clément Chapillon explores the intersection of reality and imagination in his latest project.",
        },
        {
          name: "Zissou",
          imageUrl: "/assets/homethird/water.jpg",
          description: "Zissou captures the essence of Bali, blending sacred and mundane moments into captivating photographic narratives.",
        },
      ],
    },
    {
      eventType: "Art Exhibitions",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Van Gogh's Legacy",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "An exhibition showcasing the influence of Van Gogh's work on modern artists.",
        },
        {
          name: "Futuristic Visions",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A dive into the future of art through digital media and experimental techniques.",
        },
        {
          name: "Abstract Realms",
          imageUrl: "/assets/homethird/water.jpg",
          description: "An exploration of abstract art and its impact on human perception.",
        },
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
      ],
    },
  ];

  const maincardstackedcontainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: maincardstackedcontainer,
    offset: ['start start', 'end end']
  });
  const projects = [
    {
      eventType: "Photography",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Matthias Leidinger",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent.",
        },
        {
          name: "Clément Chapillon",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "French photographer Clément Chapillon explores the intersection of reality and imagination in his latest project.",
        },
        {
          name: "Zissou",
          imageUrl: "/assets/homethird/water.jpg",
          description: "Zissou captures the essence of Bali, blending sacred and mundane moments into captivating photographic narratives.",
        },
      ],
    },
    {
      eventType: "Art Exhibitions",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Van Gogh's Legacy",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "An exhibition showcasing the influence of Van Gogh's work on modern artists.",
        },
        {
          name: "Futuristic Visions",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A dive into the future of art through digital media and experimental techniques.",
        },
        {
          name: "Abstract Realms",
          imageUrl: "/assets/homethird/water.jpg",
          description: "An exploration of abstract art and its impact on human perception.",
        },
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
      ],
    },
    {
      eventType: "Technology Conferences",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
        {
          name: "Quantum Computing",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A look at the advancements in quantum technology and its applications.",
        },
        {
          name: "Space Innovations",
          imageUrl: "/assets/homethird/water.jpg",
          description: "How space exploration is pushing the boundaries of technology and engineering.",
        },
      ],
    },
    {
      eventType: "Photography",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Matthias Leidinger",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent.",
        },
        {
          name: "Clément Chapillon",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "French photographer Clément Chapillon explores the intersection of reality and imagination in his latest project.",
        },
        {
          name: "Zissou",
          imageUrl: "/assets/homethird/water.jpg",
          description: "Zissou captures the essence of Bali, blending sacred and mundane moments into captivating photographic narratives.",
        },
      ],
    },
    {
      eventType: "Art Exhibitions",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Van Gogh's Legacy",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "An exhibition showcasing the influence of Van Gogh's work on modern artists.",
        },
        {
          name: "Futuristic Visions",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A dive into the future of art through digital media and experimental techniques.",
        },
        {
          name: "Abstract Realms",
          imageUrl: "/assets/homethird/water.jpg",
          description: "An exploration of abstract art and its impact on human perception.",
        },
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
      ],
    },
    {
      eventType: "Technology Conferences",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
        {
          name: "Quantum Computing",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A look at the advancements in quantum technology and its applications.",
        },
        {
          name: "Space Innovations",
          imageUrl: "/assets/homethird/water.jpg",
          description: "How space exploration is pushing the boundaries of technology and engineering.",
        },
      ],
    },
    {
      eventType: "Art Exhibitions",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Van Gogh's Legacy",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "An exhibition showcasing the influence of Van Gogh's work on modern artists.",
        },
        {
          name: "Futuristic Visions",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A dive into the future of art through digital media and experimental techniques.",
        },
        {
          name: "Abstract Realms",
          imageUrl: "/assets/homethird/water.jpg",
          description: "An exploration of abstract art and its impact on human perception.",
        },
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
      ],
    },
    {
      eventType: "Art Exhibitions",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "Van Gogh's Legacy",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "An exhibition showcasing the influence of Van Gogh's work on modern artists.",
        },
        {
          name: "Futuristic Visions",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A dive into the future of art through digital media and experimental techniques.",
        },
        {
          name: "Abstract Realms",
          imageUrl: "/assets/homethird/water.jpg",
          description: "An exploration of abstract art and its impact on human perception.",
        },
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
      ],
    },
    {
      eventType: "Technology Conferences",
      color: "url('/assets/homefirst/download.jpeg')",
      events: [
        {
          name: "AI in 2025",
          imageUrl: "/assets/homethird/rock.jpg",
          description: "Exploring the latest breakthroughs in artificial intelligence and machine learning.",
        },
        {
          name: "Quantum Computing",
          imageUrl: "/assets/homethird/tree.jpg",
          description: "A look at the advancements in quantum technology and its applications.",
        },
        {
          name: "Space Innovations",
          imageUrl: "/assets/homethird/water.jpg",
          description: "How space exploration is pushing the boundaries of technology and engineering.",
        },
      ],
    },
  ];
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
        <div ref={PageKeUparTransitionMain} className="relative h-[300vh] max-sm:hidden">
          <Section1 scrollYProgress={scrollYProgress7} />
          <div className="relative ">
            <Section2 scrollYProgress={scrollYProgress7} element2={element2} characters={characters} scrollYProgress3={scrollYProgress3} />
            <Section3 scrollYProgress={scrollYProgress7} element2={element22} characters={characters} scrollYProgress3={scrollYProgress32} />
          </div>
        </div>

        <div ref={homemaincardstackedcontainer} className="relative sm:hidden">
          <div className="h-[100vh]">
          {/* <div className="relative flex h-screen w-full flex-col items-center justify-center gap-0 scale-x-150 scale-y-150">
            <img src="./Exodia.png" alt="" />
          </div> */}
          </div>
          {
            homeprojects.map((project, i) => {
              const targetscale = 1 - ((homeprojects.length - i) * 0.05);
              // const imagescale = useTransform(scrollYProgress6, [0, 1], [1, 0.5]);
              const scale = useTransform(scrollYProgress9, [i / homeprojects.length, 1], [1, targetscale]);
              return <div ref={cardstackedCard} key={i} className="sticky top-0 flex justify-center items-center w-full h-[100vh]">
                <motion.div style={{ backgroundImage: project.color, backgroundSize: 'cover', backgroundPosition: 'center', scale, top: `calc(-0vh + ${i * 30}px)` }}
                  className="flex flex-col relative top-[-25%] h-[700px] max-sm:h-[500px]  w-[1600px] max-sm:w-[350px] rounded-[25px] origin-top">
                  <div className="flex flex-col mt-4  gap-12 h-full text-[#cba135]">
                    <div>
                      <p className={`${aboutNPfont11.className} text-[5rem] max-sm:text-[2.5rem]`}>{project.eventType}</p>
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
                              <Image src={event.imageUrl} className="border-2 border-gold rounded-2xl" alt="Event Image" layout="fill" objectFit="cover" />
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

        {/* <div className="h-screen"></div> */}
        {/* 3 ccc*/}
        <div ref={gallery} className="homeverticalParallax bg-black relative flex gap-[2vw] p-[2vw] box-border overflow-hidden h-[175vh]">
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
                <motion.div style={{ backgroundImage: project.color, backgroundSize: 'cover', backgroundPosition: 'center', scale, top: `calc(-0vh + ${i * 15}px)` }}
                  className="flex flex-col relative top-[-25%] h-[700px] max-sm:h-[500px]  w-[1600px] max-sm:w-[350px] rounded-[25px] origin-top border-[1.7px] border-gold">


                  {/* <div className="flex flex-col md:flex-row mt-12 gap-12 h-full">
                    <div className="w-full md:w-2/5 relative top-10">
                      <p className="text-base leading-relaxed">
                        <span className="text-2xl font-title">{project.description.charAt(0)}</span>
                        {project.description.slice(1)}
                      </p>
                      <span className="flex items-center gap-2 mt-2">
                        <a href={project.link} target="_blank" className="text-sm underline cursor-pointer text-blue-600">
                          See more
                        </a>
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
                        </svg>
                      </span>
                    </div>
                    <div className="relative w-full md:w-3/5 h-full rounded-2xl overflow-hidden">
                      <motion.div className="w-full h-full" style={{ scale: imagescale }}>
                        <Image src={`/assets/homethird/${project.src}`} alt="image" layout="fill" objectFit="cover" />
                      </motion.div>
                    </div>
                  </div> */}
                  <div className="flex flex-col mt-4  gap-12 h-full text-[#FFD700]">

                    <div>
                      <p className={`${aboutNPfont11.className} text-[5rem] max-sm:text-[2.5rem]`}>{project.eventType}</p>
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
                              <Image src={event.imageUrl} className="border-2 border-gold rounded-2xl" alt="Event Image" layout="fill" objectFit="cover" />
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
          <div className="bg-black  sticky overflow-hidden top-0  h-[100vh]">
            {
              pictures.map(({ src, scale }, i) => {
                return <motion.div key={i} style={{ scale }} className=" absolute max-sm:top-[6rem] flex justify-center items-center w-full h-full">
                  <div className={`relative ${getImageContainerStyles(i)}`}>
                    <Image src={src} alt="image" fill className="object-cover border rounded-2xl border-gold" />
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
        <div className="bg-black h-screen text-white flex justify-center items-center text-[5rem]">
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
            <div className="h-[60vh] bg-gold flex justify-center items-end">
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

const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 2 / 3], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 2 / 3], [0, -5])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">

      <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900] ">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          <div className="relative flex h-screen w-full flex-col items-center justify-center gap-0 ">
            <img src="./Exodia.png" alt="" />
          </div>
        </motion.div>
        <div className='mb-7'>
          <Link href="/3d" className='p-4 rounded-3xl border-2 border-black bg-gold text-black text-[1.2rem] animate-buttonshine'>
            Explore In 3D
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const Section2 = ({ scrollYProgress, element2, characters, scrollYProgress3 }: { scrollYProgress: any, element2: React.RefObject<HTMLParagraphElement | null>, characters: string[][], scrollYProgress3: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1 / 3 + 0.15, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1 / 3 + 0.15, 1], [5, 0, -5]);

  return (
    <motion.div
      style={{
        backgroundImage: "url('/pk2.png')",
        scale,
        rotate
      }}
      className="sticky top-0 h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center backdrop-blur-md"
    >
      <div className=" flex flex-col justify-center items-center gap-[3rem] mb-[7rem]">
        <p className={`text-[#FFD700] text-[5rem] ${aboutNPfont11.className}`}>About Exodia</p>
        <p ref={element2}
          style={{ whiteSpace: "pre-wrap" }}
          className={`text-[30px] max-sm:text-[5px] max-w-[1290px] p-[40px] flex flex-wrap justify-center gap-[1rem] leading-none ${aboutNPfont4.className} text-[#FFD700]`}
        >
          {
            characters.map((line, i) => {
              const lineStart = i / characters.length;
              const lineEnd = (i + 1) / characters.length;

              return (
                <span key={i} className="text-center">
                  {line.map((word, j) => {
                    const wordStep = (lineEnd - lineStart) / line.length;
                    const wordStart = lineStart + j * wordStep;
                    const wordEnd = wordStart + wordStep;

                    const opacity3 = useTransform(scrollYProgress3, [wordStart, wordEnd], [0, 1]);

                    return (
                      <span key={j} className="relative inline-block mx-[5px] text-white">
                        {/* Background faded word */}
                        <span className="opacity-[0.1]">{word}</span>
                        {/* Animated appearing word */}
                        <motion.span style={{ opacity: opacity3 }} className="absolute left-0 top-0 w-full">
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                  <br />
                </span>
              );
            })
          }
        </p>
      </div>
    </motion.div>
  );
};


const Section3 = ({ scrollYProgress, element2, characters, scrollYProgress3 }: { scrollYProgress: any, element2: React.RefObject<HTMLParagraphElement | null>, characters: string[][], scrollYProgress3: any }) => {
  const scale = useTransform(scrollYProgress, [1 / 3 + 0.15, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [1 / 3 + 0.15, 1], [-5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative top-0 h-screen bg-[#3d1f5c] bg-cover bg-no-repeat text-[3.5vw] flex flex-col items-center justify-center text-[#FFD700] pb-[10vh]"
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/pk2.png')",
          filter: "blur(4px)",
        }}
      />
      <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900]">
        <p className={`text-[#FFD700] text-[5rem] ${aboutNPfont11.className}`}>Theme</p>
        <p ref={element2}
          style={{ whiteSpace: "pre-wrap" }}
          className={`text-[30px] max-sm:text-[5px] max-w-[1280px] p-[40px] flex flex-wrap justify-center gap-[1rem] leading-none ${aboutNPfont4.className} text-[#FFD700]`}
        >
          {
            characters.map((line, i) => {
              const lineStart = i / characters.length;
              const lineEnd = (i + 1) / characters.length;

              return (
                <span key={i} className="text-center">
                  {line.map((word, j) => {
                    const wordStep = (lineEnd - lineStart) / line.length;
                    const wordStart = lineStart + j * wordStep;
                    const wordEnd = wordStart + wordStep;

                    const opacity3 = useTransform(scrollYProgress3, [wordStart, wordEnd], [0, 1]);

                    return (
                      <span key={j} className="relative inline-block mx-[5px] text-white">
                        {/* Low-opacity background word */}
                        <span className="opacity-[0.1]">{word}</span>
                        {/* Animated appearing word */}
                        <motion.span style={{ opacity: opacity3 }} className="absolute left-0 top-0 w-full">
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                  <br />
                </span>
              );
            })
          }
        </p>
      </div>
    </motion.div>
  );
};



const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className="homeverticalParallaxColumn relative flex flex-col gap-[2vw] max- w-1/4  h-full  " style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-full rounded-[1vw] overflow-hidden border-[1.7px] border-gold">
          <Image src={`/assets/exodia-gallery-images/${src}`} alt="image" fill className="object-cover  rounded-[1vw] " />
        </div>
      ))}
    </motion.div>
  );
};


const Card = ({ imgsrc, i }: { imgsrc: string; i: number }) => {
  return (
    <motion.div
      key={i}
      className="group relative h-[250px] w-[250px] max-sm:h-[180px] max-sm:w-[180px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url("/assets/horiscrollimage/${imgsrc}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 border-2"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-1 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </motion.div>
  );
};


const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
