"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children,
    className
}) => {
    const onChange = (open: boolean) => {
        console.info('m')
        if (isOpen) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className={className}>
                <DialogHeader>
                    <DialogTitle className="text-black">
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    <div>
                        {children}
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}