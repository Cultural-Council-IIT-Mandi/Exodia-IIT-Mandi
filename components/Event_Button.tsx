"use client";
import React from "react";
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  text = "View More",
  textColor = "#FFE149FF",
  buttonOverlayColor = "#E2CA12FF",
  borderColor = "#FFD000FF",
  iconColor = "black",
  className,
  ...props
}) => {
  return (
    <button
      style={{ borderColor: borderColor, width: "100px",animation: "shine 2s infinite linear" , boxShadow: "0 0 10px 2px white", }}
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-yellow-400 bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out",
        className,
      )}
    >
      <span
        style={{ background: buttonOverlayColor }}
        className={cn(
          "px-10 ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-yellow-400 text-black duration-300 group-hover:translate-x-0",
        )}
      >
        <MoveRight style={{ color: iconColor }} />
      </span>
      <span
        style={{ color: textColor }}
        className={cn(
          "px-10  py-4 absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full",
        )}
      >
        {text}
      </span>
      <span className="invisible relative">Button</span>
    </button>
  );
};

export default ArrowButton;

