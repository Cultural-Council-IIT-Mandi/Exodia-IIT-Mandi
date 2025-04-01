"use client"

import { AdminPasswordModal } from "@/components/Admin_PasswordDialog";
import { useEffect, useState } from "react";

interface ModalProviderProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    setIsAdmin: () => void;
}

export const ModalProvider = ({ isOpen, onOpen, onClose, setIsAdmin }: ModalProviderProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AdminPasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} setIsAdmin={setIsAdmin} />
        </>
    );
};