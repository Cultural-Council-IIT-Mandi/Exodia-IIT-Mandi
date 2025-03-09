"use client";
import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Train, Bus, MapPin, Navigation } from 'lucide-react';
import { TabsDemo } from '@/components/HowtoReach_DisplayTabs';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import Image from 'next/image';
import { CoolMode } from '@/components/ui/cool-mode';
import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Footer from '@/components/Footer';
import { aboutNPfont11 } from '@/lib/font.utils';

function App() {
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

      <FloatingNav namex="P" className="max-md:hidden" />


      <div className={`min-h-screen  text-white ${aboutNPfont11.className}`}>
        {/* Hero Section with 3D Train */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/iitmandi/1.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative container mx-auto px-4  h-full flex  text-gold text-left items-center justify-center max-sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[6rem] max-sm:text-[1.8rem] max-lg:text-[3rem] max-xl:text-[4rem] font-bold text-yellow-400 mb-4 ">
                How to Reach IIT Mandi
              </h1>
              <p className="text-[3rem] max-sm:text-[0.9rem] max-lg:text-[2rem] max-xl:text-[2.5rem] text-white/90">Your magical journey begins here</p>
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
                className="route-container bg-yellow-950/30 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'air' ? null : 'air')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Plane className="text-yellow-400 w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-yellow-400">By Air</h2>
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
                className="route-container bg-yellow-950/30 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'rail' ? null : 'rail')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Train className="text-yellow-400 w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-yellow-400">By Train</h2>
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
                className="route-container bg-yellow-950/30 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'road' ? null : 'road')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bus className="text-yellow-400 w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-yellow-400">By Road</h2>
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
            className="mt-16 p-8 rounded-lg border border-yellow-400/30 h-auto"
          >
            <h2 className="mb-12 text-2xl font-bold text-yellow-400 flex items-center gap-3">
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
              <ModalTrigger className="harry-text-vsmall border border-yellow-300 flex justify-center group/modal-btn mt-10">
                <span className="group-hover/modal-btn:translate-x-40 text-yellow-300 text-center transition duration-500 harry-text text-[1.5rem]">
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
  );
}

export default App;