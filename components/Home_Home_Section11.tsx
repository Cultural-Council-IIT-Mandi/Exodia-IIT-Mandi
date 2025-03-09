import React from 'react'
import { motion, useTransform } from 'framer-motion'
import Link from 'next/link'
import { aboutNPfont11 } from '@/lib/font.utils';


const Section11 = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const scale = useTransform(scrollYProgress, [1/3, 2 / 3], [0,0.7]);
    return (
      <motion.div style={{ scale }} className="inset-0 sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white">
  
        <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900] ">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}>
            <div className={`border-2 border-white/[0.2] relative flex h-screen w-full flex-col items-center justify-center px-28 glass rounded-3xl ${aboutNPfont11.className}`}>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati corrupti, maiores repellendus aperiam magni similique vel, reiciendis voluptatibus aliquid dolorem neque cumque iste ipsa consequatur sapiente architecto voluptate a. Accusantium!
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }
  

export default Section11