"use client"

import { useEffect, useState } from 'react';
import React from 'react';
import ScrollTimeline from './Timeline';
import './page.css'
import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/lib/utils';
import Footer from '@/components/Footer';
// import video from "./assets/video.mp4"

// import hamburger from "./assets/hamburdger.png"
// import cross from "./assets/cross.png"

// import try1 from "./assets/bg_mid_light.png"

const page: React.FC = () => {
  const [active, isActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>('day1'); // State to manage selected day


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    isActive(!active)
  }

  const handleDayClick = (day: string) => {
    setSelectedDay(day); // Update selected day
  };



  return (
    <div className="relative w-full h-screen bg-black text-yellow-400">
      {/* Header Section */}
      {/* <div className="z-20 fixed w-full bg-black shadow-lg  flex items-center justify-between px-20 py-6 ">
        <h1 className="text-5xl font-bold font-harryPotter">EXODIA</h1>
        {active ? <img width={28} onClick={handleClick} src="/assets/schedule_assets/cross.png" alt='cross icon' />
          : <img width={28} onClick={handleClick} className=' transition-all ' src="/assets/schedule_assets/hamburdger.png" alt='hameburger menu' />}



      </div> */}
      <Navbar />
      <FloatingNav navItems={navItems} namex="P" className="max-md:hidden"/>

      {/* Video Section */}
      <div className="relative w-full h-full  z-0">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
        >
          {/* <source src={video} type="video/mp4" /> */}
          <source src="/assets/schedule_assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* section 2 */}
      <div className='h-screen bg-black'>

        <img src="/assets/schedule_assets/bg_mid_light.png" alt='harry image' className='absolute object-cover- w-full mx-auto h-full' />
        <div className='relative text-center font-harryPotter pt-20 text-6xl text-black font-semibold'>
          TIMELINE
        </div>
        <div className='relative font-harryPotter flex justify-center mt-10 gap-40 text-2xl text-black'>
          <div
            onClick={() => handleDayClick('day1')}
            className={selectedDay === 'day1' ? 'cursor-pointer text-yellow-400' : 'cursor-pointer'}
          >
            Day 1
          </div>
          <div
            onClick={() => handleDayClick('day2')}
            className={selectedDay === 'day2' ? 'cursor-pointer text-yellow-400' : 'cursor-pointer'}
          >
            Day 2
          </div>
          <div
            onClick={() => handleDayClick('day3')}
            className={selectedDay === 'day3' ? 'cursor-pointer text-yellow-400' : 'cursor-pointer'}
          >
            Day 3
          </div>
        </div>
        <div className='relative font-harryPotter  text-black flex justify-center '><ScrollTimeline selectedDay={selectedDay} /> </div>
      </div>

      {showPopup && !active ? (
        <div className="absolute top-1/2 left-[42%] z-10   text-center ">
          <div className='flex gap-5 '>

            <h2 className="text-8xl font-harryPotter flex font-bold text-yellow-400 overflow-hidden whitespace-nowrap typing-demo">
              Schedule
            </h2>

          </div>
          <p className="w-full text-lg underline font-harryPotter font-thin text-gray-300 mt-2 overflow-hidden whitespace-nowrap hover:text-xl ">
            Scroll to Checkout
          </p>
        </div>
      ) : null}

      {active ? <div className='fixed  bg-black  h-screen top-0 opacity-90 left-0 right-0 z-10 '></div> : <div></div>}
      {active ? <div className="fixed cursor-pointer  top-48 left-0 right-0 z-10 flex flex-col items-center space-y-10 font-harryPotter  text-3xl text-white">
        <div>HOME</div>
        <div>EVENTS</div>
        <div>GALLERY</div>
        <div className=' hover:border-b-yellow-300 hover:border-b-2'>SCHEDULE</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div> : null}

      <Footer />

    </div>

    
  );
}

export default page


