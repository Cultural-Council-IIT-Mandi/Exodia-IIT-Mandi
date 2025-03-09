import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'

const Column: React.FC<ColumnProps> = ({ images, y }) => {
    return (
      <motion.div className="homeverticalParallaxColumn relative flex flex-col gap-[2vw] max- w-1/4  h-full  " style={{ y }}>
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full rounded-[1vw] overflow-hidden border-2 border-white/[0.2]">
            <Image src={`/assets/exodia-gallery-images/${src}`} alt="image" fill className="object-cover glass rounded-[1vw] " />
          </div>
        ))}
      </motion.div>
    );
  };
  
  

export default Column