import React, { useState, useEffect } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { navItems } from "@/lib/utils";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 h-[60px] left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <a href="#" className="text-white font-semibold harry-text text-[3rem]">
          Exodia
        </a>

        {/* Navbar Links */}
        <nav
          className={`max-sm:hidden static top-full left-0 w-auto flex items-center  bg-transparent p-4 md:p-0`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-white text-base hover:text-yellow-300 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

        </nav>
        <div className="max-sm:hidden">
          P
        </div>
        {/* Menu Icon (Mobile Only) */}
        <Sheet>
          <SheetTrigger asChild>
            {/* <Button variant="outline">Open</Button> */}
            <button
              className="text-white text-2xl md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetClose asChild>
              <div>
                {navItems.map((item, i) => (
                  <div key={i} className="text-white text-2xl pt-2 transition">
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

