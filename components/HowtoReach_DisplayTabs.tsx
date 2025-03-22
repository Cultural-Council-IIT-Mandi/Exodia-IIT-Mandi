"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs } from "./ui/Tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "By Bus",
      value: "By Bus",
      content: (
        <div className="space-y-6 text-left w-full overflow-hidden relative md:h-[23rem] h-[60rem] top-10 rounded-2xl md:p-10 font-bold text-white glass">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:w-px before:h-full before:bg-yellow-400/30"
            >
              <div className="relative before:content-[''] before:absolute before:left-[-20px] before:top-2 before:w-4 before:h-4 before:bg-yellow-400 before:rounded-full">
                <h3 className="text-xl text-yellow-400 mb-2 ml-4">Go to Mandi ISBT Bus Stand.</h3>
                <p className="text-white/80 ml-4">At the ISBT, you will find private and government buses heading toward Kamand (IIT Mandi). These buses operate frequently, and the journey is approximately 15 km, taking around 45 minutes to 1 hour depending on the traffic and stops. The ticket costs around ₹50 per person. Along the way, enjoy the scenic drive through the lush green hills and winding roads that offer a glimpse of the serene beauty of Himachal Pradesh.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:w-px before:h-full before:bg-yellow-400/30"
            >
              <div className="relative before:content-[''] before:absolute before:left-[-20px] before:top-2 before:w-4 before:h-4 before:bg-yellow-400 before:rounded-full">
                <h3 className="ml-4 text-xl text-yellow-400 mb-2">The bus will drop you at the Kamand Bus Stand, situated near the IIT Mandi campus.</h3>
                <p className="ml-4 text-white/80">From the Kamand Bus Stand, it’s a short 5–10 minute walk to the campus entrance. The walk is pleasant and gives you a chance to admire the peaceful environment of the area.
                </p>
              </div>
            </motion.div>
          </div>
      ),
    },
    {
      title: "By Cabs",
      value: "By Cabs",
      content: (
        <div className="space-y-6 text-left w-full overflow-hidden md:h-[23rem] h-[60rem] relative top-10 rounded-2xl md:p-10 font-bold text-white glass">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:w-px before:h-full before:bg-yellow-400/30"
            >
              <div className="relative before:content-[''] before:absolute before:left-[-20px] before:top-2 before:w-4 before:h-4 before:bg-yellow-400 before:rounded-full">
                <h3 className="text-xl text-yellow-400 mb-2 ml-4">Book a cab from any location in Mandi town or directly from the Mandi ISBT Bus Stand.</h3>
                <p className="text-white/80 ml-4">Cabs are readily available and can be booked through local taxi services. The journey from Mandi to IIT Mandi is around 15 km and takes approximately 30–45 minutes. The fare typically ranges from ₹800–₹1000 depending on the type of cab and negotiation. The cab ride offers a comfortable and convenient option, especially if you are traveling with luggage or in a group. During the ride, you’ll enjoy a smooth drive through the scenic mountain roads with breathtaking views of rivers, forests, and valleys.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:w-px before:h-full before:bg-yellow-400/30"
            >
              <div className="relative before:content-[''] before:absolute before:left-[-20px] before:top-2 before:w-4 before:h-4 before:bg-yellow-400 before:rounded-full">
                <h3 className="ml-4 text-xl text-yellow-400 mb-2">The cab will drop you directly at the main campus gate or your preferred location inside the campus, making it the most hassle-free option.</h3>
                <p className="ml-4 text-white/80">This option is ideal if you’re looking for convenience and a quicker, more private journey while still enjoying the beautiful surroundings.</p>
              </div>
            </motion.div>
          </div>
      ),
    },
  ];

  return (
    <div className="h-[65rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}