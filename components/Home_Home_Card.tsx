import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";


const Card = ({ imgsrc, i }: { imgsrc: string; i: number }) => {
    return (
      <motion.div
        key={i}
        className="group relative h-[250px] w-[250px] max-sm:h-[180px] max-sm:w-[180px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url("/assets/horiscrollimage/${imgsrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 border-2"
        ></div>
        {/* <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-1 text-2xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div> */}
      </motion.div>
    );
  };
  
  
export default Card