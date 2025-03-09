import { aboutNPfont, aboutNPfont11, aboutNPfont2, aboutNPfont3, aboutNPfont4 } from '@/lib/font.utils';
import { videoLinks } from '@/lib/utils'
import React, { useState } from 'react'

const About_VideoSection = () => {

  const [activeYear, setActiveYear] = useState<number>(2024);

  const handleYearClick = (year: number) => {
    setActiveYear(year);
  }

  return (
    <>
      {/* a horizontal line  */}

      <div className='overflow-x-hidden  flex max-xl:flex-col w-[100%] mx-auto items-center justify-center gap-[5rem] max-sm:gap-[1.5rem] mt-[0rem] max-sm:mt-0 mb-[0rem] max-sm:mb-[1rem] pt-[5rem] pb-[5rem]'>
        <div className='max-xl:flex max-xl:flex-col max-xl:items-center'>
          <div className={`text-white text-[4rem] max-xl:text-[2.5rem] max-lg:text-[2rem] max-sm:text-[2.5rem] max-sm:mb-[1rem] ${aboutNPfont11.className}`}>Flash Backs</div>
          <div className='w-[60%] flex flex-col max-xl:flex-row gap-[20px] items-center justify-center mx-auto'>
            {Object.keys(videoLinks).map((year) => (
              <div
              key={year}
              className={`rounded-3xl border-4 border-white/[0.2] hover:bg-white cursor-pointer py-5 px-7 max-xl:px-4 max-xl:py-5 max-md:px-3 max-md:py-3 max-sm:px-2 max-sm:py-2 max-md:rounded-2xl flex items-center justify-center bg-white text-black relative 
                ${Number(year) === activeYear ? "bg-white text-black " : "bg-white/[0.8]"}`}
              data-year={year}
              onClick={() => handleYearClick(Number(year))}
              // style={{
              //   animation: "shine 2s infinite linear" ,
              //   boxShadow: "0 0 10px 2px white",
              // }}
            >
              {year}
            </div>
            
            ))}
          </div>
        </div>
        <div className=' rounded-3xl flex justify-center items-center mt-20 max-sm:mt-0 p-0'>
          <div className="glass p-10 rounded-3xl border-2 border-white/[0.2] aspect-[16/9] w-full max-md:w-[80%] max-sm:w-[50%] text-center flex items-center justify-center"
              // style={{
              //   animation: "shine 2s infinite linear" ,
              //   boxShadow: "0 0 10px 2px white",
              // }}
              >
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoLinks[activeYear]}`}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              id="ytFrame"
              allowFullScreen
              className=''
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_VideoSection