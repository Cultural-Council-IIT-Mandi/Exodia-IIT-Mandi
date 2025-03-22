"use client";

import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ImageRenderer } from "./Gallery_ImageRenderer";

import img1 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
import img2 from "../public/assets/exodia-gallery-images/DSC_0372.jpg";
import img3 from "../public/assets/exodia-gallery-images/DSC_0373.jpg";
import img4 from "../public/assets/exodia-gallery-images/DSC07046.jpg";
import img5 from "../public/assets/exodia-gallery-images/DSC07220.jpg";
import img6 from "../public/assets/exodia-gallery-images/DSC07242.jpg";
import img7 from "../public/assets/exodia-gallery-images/DSC07249.jpg";
import img8 from "../public/assets/exodia-gallery-images/DSC07252.jpg";
import img9 from "../public/assets/exodia-gallery-images/DSC07253.jpg";
import img10 from "../public/assets/exodia-gallery-images/DSC07260.jpg";
import img11 from "../public/assets/exodia-gallery-images/DSC07268.jpg";
import img12 from "../public/assets/exodia-gallery-images/DSC07270.jpg";
import img13 from "../public/assets/exodia-gallery-images/DSC07275.jpg";
import img14 from "../public/assets/exodia-gallery-images/DSC07390.jpg";
import img15 from "../public/assets/exodia-gallery-images/DSC08347.jpg";
import img16 from "../public/assets/exodia-gallery-images/DSC08403.jpg";
import img17 from "../public/assets/exodia-gallery-images/DSC08467.jpg";
import img18 from "../public/assets/exodia-gallery-images/DSC08472.jpg";
import img19 from "../public/assets/exodia-gallery-images/DSC08481.jpg";
import img20 from "../public/assets/exodia-gallery-images/DSC08482.jpg";
import img21 from "../public/assets/exodia-gallery-images/DSC08487.jpg";
import img22 from "../public/assets/exodia-gallery-images/DSC08499.jpg";
import img23 from "../public/assets/exodia-gallery-images/LEH07282.jpg";

// deploy check
// import img1 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img2 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img3 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img4 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img5 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img6 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img7 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img8 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img9 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img10 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img11 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img12 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img13 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img14 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img15 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img16 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img17 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img18 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img19 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img20 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img21 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img22 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img23 from "../public/assets/exodia-gallery-images/DSC06940.jpg";

interface LoadMoreProps {
    onClick: (index: number) => void;
}

let page = 1;

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
    const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23 ];
    const { ref, inView } = useInView();
    const [data, setData] = useState<(StaticImageData)[]>([]);
    useEffect(() => {
        if(inView) {
            setData(() => [...data, ...images]);
            page++;
        }
    }, [inView, data]);
    return (
        <>
            <div className="flex justify-center w-full">
                <section className="flex flex-col items-center justify-center w-full">
                    <ImageRenderer images={data} onClick={onClick} />
                    <div ref={ref}>
                        <Image className="mt-16 max-sm:mt-0" src='/assets/gallery-svgs/spinner.svg' alt="spinner" width={60} height={60} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default LoadMore;