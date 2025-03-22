"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact_Card from '@/components/Contact_Card'
import { aboutNPfont, aboutNPfont11 } from '@/lib/font.utils'
import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Train, Bus, MapPin, Navigation } from 'lucide-react';
import { TabsDemo } from '@/components/HowtoReach_DisplayTabs';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import Image from 'next/image';
import { CoolMode } from '@/components/ui/cool-mode';
import { FloatingNav } from '@/components/ui/floating-navbar';


const page: React.FC = () => {

  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);

  const images = [
    "/assets/how-to-reach/htr-1.jpg",
    "/assets/how-to-reach/htr-2.jpg",
    "/assets/how-to-reach/htr-3.jpg",
    "/assets/how-to-reach/htr-4.jpg",
    "/assets/how-to-reach/htr-5.jpg",
  ];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".route-container")) {
        setSelectedRoute(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };



  return (
    <>
      <Navbar />

      <div className='p-0 m-0 h-full min-h-screen'>
        <div className={`mt-[8rem] mb-7 text-white text-[5rem] max-sm:text-[3rem] ${aboutNPfont11.className}`}>Contact Us</div>

        <div className='flex justify-center items-center max-sm:flex-col max-sm:p-4 '>
          <Contact_Card src="/assets/team/vishal.jpeg" title='Vishal Kumar' desc="Convener" contact="" />

          <Contact_Card src="/assets/team/aryan.jpeg" title="Aryan Kumar" desc="Convener" contact="" />

          <Contact_Card src="/assets/team/divyanshu.jpg" title="Divyanshu Raj" desc="Head" contact="+91-9811197429" />

          <Contact_Card src="/assets/team/gaurav.jpg" title="Gourav Chaudhary" desc="Head" contact="+91-8278741047" />
        </div>
      </div>

      <div className={`min-h-screen  text-white ${aboutNPfont11.className}`}>
        {/* Hero Section with 3D Train */}
        <div className="relative overflow-hidden">
          <div className="relative container mx-auto px-4  h-full flex  text-gold text-left items-center justify-center max-sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[6rem] max-sm:text-[1.8rem] max-lg:text-[3rem] max-xl:text-[4rem] font-bold text-white mb-4 ">
                How to Reach IIT Mandi
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Travel Routes */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Air Route */}
            <div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="route-container glass p-6 rounded-lg border border-white/[0.2] hover:border-white/[0.7] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'air' ? null : 'air')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Plane className="text-white w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">By Air</h2>
                </div>
                <AnimatePresence>
                  {selectedRoute === 'air' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden text-left"
                    >
                      <p className="text-white/90">Nearest airports:</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Bhuntar Airport, Kullu (60 km)</li>
                        <li>Gaggal Airport, Dharamshala (150 km)</li>
                        <li>Chandigarh International Airport (200 km)</li>
                      </ul>
                      <p className="text-sm text-white/70">From these airports, you can take a taxi or bus to IIT Mandi.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Rail Route */}
            <div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="route-container glass p-6 rounded-lg border border-white/[0.2] hover:border-white/[0.7] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'rail' ? null : 'rail')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Train className="text-white w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">By Train</h2>
                </div>
                <AnimatePresence>
                  {selectedRoute === 'rail' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden text-left"
                    >
                      <p className="text-white/90">Nearest railway stations:</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Una Railway Station (110 km)</li>
                        <li>Kiratpur Railway Station (160 km)</li>
                        <li>Chandigarh Railway Station (200 km)</li>
                      </ul>
                      <p className="text-sm text-white/70">Regular buses and taxis are available from these stations to Mandi.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Road Route */}
            <div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="route-container glass p-6 rounded-lg border border-white/[0.2] hover:border-white/[0.7] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'road' ? null : 'road')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bus className="text-white w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">By Road</h2>
                </div>
                <AnimatePresence>
                  {selectedRoute === 'road' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden text-left"
                    >
                      <p className="text-white/90">Major bus routes:</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Delhi → Mandi (500 km, ~12 hrs)</li>
                        <li>Chandigarh → Mandi (200 km, ~6 hrs)</li>
                        <li>Shimla → Mandi (150 km, ~4 hrs)</li>
                      </ul>
                      <p className="text-sm text-white/70">Regular HRTC and private buses available.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Detailed Instructions */}
          <motion.div
            variants={item}
            className="mt-16 p-8 rounded-lg border border-white/[0.2] h-auto"
          >
            <h2 className="mb-12 text-2xl font-bold text-white flex items-center gap-3">
              <Navigation className="w-6 h-6" />
              Guide to IIT Mandi from Mandi
            </h2>
            <TabsDemo />
          </motion.div>

          {/* Map Location */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center flex justify-center"
          >
            <Modal>
              <ModalTrigger className="harry-text-vsmall border border-white flex justify-center group/modal-btn mt-10">
                <span className="group-hover/modal-btn:translate-x-40 text-white text-center transition duration-500  text-[1.5rem]">
                  Hover here!
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 harry-text text-[1.3rem]">
                  📍
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    Check out {" "}
                    <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                      IIT Mandi
                    </span>{" "}
                    on Google Map! 🌄
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
                    <a href='https://maps.app.goo.gl/am2VXhLdSqJ1sDLt9' target="_blank">
                      <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                        🗺️
                      </button>
                    </a>
                  </CoolMode>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </>
  )
}

export default page