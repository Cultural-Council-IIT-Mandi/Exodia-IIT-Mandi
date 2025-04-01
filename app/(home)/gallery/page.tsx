"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom, Thumbnails, Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import LoadMore from "@/components/Gallery_LoadMore";
// import { ImageRenderer } from "@/components/ImageRenderer";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
// import { navItems } from "@/lib/utils";
import { aboutNPfont11 } from "@/lib/font.utils";
import { CoolMode } from "@/components/ui/cool-mode";
import { images } from "@/lib/utils";

const page = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setIndex(index);
    setOpen(true);
  }

  // deploy check
//   const images = [
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8I707mXJOVUiXjEZo8nPCruRv1xJM02KalYe3",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OzvaoCZAVZirtFvpze2T4jfB9k1RaSXCLubx",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Nu2ALWATBnmKsCY0o1ENRbLkZXIgjp3rfh6V",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8n2DsJgKFvlWGTIAJSubDhEoNp9XPaV5xw4jy",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8myK0B8jXbzNjKiwsf8AWZGL3t6QTYohU9BDg",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XyZ0N1hWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8VqbjfD4TaWOgMFRoCkJPN2dSYzuqDA9f47ci",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80jj3l2O6nPm1We5dZyOsKhfk4grHcBuEtjiq",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8fgX5LuNnaGuQcUEXzIrigDtYvbPpyeAwZH8K",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nzPw094KFvlWGTIAJSubDhEoNp9XPaV5xw4j",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87RXf5OeVgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8CWhqH5rR4iUhtEkXzqNrGjSnf1ul85MDWvBs",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAjgtGvLvuzkRJai146Y2oZCN0Q3DmjflbHw",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83tXH9Az72kmsCXMLPhjzWtoifAyncURqe9d8",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Xf41RshWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hUTBB8hgiPInSsWU8AM03Hk6OVjE5NlYFoqr",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tI4Vqp3eeKLVcTXI7MJNPQraCYZ5iGjoEO9H",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wZ0pJUkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8h2xHhMgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hfWTnsgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8brpqZ0JFTD4RYVkqMGW97ir0uIxeHfXCJ5oO",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
// "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA",
//   ];

  const slides = Array.from({ length: images.length }, (_, index) => ({
    
    src: images[index],
    description: typeof window != undefined && window.innerWidth > 1140 ? "Press ESC to exit\nUse arrow keys to navigate" : "",
  }));

  // console.log(window.innerWidth);

  const onClick = (index: number) => openLightbox(index);


  return (
    <div className="h-screen">
      <Navbar />

      <FloatingNav namex="P" className="max-md:hidden" />
      <div className="absolute top-8 left-8 flex items-center justify-center">
        <Modal>
          <ModalTrigger className="harry-text border border-white flex justify-center group/modal-btn mt-10">
            <span className="text-[1.3rem] group-hover/modal-btn:translate-x-40 text-white text-center transition duration-500 ">
              Hover here!
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <Image src="/assets/gallery-svgs/instagram-fill.svg" alt="instagram-fill" width={30} height={30} />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Check Out Exodia's Instagram Page! 📸
              </h4>
              <div className="flex justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
            <CoolMode>
            <Link href="https://www.instagram.com/exodia.iitmandi/" target="_blank">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-white dark:border-black dark:text-black border border-gray-300 rounded-md text-sm w-auto">
                
                  @exodia.iitmandi
                
              </button>
            </Link>
            </CoolMode>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      <div className="flex flex-col items-center mt-2">
        <header className="flex flex-col items-center z-[200] sm:static relative">
          <h1 className={`font-bold text-white mt-40 z-[900] sm:text-[6rem] text-[4rem] ${aboutNPfont11.className}`}>
            {/* <TextAnimation text="Gallery" /> */}
            Gallery
          </h1>
          {/* <div className={`text-white text-center text-[2rem]  mb-20 z-[900] ${aboutNPfont11.className}`}>
            <TextAnimation text="Welcome to the Exodia IIT Mandi Gallery!" />
          </div> */}
        </header>
        {/* <ImageRenderer onClick={onClick} images={images} /> */}
        <LoadMore onClick={onClick} />
      </div>
      <Lightbox className="z-0" index={idx} captions={{descriptionTextAlign: "center"}} plugins={[Captions]} open={open} slides={slides} close={() => setOpen(false)} />
    </div>
  );
}

export default page;