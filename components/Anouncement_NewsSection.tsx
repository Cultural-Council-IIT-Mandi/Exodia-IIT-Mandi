import localFont from 'next/font/local'
import React from 'react'
import FAQ from './Announcement_qnaSection'
import { announcements, faqquestions } from '@/lib/utils'
import Image from 'next/image'
import { aboutNPfont, aboutNPfont2, aboutNPfont3, aboutNPfont4 } from '@/lib/font.utils'

// const aboutNPfont = localFont({
//     src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.ttf',
//     display: 'swap',
// })

// const aboutNPfont2 = localFont({
//     src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf',
//     display: 'swap',
// })

// const aboutNPfont3 = localFont({
//     src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-BoldItalic.ttf',
//     display: 'swap',
// })

// const aboutNPfont4 = localFont({
//     src: '../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf',
//     display: 'swap',
// })



const Anouncement_NewsSection = () => {
    return (
        <>
            <div className={`bg-repeat bg-center  w-full text-black`}
                style={{ backgroundImage: "url('/assets/anouncement/nbg.avif')" }}>
                <div className='flex flex-col justify-center items-center'>
                    <div className={`pt-[6rem] max-sm:pt-[4rem] text-[70px] ${aboutNPfont.className}`}>
                        The Exodia Times
                    </div>

                    <div className='flex justify-center items-center'>
                        <hr className="absolute w-[80%] h-[2px] bg-black mb-1 " />
                        <hr className="absolute w-[80%] h-[1px] bg-black mt-1 " />
                    </div>
                    <div className={`flex items-center justify-between max-sm:justify-center mt-2 mb-2 w-[80%] text-[20px] ${aboutNPfont2.className}`}>
                        <div className='max-sm:hidden'></div>
                        <div className='max-sm:hidden'>exodia</div>
                        <div>Announcement</div>
                        <div className='max-sm:hidden'>11-15 March</div>
                        <div className='max-sm:hidden'></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <hr className="absolute w-[80%] h-[1px] bg-black mt-1 " />
                        <hr className="absolute w-[80%] h-[2px] bg-black mb-1 " />
                    </div>

                    {/* Map through the announcements array */}
                    <div className='flex flex-col justify-center items-center w-[80%]  max-sm:w-[90%] mt-7 max-sm:mt-8'>
                        {announcements.map((item, index) => (
                            <>
                                <div key={index} className='flex flex-row justify-between items-center w-full'>
                                    <div className={`w-[75%]  left-0 flex flex-col justify-center items-center`}>
                                        <div className={`w-[80%] ${aboutNPfont3.className} font-serif italic text-[40px] max-sm:text-[20px] text-start`}>
                                            {item.title}
                                        </div>
                                        <div className='flex max-sm:flex-col w-[80%] mt-4 mb-8 gap-12 max-sm:gap-0'>
                                            {item.image && (
                                                <>
                                                    <div className='w-[40%] flex justify-start items-center '>
                                                        <Image className='w-[20rem] border border-black transition-all duration-500 hover:grayscale-0 grayscale' src={item.image} alt={item.title} width={200} height={200} />
                                                    </div>
                                                    <div className={`${item.image ? "w-[30%] max-sm:w-[100%] mt-2" : "w-[80%]"} flex items-start`}>
                                                        {/* Combined Description with Drop Cap */}
                                                        <p className={`text-[15px] max-sm:text-[10px] ${aboutNPfont4.className} text-start`}>
                                                            <span
                                                                className={`text-[60px] leading-none float-left mr-2 pt-0 ${aboutNPfont.className}`}
                                                                style={{
                                                                    lineHeight: "1",
                                                                }}>
                                                                {item.description.charAt(0)}
                                                            </span>
                                                            <span className='mt-40'>{item.description.slice(1)}</span>
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            {!item.image && (
                                                <div className={`${item.image ? "w-[30%] max-sm:w-[100%] mt-2" : "w-[80%]"} text-[15px] max-sm:text-[10px] ${aboutNPfont4.className} text-start `}>
                                                    {item.description}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='w-[1px] h-full '>
                                        <hr className="w-[1px] h-[100px] max-sm:h-[150px] bg-black" />
                                    </div>
                                    <div className='w-[25%] max-sm:w-[15%] right-0 flex flex-col justify-center items-center'>
                                        <div className={`${aboutNPfont4.className} max-sm:text-[10px]`}>
                                            {item.day}
                                        </div>
                                        <div className={`${aboutNPfont4.className} max-sm:text-[10px]`}>
                                            {item.date}
                                        </div>
                                        <div className={`${aboutNPfont4.className} max-sm:text-[10px]`}>
                                            {item.time}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center w-[80%] mb-8'>
                                    <hr className="absolute w-[70%] max-sm:w-[90%] h-[1px] bg-black mt-1" />
                                </div>
                            </>
                        ))}
                    </div>

                    {/* <div className="container mx-auto p-6  flex flex-col">
                        <FAQ data={faqquestions} />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Anouncement_NewsSection
