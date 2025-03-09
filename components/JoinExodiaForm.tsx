"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const JoinExodiaForm = () => {
  const pathname = usePathname();
  
  // Don't render the button if we're already on the join page
  if (pathname === "/join") {
    return null;
  }
  
  return (
    <Link href="/join">
      <button 
        className="border-2  text-gold hover:bg-gold hover:text-black transition-all duration-300 font-medium px-4 py-2 rounded-full "
        data-cursor-hover
      >
        Join Exodia
      </button>
    </Link>
  );
};

export default JoinExodiaForm; 