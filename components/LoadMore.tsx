"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageRenderer } from "./ImageRenderer";

interface LoadMoreProps {
    onClick: (index: number) => void;
}

let page = 1;

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
    const images = [
      "/assets/exodia-gallery-images/DSC_0372.jpg",
      "/assets/exodia-gallery-images/DSC_0373.jpg",
      "/assets/exodia-gallery-images/DSC06940.jpg",
      "/assets/exodia-gallery-images/DSC07046.jpg",
      "/assets/exodia-gallery-images/DSC07220.jpg",
      "/assets/exodia-gallery-images/DSC07242.jpg",
      "/assets/exodia-gallery-images/DSC07249.jpg", 
      "/assets/exodia-gallery-images/DSC07252.jpg",
      "/assets/exodia-gallery-images/DSC07253.jpg",
      "/assets/exodia-gallery-images/DSC07260.jpg", 
      "/assets/exodia-gallery-images/DSC07268.jpg",
      "/assets/exodia-gallery-images/DSC07270.jpg",
      "/assets/exodia-gallery-images/DSC07275.jpg",
      "/assets/exodia-gallery-images/DSC07390.jpg",
      "/assets/exodia-gallery-images/DSC08347.jpg",
      "/assets/exodia-gallery-images/DSC08403.jpg",
      "/assets/exodia-gallery-images/DSC08467.jpg",
      "/assets/exodia-gallery-images/DSC08472.jpg",
      "/assets/exodia-gallery-images/DSC08481.jpg",
      "/assets/exodia-gallery-images/DSC08482.jpg",
      "/assets/exodia-gallery-images/DSC08487.jpg",
      "/assets/exodia-gallery-images/DSC08499.jpg",
      "/assets/exodia-gallery-images/LEH07282.jpg",
    ];
    const { ref, inView } = useInView();
    const [data, setData] = useState<string[]>([]);
    useEffect(() => {
        if(inView) {
            setData(() => [...data, ...images]);
            page++;
        }
    }, [inView, data]);
    return (
        <>
            <section>
                <ImageRenderer images={data} onClick={onClick} />
                <div ref={ref}>
                    <Image className="mt-16" src='/assets/gallery-svgs/spinner.svg' alt="spinner" width={60} height={60} />
                </div>
            </section>
        </>
    )
}

export default LoadMore;