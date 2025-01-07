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

      <div className='flex max-xl:flex-col w-[80%] mx-auto items-center justify-center gap-[5rem] mt-[10rem] mb-[10rem]'>
        <div className='max-xl:flex max-xl:flex-col max-xl:items-center'>
          <div className='harry-text text-[4rem] max-xl:text-[3rem] max-lg:text-[2rem]'>Flash Backs</div>
          <div className='w-[60%] flex flex-col max-xl:flex-row gap-[20px] items-center justify-center mx-auto'>
            {Object.keys(videoLinks).map((year) => (
              <div key={year}
                className={`rounded-3xl hover:bg-yellow-200 cursor-pointer py-5 px-7 max-xl:px-4 max-xl:py-5 max-md:px-3 max-md:py-3 max-md:rounded-2xl flex items-center justify-center bg-white text-black ${Number(year) === activeYear ? "bg-yellow-300 text-black" : ""}`}
                data-year={year}
                onClick={() => handleYearClick(Number(year))}>
                {year}
              </div>
            ))}
          </div>
        </div>
        <div className='bg-black rounded-3xl flex justify-center items-center'>
          <div className=" p-10 rounded-3xl border-yellow-400 border-2 aspect-[16/9] w-full max-md:w-[80%] max-sm:w-[50%] text-center flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoLinks[activeYear]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              id="ytFrame"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_VideoSection