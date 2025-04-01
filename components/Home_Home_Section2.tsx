import React from 'react'
import { motion, useTransform } from 'framer-motion';
import { aboutNPfont11 } from '@/lib/font.utils';

const Section2 = ({ scrollYProgress, element2, characters, scrollYProgress3 }: { scrollYProgress: any, element2: React.RefObject<HTMLParagraphElement | null>, characters: string[][], scrollYProgress3: any }) => {
    const scale = useTransform(scrollYProgress, [0, 1 / 3 + 0.15, 1], [0.8, 1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1 / 3 + 0.15, 1], [5, 0, -5]);
  
    return (
      <motion.div
        style={{
          backgroundImage: "url('/p4.jpeg')",
          scale,
          rotate
        }}
        className="sticky top-0 h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center backdrop-blur-md"
      >
        <div className=" flex flex-col justify-center items-center gap-[3rem] mb-[7rem]">
          <p className={`text-[#FFD700] text-[5rem] ${aboutNPfont11.className}`}>About Exodia</p>
          <p ref={element2}
            style={{ whiteSpace: "pre-wrap" }}
            className={`text-[30px] max-sm:text-[5px] max-w-[1290px] p-[40px] flex flex-wrap justify-center gap-[1rem] leading-none ${aboutNPfont11.className} text-[#FFD700]`}
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
                          {/* Background faded word */}
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
  
  

export default Section2