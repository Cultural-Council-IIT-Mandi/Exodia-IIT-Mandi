"use client";

import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ImageRenderer } from "./Gallery_ImageRenderer";
import { images } from "@/lib/utils";

// import img1 from "../public/assets/exodia-gallery-images/DSC06940.jpg";
// import img2 from "../public/assets/exodia-gallery-images/DSC_0372.jpg";
// import img3 from "../public/assets/exodia-gallery-images/DSC_0373.jpg";
// import img4 from "../public/assets/exodia-gallery-images/DSC07046.jpg";
// import img5 from "../public/assets/exodia-gallery-images/DSC07220.jpg";
// import img6 from "../public/assets/exodia-gallery-images/DSC07242.jpg";
// import img7 from "../public/assets/exodia-gallery-images/DSC07249.jpg";
// import img8 from "../public/assets/exodia-gallery-images/DSC07252.jpg";
// import img9 from "../public/assets/exodia-gallery-images/DSC07253.jpg";
// import img10 from "../public/assets/exodia-gallery-images/DSC07260.jpg";
// import img11 from "../public/assets/exodia-gallery-images/DSC07268.jpg";
// import img12 from "../public/assets/exodia-gallery-images/DSC07270.jpg";
// import img13 from "../public/assets/exodia-gallery-images/DSC07275.jpg";
// import img14 from "../public/assets/exodia-gallery-images/DSC07390.jpg";
// import img15 from "../public/assets/exodia-gallery-images/DSC08347.jpg";
// import img16 from "../public/assets/exodia-gallery-images/DSC08403.jpg";
// import img17 from "../public/assets/exodia-gallery-images/DSC08467.jpg";
// import img18 from "../public/assets/exodia-gallery-images/DSC08472.jpg";
// import img19 from "../public/assets/exodia-gallery-images/DSC08481.jpg";
// import img20 from "../public/assets/exodia-gallery-images/DSC08482.jpg";
// import img21 from "../public/assets/exodia-gallery-images/DSC08487.jpg";
// import img22 from "../public/assets/exodia-gallery-images/DSC08499.jpg";
// import img23 from "../public/assets/exodia-gallery-images/LEH07282.jpg";


// const images = [
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8I707mXJOVUiXjEZo8nPCruRv1xJM02KalYe3",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OzvaoCZAVZirtFvpze2T4jfB9k1RaSXCLubx",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Nu2ALWATBnmKsCY0o1ENRbLkZXIgjp3rfh6V",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8n2DsJgKFvlWGTIAJSubDhEoNp9XPaV5xw4jy",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8myK0B8jXbzNjKiwsf8AWZGL3t6QTYohU9BDg",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XyZ0N1hWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8VqbjfD4TaWOgMFRoCkJPN2dSYzuqDA9f47ci",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80jj3l2O6nPm1We5dZyOsKhfk4grHcBuEtjiq",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8fgX5LuNnaGuQcUEXzIrigDtYvbPpyeAwZH8K",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nzPw094KFvlWGTIAJSubDhEoNp9XPaV5xw4j",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87RXf5OeVgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8CWhqH5rR4iUhtEkXzqNrGjSnf1ul85MDWvBs",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAjgtGvLvuzkRJai146Y2oZCN0Q3DmjflbHw",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83tXH9Az72kmsCXMLPhjzWtoifAyncURqe9d8",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Xf41RshWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hUTBB8hgiPInSsWU8AM03Hk6OVjE5NlYFoqr",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tI4Vqp3eeKLVcTXI7MJNPQraCYZ5iGjoEO9H",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wZ0pJUkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8h2xHhMgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hfWTnsgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8brpqZ0JFTD4RYVkqMGW97ir0uIxeHfXCJ5oO",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
//     "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA",
//       ];

interface LoadMoreProps {
    onClick: (index: number) => void;
}

let page = 1;

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
    // const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23 ];
    const { ref, inView } = useInView();
    const [data, setData] = useState<(string)[]>([]);
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