import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { CardStackedProps } from "@/types";
import { projects } from "@/lib/utils";
import { aboutNPfont11 } from "@/lib/font.utils";
import TextReveal from "./Home_TextReveal";



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
              className="glass flex flex-col relative top-[-25%] h-[700px] max-sm:h-[550px] w-[1600px] max-sm:w-[400px] rounded-[25px] origin-top border-2 border-white/[0.2]">
              <div className=" flex flex-col items-center justify-center mt-4 gap-12 h-full">
                {/* <div className={`text-7xl max-sm:text-3xl text-center ${aboutNPfont11.className}`}>
                  {project.name}
                </div> */}
                <TextReveal className="text-7xl max-sm:text-2xl" text={project.name} />
                <div className="flex items-center justify-center gap-4">
                  <div className="w-[40%] flex justify-center items-center">
                    <Image
                      className="rounded-[25px] w-[25rem] h-[25rem] max-sm:w-[15rem] max-sm:h-[15rem]  object-cover"
                      src={project.imageUrl}
                      alt={project.name}
                      width={300}
                      height={300} />
                  </div>
                  <div className={`text-2xl max-sm:text-xs text-center ${aboutNPfont11.className} w-[30%] flex justify-center items-center`}>
                    {project.description}
                  </div>
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