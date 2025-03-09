"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React, { use, useEffect, useState } from "react";
import { FooterSocialMediaDock } from "@/components/Home_FooterSocialMediaDock";
import Home_AboutSection from "@/components/Home_AboutSection";
import Home_GallerySection from "@/components/Home_GallerySection";
import { eventcards, navItems, Sliderslides } from "@/lib/utils";
import Home_EventsSection from "@/components/Home_EventsSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home_JoinSection } from "@/components/Home_JoinSection";
import Navbar from "@/components/Navbar";
import ArrowButton from "@/components/Event_Button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HomeEvents } from "@/components/HomeEvents";
import Home_MainSection from "@/components/Home_MainSection";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";
import CustomCursor from "@/components/CustomCursor";
import About_VideoSection from "@/components/About_VideoSection";
import { Anouncement_DialogSection } from "@/components/Anouncement_DialogSection";
import { aboutNPfont } from "@/lib/font.utils";
import HomeEventCrousalPihu2 from "@/components/HomeEventCrousalPihu2";
import { CarouselComponentPihu } from "@/components/Event_CarouselPihu";
import HomeEventCrousalPihu3 from "@/components/HomeEventCrousalPihu3";
import HomeEventCrousalPihu4 from "@/components/HomeEventCrousalPihu4";
import ParticlesBackground from "@/components/Background_Particles";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedComponent from "@/components/Home_ParralaxHomeGallery";
import Lenis from '@studio-freight/lenis';


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

  // vertical moving images on scroll 
  const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
    "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"
  ];

  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress1, [0, 1], [0, 1000 * 2]);
  const y2 = useTransform(scrollYProgress1, [0, 1], [0, 1000 * 3.3]);
  const y3 = useTransform(scrollYProgress1, [0, 1], [0, 1000 * 1.25]);
  const y4 = useTransform(scrollYProgress1, [0, 1], [0, 1000 * 3]);
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
    offset: ['start 0.9', 'start 0.25']
  });

  // for text apearing on scroll 2
  const element2 = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: element2,
    offset: ['start 0.9', 'start 0.25']
  });
  const characters = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut, cumque soluta doloribus ad quod architecto animi beatae eos quasi. Molestias dolores architecto veritatis eum. Voluptatum sunt neque ipsam numquam.".split("");

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
  const getImageContainerStyles = (index: number) => {
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


  {/* crads stacked animation  */ }
  const maincardstackedcontainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: maincardstackedcontainer,
    offset: ['start start', 'end end']
  });
  const projects = [
    {
      title: "Matthias Leidinger",
      description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF"
    },
    {
      title: "Clément Chapillon",
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "tree.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D"
    },
    {
      title: "Zissou",
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D"
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "house.jpg",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#B62429"
    },
    {
      title: "Mark Rammers",
      description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "cactus.jpg",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#88A28D"
    }
  ]
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
  const textZoomToVideoinitialMaskSize = 0.8;
  const textZoomToVideotargetMaskSize = 30;
  const textZoomToVideoeasing = 0.15;
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


  return (
    <>

      <Anouncement_DialogSection open={true} close={() => { }} />
      <div ref={targetRef} className="m-0 p-0 bg-white">

        {/* <CustomCursor />  */}

        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <Home_MainSection /> */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <div
          id="about"
          className="h-[100vh]  flex justify-center items-center max-sm:hidden"
        >
          <Home_AboutSection />
        </div> */}

        {/* // for mobile */}
        {/* <div
          id="about"
          className="m-0 p-0 w-full sm:hidden"
        >
          <div className='h-[100vh] bg-black flex justify-center items-center sm:hidden'>
            <div className='h-[80%] w-[90%] bg-white border-2 border-yellow-300 rounded-2xl'
              style={{ backgroundImage: 'url(/assets/anouncement/bgxgx.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

            </div>
          </div>
        </div> */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* // text  */}
        <div className="h-screen"></div>
        <div className="text-black" >
          <motion.p style={{ opacity: scrollYProgress2 }} ref={element} className="text-[50px] max-w-[1280px] p-[40px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut, cumque soluta doloribus ad quod architecto animi beatae eos quasi. Molestias dolores architecto veritatis eum. Voluptatum sunt neque ipsam numquam.</motion.p>
        </div>
        <div className="h-screen"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* // text  */}
        <div className="h-screen"></div>
        <div className="text-black" >
          <p ref={element2} className="text-[50px] max-w-[1280px] p-[40px] flex flex-wrap leading-none">
            {
              characters.map((charac, i) => {
                const start = i / characters.length;
                const end = start + 1 / characters.length;
                const amount = start - end;
                const step = amount / characters.length;
                const charstart = start + step * i;
                const charend = start + step * (i + 1);
                const opacity3 = useTransform(scrollYProgress3, [start, end], [0, 1]);
                return <span key={i} className="relative">
                  <span className="absolute opacity-[0.1]">
                    {charac}
                  </span>
                  <motion.span style={{ opacity: opacity3 }} >
                    {charac}
                  </motion.span>
                </span>
              })
            }
          </p>
        </div>
        <div className="h-screen"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div className="h-screen"></div>
        <div ref={gallery} className="homeverticalParallax bg-black relative flex gap-[2vw] p-[2vw] box-border overflow-hidden h-[175vh]">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
        <div className="h-screen"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* crads stacked animation  */}
        <div className="h-screen"></div>
        <div ref={maincardstackedcontainer} className="mt-[50vh] bg-slate-500 relative">
          {
            projects.map((project, i) => {
              const targetscale = 1 - ((projects.length - i) * 0.05);
              const imagescale = useTransform(scrollYProgress6, [0, 1], [2, 1]);
              const scale = useTransform(scrollYProgress5, [i * 0.25, 1], [1, targetscale]);
              return <div ref={cardstackedCard} key={i} className="sticky top-0 flex justify-center items-center w-full h-[100vh]">
                <motion.div style={{ backgroundColor: project.color, scale, top: `calc(-5vh + ${i * 25}px)` }} className="flex flex-col relative top-[-25%] h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top">
                  <h2 className="text-center text-2xl font-bold m-0">{project.title}</h2>

                  <div className="flex flex-col md:flex-row mt-12 gap-12 h-full">
                    {/* Description Section */}
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

                    {/* Image Section */}
                    <div className="relative w-full md:w-3/5 h-full rounded-2xl overflow-hidden">
                      <motion.div className="w-full h-full" style={{ scale: imagescale }}>
                        <Image src={`/assets/homethird/${project.src}`} alt="image" layout="fill" objectFit="cover" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            })
          }
        </div>
        <div className="h-screen"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <div className="" style={{ rotate: "0deg" }}>
          <div className="sticky top-0 flex mt-5 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {eventcards.map((card) => {
                return <Card card={card} key={card.title} />;
              })}
            </motion.div>
          </div>
        </div> */}



        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <HomeEvents /> */}
        {/* <div id="events" className=" bg-black h-[80vh] max-sm:h-[60vh] flex justify-center items-center flex-col gap-[3rem] max-sm:gap-[3.5rem] relative z-[900]">
          <p className={`text-gold text-[5rem] max-sm:text-[3rem] ${aboutNPfont.className}`}>Events</p>
          <div className="flex  flex-col justify-center items-center w-full h-[70%] ">
            <HomeEventCrousalPihu3 />
            <HomeEventCrousalPihu4 />
          </div>
        </div>
  */}
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <div className="" style={{ rotate: "0deg" }}>
          <div className="sticky top-0 flex mt-5 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {eventcards.map((card) => {
                return <Card card={card} key={card.title} />;
              })}
            </motion.div>
          </div>
        </div>
 */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* scaled image on scroll  */}
        <div className="h-screen bg-yellow-300"></div>
        <div ref={imagescontainer} className="h-[300vh] bg-black relative">
          <div className="bg-white  sticky overflow-hidden top-0 h-[100vh]">
            {
              pictures.map(({ src, scale }, i) => {
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

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* 
        <div id="gallery" className=" h-[100vh] max-sm:h-[60vh] flex justify-center items-center flex-col gap-[6rem] max-sm:gap-[3.5rem] relative z-[900]">
          <p className={`text-gold text-[5rem] max-sm:text-[3rem] max-sm:mb-10 ${aboutNPfont.className}`}>Gallery</p>
          <div className="flex  justify-center items-center w-full h-[45%] ">
            <CarouselComponent />
          </div>

          <div className="flex justify-center items-center z-[900] cursor-pointer">
            <Link href={'/gallery'}>
              <div className="p-4 max-sm:p-2 border-2 rounded-3xl bg-gold text-black text-[1rem] max-sm:text-[0.6rem] "
                style={{
                  animation: "shine 2s infinite linear",
                  boxShadow: "0 0 10px 2px white",
                }}>
                Explore More
              </div>
            </Link>
          </div>
        </div>
 */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}


        {/* <AnimatedComponent /> */}
        {/* 
        <div className="" style={{ rotate: "0deg" }}>
          <div className="sticky top-0 flex mt-5 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {eventcards.map((card) => {
                return <Card card={card} key={card.title} />;
              })}
            </motion.div>
          </div>
        </div>
 */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* <About_VideoSection /> */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* 
        <div className="relative"  >
          <ParallaxScroll />
        </div> */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* {isParallaxDone && */}
        {/* <div id="contact" className="h-[100vh] max-sm:h-[60vh] flex justify-center items-center ">
          <Home_JoinSection />
        </div> */}
        {/* } */}

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* page ke upar page transition  */}
        <div ref={PageKeUparTransitionMain} className="relative h-[200vh]">
          <Section1 scrollYProgress={scrollYProgress7} />
          <Section2 scrollYProgress={scrollYProgress7} />
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* text moving           */}
        <div className="overflow-hidden">
          <div className="bg-red-300 h-screen"></div>
          <div ref={textMovingOnScrollMain}>
          {[ 
          { src: "/assets/homesixth/1.jpg", direction: "left", left: "-40%" },
          { src: "/assets/homesixth/2.jpg", direction: "right", left: "-25%" },
          { src: "/assets/homesixth/3.jpg", direction: "left", left: "-75%" }
        ].map((item, index) => {
          const direction = item.direction === "left" ? -1 : 1;
          const translateX = useTransform(scrollYProgress8, [0, 1], [150 * direction, -150 * direction]);

          return (
            <motion.div key={index} style={{ x: translateX, left: item.left }} className="relative flex whitespace-nowrap">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="px-5 flex gap-5 items-center">
                  <p className="text-[7.5vw] text-black">Front End Developer</p>
                  <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
                    <Image style={{ objectFit: "cover" }} src={item.src} alt="image" fill />
                  </span>
                </div>
              ))}
            </motion.div>
          );
        })}
          </div>
          <div className="bg-red-300 h-screen"></div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}


        {/* text zoom to video  */}
        <div className="bg-blue-300 h-screen"></div>
        <div ref={textZoomToVideocontainer} className="relative h-[300vh] bg-white">
          <div
            ref={textZoomToVideostickyMask}
            className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
            style={{
              WebkitMaskImage: "url('/assets/homefifth/mask.svg')",
              WebkitMaskPosition: "52.35% center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "80%",
            }}
          >
            <video autoPlay muted loop className="h-full w-full object-cover">
              <source src="/assets/homefifth/nature.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-blue-300 h-screen"></div>
        </div>
        <div className="bg-blue-600 h-screen"></div>


      </div>


      {/* {isParallaxDone && <Footer />} */}
      <div
        className='relative h-[500px]'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='relative h-[calc(100vh+500px)] -top-[100vh]'>
          <div className='h-[500px] sticky top-[calc(100vh-500px)]'>
            <Footer />
          </div>
        </div>
      </div>


    </>
  );
};

export default HomePage;






const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image
            src="/assets/homefourth/1.jpg"
            alt="img"
            // placeholder="blur"
            fill
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
}
const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image
        src="/assets/homefourth/2.jpeg"
        alt="img"
        // placeholder="blur"
        fill
      />
    </motion.div>
  )
}



const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className="homeverticalParallaxColumn relative flex flex-col gap-[2vw] w-1/4 min-w-[250px] h-full " style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-full rounded-[1vw] overflow-hidden">
          <Image src={`/assets/homefirst/${src}`} alt="image" fill className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};


const Card = ({ card }: CardProps) => {
  return (
    <motion.div
      key={card.title}
      className="group relative h-[250px] w-[250px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 border-2"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-1 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
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
