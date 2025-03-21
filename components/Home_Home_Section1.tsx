import React from 'react'
import { motion, useTransform } from 'framer-motion'
import Link from 'next/link'


const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
    // const scale = useTransform(scrollYProgress, [0, 1 / 3], [1, 0]);
    // const rotate = useTransform(scrollYProgress, [0, 2 / 3], [0, -5])
    return (
      <motion.div 
      // style={{ scale }} 
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
  
        <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900] ">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}>
            <div className="relative flex h-screen w-full flex-col items-center justify-center gap-0 ">
              <img src="./Exodia.png" alt="" />
            </div>
          </motion.div>
          {/* <div className='mb-7'>
            <Link href="/3d" className='p-4 rounded-3xl border-2 border-black bg-gold text-black text-[1.2rem] animate-buttonshine'>
              Explore In 3D
            </Link>
          </div> */}
        </div>
      </motion.div>
    )
  }
  

export default Section1