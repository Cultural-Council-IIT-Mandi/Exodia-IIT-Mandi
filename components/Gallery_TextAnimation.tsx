"use client";

import { motion } from "framer-motion";

interface TextAnimationProps {
    text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({text}) => {
    return (
        <div>
            {text.split("").map((char, index) => {
                return (
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, delay: (index) * 0.1 }}>
                        {char}
                    </motion.span>
                );
            })}
        </div>
    )
};

export default TextAnimation;