import Image from "next/image";
import { motion } from "framer-motion";

interface ImageProps {
    src: string;
    alt: string;
    onClick: (index: number) => void;
    className?: string;
    index: number;
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const GalleryImage: React.FC<ImageProps> = ({src, alt, onClick, className, index}) => {
    const handleClick = () => {
        onClick(index);
    };

    return (
        <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay: index * 0.25, ease: "easeInOut", duration: 0.5}} viewport={{ amount: 0 }} className="my-8">
            <div className="group overflow-hidden rounded-lg relative w-full" onClick={handleClick}>
                <Image height={200} width={380} alt={alt} src={src} className={`transition ease duration-1000 group-hover:scale-110 ${className}`} objectFit="cover"/>
            </div>
        </motion.div>
    );
}

export default GalleryImage;