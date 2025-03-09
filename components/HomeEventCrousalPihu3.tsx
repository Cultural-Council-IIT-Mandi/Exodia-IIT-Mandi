'use client';

import { useState } from 'react';
import Image from 'next/image';
import { aboutNPfont, aboutNPfont11 } from '@/lib/font.utils';
import { eventcards } from '@/lib/utils';

interface Slide {
    image: string;
    name: string;
    description: string;
}

export default function HomeEventCrousalPihu3() {
    const [activeIndex, setActiveIndex] = useState(0);


    const nextSlide = () => {
        setActiveIndex((prev) => (prev === eventcards.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? eventcards.length - 1 : prev - 1));
    };

    return (
        <div className=" relative w-[60%] max-sm:w-[100%] h-screen max-sm:h-[100%] overflow-hidden flex items-center justify-center max-sm:">
            {/* Slides Container */}
            <div className=" relative w-[90%] max-sm:w-[90%] h-[80%] flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {eventcards.map((slide, index) => (
                    <>
                        <div
                            key={index}
                            className=" w-full h-full absolute inset-0 flex flex-col items-center justify-center "
                            style={{ left: `${index * 100}%` }}
                        >
                            <div className="relative w-full h-full max-w-[80%] max-h-[100%] max-sm:h-full aspect-video overflow-hidden">
                                <Image
                                    src={slide.imageUrl}
                                    alt={slide.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="shadow-xl border-2 border-white/[0.2] rounded-3xl"
                                />
                            </div>
                            {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white"> */}
                            <div className='border-2 border-white/[0.2] mt-6 px-4 py-2 glass rounded-3xl'>
                                <h2 className={`text-white  text-[3rem] max-sm:text-[1rem] ${aboutNPfont11.className}`}>{slide.title}</h2>
                            </div>
                            {/* <p className={`text-white  text-[1rem] ${aboutNPfont11.className}`}>{slide.description}</p> */}
                            {/* </div> */}
                        </div>
                    </>
                ))}
            </div>


            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 max-sm:top-[40%] -translate-y-1/2 z-20 px-3 py-2 max-sm:px-2 max-sm:py-1 bg-black/50 border border-white text-white  rounded-full hover:bg-black/70 transition-colors"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 max-sm:top-[40%] -translate-y-1/2 z-20 px-3 py-2 max-sm:px-2 max-sm:py-1 bg-black/50 border border-white text-white  rounded-full hover:bg-black/70 transition-colors"
            >
                &gt;
            </button>
        </div>
    );
}