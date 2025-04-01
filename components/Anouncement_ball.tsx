"use client";
import React from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Anouncement_NewsSection from "./Anouncement_NewsSection";
import Anouncement_FirstSection from "./Anouncement_FirstSection";
import Image from "next/image";

const FloatingBall: React.FC = () => {
    return (
        // <div className="m-0 p-0 flex justify-center items-center ">
        <Dialog >
            <DialogTrigger asChild>
                <div className="fixed top-20 right-4 h-14 w-14 max-sm:w-7 max-sm:h-7 bg-white rounded-full shadow-lg z-50 flex items-center justify-center p-2 max-sm:p-1 cursor-pointer">
                    <Image 
                        src="/noti.svg"
                        alt="Anouncement"
                        width={80}
                        height={80}
                        className="rounded-full max-sm:w-5 max-sm:h-5 hover:scale-125 transition-transform duration-300"
                    />
                </div>
            </DialogTrigger>
            <DialogContent className='h-[80%] w-[80%] '>
                <div className="" >
                    {/* <Anouncement_NewsSection /> */}
                    <Anouncement_FirstSection />
                </div>
            </DialogContent>
        </Dialog>
        // </div>
    );
};

export default FloatingBall;
