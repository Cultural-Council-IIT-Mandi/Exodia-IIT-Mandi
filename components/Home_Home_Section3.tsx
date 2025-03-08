import React from 'react'
import { motion, useTransform } from "framer-motion";
import { aboutNPfont11 } from '@/lib/font.utils';


const Section3 = ({ scrollYProgress, element2, characters, scrollYProgress3 }: { scrollYProgress: any, element2: React.RefObject<HTMLParagraphElement | null>, characters: string[][], scrollYProgress3: any }) => {
    const scale = useTransform(scrollYProgress, [1 / 3 + 0.15, 1], [0.7, 1]);
    const rotate = useTransform(scrollYProgress, [1 / 3 + 0.15, 1], [-5, 0]);
  
    return (
      <motion.div
        style={{ scale, rotate }}
        className="relative top-0 h-screen bg-[#3d1f5c] bg-cover bg-no-repeat text-[3.5vw] flex flex-col items-center justify-center text-[#FFD700] pb-[10vh]"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/p3.jpeg')",
            filter: "blur(4px)",
          }}
        />
        <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900]">
          <p className={`text-[#FFD700] text-[5rem] ${aboutNPfont11.className}`}>Theme</p>
          <p ref={element2}
            style={{ whiteSpace: "pre-wrap" }}
            className={`text-[32px] max-sm:text-[5px] max-w-[1280px] p-[40px] flex flex-wrap justify-center gap-[1rem] leading-none ${aboutNPfont11.className} text-[#FFD700]`}
          >
            {
              characters.map((line, i) => {
                const lineStart = i / characters.length;
                const lineEnd = (i + 1) / characters.length;
  
                return (
                  <span key={i} className="text-center">
                    {line.map((word, j) => {
                      const wordStep = (lineEnd - lineStart) / line.length;
                      const wordStart = lineStart + j * wordStep;
                      const wordEnd = wordStart + wordStep;
  
                      const opacity3 = useTransform(scrollYProgress3, [wordStart, wordEnd], [0, 1]);
  
                      return (
                        <span key={j} className="relative inline-block mx-[5px] text-white">
                          {/* Low-opacity background word */}
                          <span className="opacity-[0.1]">{word}</span>
                          {/* Animated appearing word */}
                          <motion.span style={{ opacity: opacity3 }} className="absolute left-0 top-0 w-full">
                            {word}
                          </motion.span>
                        </span>
                      );
                    })}
                    <br />
                  </span>
                );
              })
            }
          </p>
        </div>
      </motion.div>
    );
  };
  
  
  
  

export default Section3