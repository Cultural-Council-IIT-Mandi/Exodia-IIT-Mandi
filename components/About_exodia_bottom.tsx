"use client";

import { videoLinks } from '@/lib/utils';
import React, { useState } from 'react';


const AboutExodiaBottom: React.FC = () => {
  const [activeYear, setActiveYear]= useState<number>(2024);

  const handleYearClick= (year: number) =>{
    setActiveYear(year);
  }
  return (
    <div className="AboutExodia_bottom flex flex-col p-8">
      <p className="AboutExodia_bottom_heading text-[#7d7e80] text-5xl font-normal tracking-[2.5px] text-center mb-4">
        FlashBack
      </p>
      <div className="AboutExodia_years flex gap-[15px] justify-center mb-[15px] rounded-[10px]">
        {Object.keys(videoLinks).map((year)=> (
          <div key={year}
          className={`year px-4 py-2 rounded ${Number(year)=== activeYear? " " :"bg-gray-200 text-black"}`}
          data-year={year}
          onClick={()=> handleYearClick(Number(year))}>
          {year} 
      </div>  
        ))}
      </div>
      <div className="ytVideo aspect-[16/9] w-full text-center flex items-center justify-center mt-5 mb-2.5">
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
  );
};

export default AboutExodiaBottom;
