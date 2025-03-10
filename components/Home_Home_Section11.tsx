import React from 'react'
import { motion, useTransform } from 'framer-motion'
import Link from 'next/link'
import { aboutNPfont11 } from '@/lib/font.utils';


const Section11 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [1 / 3, 2 / 3], [0, 0.7]);
  return (
    <motion.div style={{ scale }} className="inset-0 sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white">

      <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900] ">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          <div className={`border-2 border-white/[0.2] relative  h-screen w-screen  glass rounded-3xl ${aboutNPfont11.className}
                            flex  justify-center items-center`}>
            <div className='md:w-1/2 md:left-0 max-md:w-full max-md:h-1/2 max-md:top-0 absolute px-14 flex flex-col items-center max-md:mt-10'>
              <div className='text-[3.5rem] max-xl:text-[3.1rem] max-lg:text-[2.7rem] max-sm:text-[2.4rem] max-[474px]:text-[2.1rem]'>About Exodia</div>
              <div className='text-[2.5rem] max-xl:text-[2.1rem] max-lg:text-[1.7rem] max-sm:text-[1.4rem] max-[474px]:text-[1.1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet totam non, quibusdam sequi reprehenderit hic modi ipsum nostrum commodi eos obcaecati voluptatibus perferendis temporibus mollitia iste. Harum, aliquid pariatur?</div>
            </div>
            <div className="md:w-[2px] max-md:h-[2px] max-md:w-[70%] md:h-[60%] absolute bg-white  glass max-md:mb-20  max-[380px]:mb-5" />
            <div className='md:w-1/2 md:right-0 max-md:w-full max-md:h-1/2 max-md:bottom-0 absolute px-14 max-md:mt-10 flex flex-col items-center'>
              <div className='text-[3.5rem] max-xl:text-[3.1rem]  max-lg:text-[2.7rem] max-sm:text-[2.4rem] max-[474px]:text-[2.1rem]'>Theme</div>
              <div className='text-[2.5rem] max-xl:text-[2.1rem] max-lg:text-[1.7rem] max-sm:text-[1.4rem] max-[474px]:text-[1.1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet totam non, quibusdam sequi reprehenderit hic modi ipsum nostrum commodi eos obcaecati voluptatibus perferendis temporibus mollitia iste. Harum, aliquid pariatur?</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}


export default Section11