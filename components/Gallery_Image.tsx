import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ImageProps {
    src: StaticImageData;
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
        <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay: index * 0.25, ease: "easeInOut", duration: 0.5}} viewport={{ amount: 0 }} className="my-8 max-sm:my-3 ">
            <div className="group overflow-hidden rounded-3xl border-2 border-white/[0.2] sm:h-72 sm:w-96 h-52 w-72" onClick={handleClick}>
            <Image loading="lazy" fill={true} alt={alt} src={src} style={{objectFit: "cover"}} className={`transition ease duration-1000 group-hover:scale-110 ${className}`}/>
            </div>
        </motion.div>
    );
}

export default GalleryImage;