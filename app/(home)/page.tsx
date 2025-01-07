"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React from "react";
import { FooterSocialMediaDock } from "@/components/Home_FooterSocialMediaDock";
import Home_AboutSection from "@/components/Home_AboutSection";
import Home_GallerySection from "@/components/Home_GallerySection";
import { navItems, Sliderslides } from "@/lib/utils";
import Home_EventsSection from "@/components/Home_EventsSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home_JoinSection } from "@/components/Home_JoinSection";
import Navbar from "@/components/Navbar";
import ArrowButton from "@/components/Button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HomeEvents } from "@/components/HomeEvents";
import Home_MainSection from "@/components/Home_MainSection";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";



const HomePage = () => {
  return (
    <>
      <div className="m-0 p-0 overflow-x-hidden">

      <Navbar />

        <FloatingNav navItems={navItems} namex="P" className="max-md:hidden"/>
 {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <Home_MainSection />

 {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div
          id="about"
          className="h-[100vh]  flex justify-center items-center"
        >
          <Home_AboutSection />
        </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
  
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}

        <HomeEvents/>

 {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div id="gallery" className=" h-[140vh] flex justify-center items-center flex-col">
          {/* <Image src="/assets/schedule_assets/bg_mid_light.png" alt="bg" width={100} height={100} className='absolute object-cover- w-full mx-auto h-[150%]' /> */}
          <p className="harry-text text-[5rem]">Gallery</p>
          <div className="flex  justify-center items-center w-full h-[45%] max-sm:h-0">
            {/* <Home_GallerySection /> */}
            <CarouselComponent />
          </div>
        </div>

 {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div id="contact" className="h-[100vh] flex justify-center items-center ">
          <Home_JoinSection />
        </div>
        
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      </div>


      <Footer />

    </>
  );
};

export default HomePage;