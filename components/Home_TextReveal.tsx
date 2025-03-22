'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { aboutNPfont11 } from '@/lib/font.utils';

interface TextRevealProps {
  text: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text }) => {
  const words = text.split(' ');

  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => ({
      y: '0',
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  const { ref, inView } = useInView({ threshold: 0.75, triggerOnce: true });

  return (
    <div ref={ref} className={`overflow-hidden text-4xl max-sm:text-sm font-bold text-center ${aboutNPfont11.className}`}>
      <div className="flex flex-wrap justify-center items-center gap-2 text-center">
        {words.map((word, index) => (
          <motion.span key={index} custom={index} variants={animation} initial="initial" animate={inView ? 'enter' : ''} className="inline-block">
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TextReveal;
