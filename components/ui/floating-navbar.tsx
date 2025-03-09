"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn, navItems } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import JoinExodiaForm from "../JoinExodiaForm";
import { aboutNPfont11 } from "@/lib/font.utils";

export const FloatingNav = ({
  // navItems,
  className,
  namex,
}: {
  // navItems: {
  //   name: string;
  //   link: string;
  //   icon?: JSX.Element;
  // }[];
  className?: string;
  namex: string;
}) => {

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };


  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto w-[90%] border-2 border-white dark:border-white/[0.2] rounded-full bg-white/10 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <div
            key={idx}
            className="relative group p-2"
            onMouseEnter={() => navItem.subItems && toggleDropdown(idx)}
            onMouseLeave={() => navItem.subItems && toggleDropdown(null)}>
            <div className="flex">
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  " home-card-text-outline relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                <span className={`text-lg text-white transition ${aboutNPfont11.className}`}>{navItem.name}</span>
              </Link>
              {/* {navItem.subItems && (
                <Image src="/icons/custom/dropdown.svg" alt="Arrow Down" width={20} height={20} style={{ filter: 'invert(1)' }} />
              )} */}
            </div>
            {/* Dropdown Menu */}
            {/* {navItem.subItems && dropdownOpen === idx && (
                <div className=" border-2 border-white dark:border-white/[0.2] absolute top-full left-0 bg-gray-800 text-white  rounded-2xl shadow-lg  bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300">
                  {navItem.subItems.map((subItem:any) => (
                    <a
                      key={subItem.name}
                      href={subItem.link}
                      className="block px-4 py-2 hover:text-yellow-300 transition"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )} */}
          </div>
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>{namex}</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button> */}
        <div className="ml-2">
          <JoinExodiaForm />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
