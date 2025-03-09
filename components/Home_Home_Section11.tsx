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
                            flex flex-col justify-center items-center`}>
            <div className='w-1/2 left-0 text-[3.5rem] absolute px-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat quo non temporibus nobis reprehenderit sunt cum hic, facilis, obcaecati ad eum soluta quam iusto repellat. Provident quibusdam molestiae nihil.</div>
            <div className="w-[2px] absolute bg-white h-[60%] glass" />
            <div className='w-1/2 right-0 text-[3.5rem] absolute px-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat rem, consectetur et quasi fugit illum saepe nisi dignissimos? Hic veritatis cumque adipisci a, non consectetur id quam necessitatibus iste labore?</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}


export default Section11