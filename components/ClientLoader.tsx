// DEPLOYMENT FIX
"use client"; // This makes the component a client component

import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";

interface Props {
    children: React.ReactNode;
}

const ClientLoader: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false);

        if (document.readyState === "complete") {
            handleLoad();
        } else {
        if(typeof window !== 'undefined'){
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }
    }, []);

    return loading ? <Loader /> : <>{children}</>;
};

export default ClientLoader;
