import React, { useState, useEffect } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { navItems } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { aboutNPfont, aboutNPfont11 } from "@/lib/font.utils";
import JoinExodiaForm from "./JoinExodiaForm";

const Navbar: React.FC = () => {

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    // const currentScrollY = window.scrollY; // DEPLOYMENT FIX

    // if (currentScrollY === 0) {
    //   // Always show the navbar when at the top
    //   setIsVisible(true);
    // } else if (currentScrollY > lastScrollY) {
    //   // Hide navbar when scrolling down
    //   setIsVisible(true);
    // } else {
    //   // Show navbar when scrolling up
    //   setIsVisible(false);
    // }

    // setLastScrollY(currentScrollY);

    if(typeof window != undefined)
    {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Always show the navbar when at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setIsVisible(true);
      } else {
        // Show navbar when scrolling up
        setIsVisible(false);
      }
  
      setLastScrollY(currentScrollY);
    }
    };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll); // DEPLOYMENT FIX

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`home-card-text-outline z-[980] fixed top-0 h-[60px] left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300 ${isVisible ? "sm:translate-y-0" : "sm:-translate-y-full"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <a href="/" className={` font-semibold text-[3rem] text-white ${aboutNPfont11.className}`}>
          Exodia
        </a>

        {/* Navbar Links */}
        <nav className="hidden sm:flex flex-row items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={item.name}
              className="relative group p-2"
              // onMouseEnter={() => item.subItems && toggleDropdown(index)}
              // onMouseLeave={() => item.subItems && toggleDropdown(null)}
            >
              <div className="flex">
                <a
                  href={item.link}
                  className={`text-xl text-white transition ${aboutNPfont11.className}`}

                >
                  {item.name}
                </a>
                {/* {item.subItems && (
                  <Image src="/icons/custom/dropdown.svg" alt="Arrow Down" width={20} height={20} style={{ filter: 'invert(1)' }} />
                )} */}
              </div>
              {/* Dropdown Menu */}
              {/* {item.subItems && dropdownOpen === index && (
                <div className="border-2 border-white dark:border-white/[0.2] absolute top-full left-0 bg-gray-800 text-white  rounded-2xl shadow-lg  bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300">
                  {item.subItems.map((subItem) => (
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
        </nav>

        {/* Join Exodia Button (Desktop) */}
        <div className="hidden sm:block">
          <JoinExodiaForm />
        </div>



        {/* Menu Icon (Mobile Only) */}
        <Sheet>
          <SheetTrigger asChild className="flex justify-center items-center mb-5 max-sm:mb-4 max-sm:rounded-xl">
            {/* <Button variant="outline">Open</Button> */}
            <button
              className="text-white  text-2xl md:hidden max-sm:px-2"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <p className=" p-0 m-0 text-white">☰</p>
            </button>
          </SheetTrigger>
          <SheetContent className="h-full">
            <SheetClose asChild>
              <div className="h-[100vh]">
                {navItems.map((item, i) => (
                  <div key={i} className={`text-white text-2xl pt-2 ${aboutNPfont.className} `}>
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
                
                {/* Add Join Exodia Button to mobile menu */}
                <div className="mt-6">
                  <JoinExodiaForm />
                </div>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

