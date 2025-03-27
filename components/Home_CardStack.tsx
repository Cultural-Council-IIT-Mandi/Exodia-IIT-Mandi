import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { CardStackedProps } from "@/types";
import { projects } from "@/lib/utils";



const CardStacked: React.FC<CardStackedProps> = ({ scrollYProgress }) => {
  const maincardstackedcontainer = useRef<HTMLDivElement>(null);

  return (
    <div ref={maincardstackedcontainer} className="mt-[0vh] pb-[1vh] max-sm:pb-0 relative">
      {projects.map((project, i) => {
        const targetscale = 1 - (projects.length - i) * 0.05;
        const scale = useTransform(scrollYProgress, [i / projects.length, 1], [1, targetscale]);

        return (
          <div key={i} className="sticky top-0 flex justify-center items-center w-full h-[100vh]">
            <motion.div
              style={{ backgroundSize: "cover", backgroundPosition: "center", scale, top: `calc(-0vh + ${i * 15}px)` }}
              className="glass flex flex-col relative top-[-25%] h-[700px] max-sm:h-[550px] w-[1600px] max-sm:w-[400px] rounded-[25px] origin-top border-2 border-white/[0.2]"
            >
              <div className="flex flex-col mt-4 gap-12 h-full">
                <div>
                  <p className={`text-[5rem] max-sm:text-[2.5rem] home-card-text-outline`}>{project.eventType}</p>
                </div>
                <div
                  className="grid gap-10 max-sm:gap-0 w-full h-full"
                  style={{ gridTemplateColumns: `repeat(${project.events.length}, minmax(0, 1fr))` }}
                >
                  {project.events.map((event, index) => (
                    <div key={index} className="h-full rounded-2xl flex flex-col items-center">
                      <div className="relative rounded-2xl w-[80%] h-[80%] overflow-hidden">
                        <motion.div className="rounded-2xl w-full h-full">
                          <Image src={event.imageUrl} className="border-2 border-white/[0.2] rounded-2xl" alt="Event Image" layout="fill" objectFit="cover" />
                        </motion.div>
                      </div>
                      <div className="relative mt-2 text-center">
                        <p className="text-[2rem] max-sm:text-[0.8rem]">{event.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default CardStacked;