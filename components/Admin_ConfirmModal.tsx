"use client";

import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { useRouter } from "next/navigation";

interface ConfirmModalProps {
    children: React.ReactNode;
    row: any;
};

export const ConfirmModal = ({ children, row }: ConfirmModalProps) => {
    const [open, setOpen] = useState(false);

    const [isLoading, setisLoading] = useState(false);

    const router = useRouter();

    const onDelete = async (row: any) => {
        try {
            setisLoading(true);
            const response = await fetch(`/api/announcements/${row.original._id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                alert("Failed to delete the announcement");
                throw new Error('Failed to delete the announcement');
            }
            alert("Announcement deleted successfully");
            router.refresh();
        }
        catch (error) {
            alert("An error occurred. Please try again.");
            console.log(error);
        }
        finally {
            setisLoading(false);
            setOpen(false);
        }
    };

    const handleConfirm = () => {
        onDelete(row);
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isLoading} onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={isLoading} onClick={() => handleConfirm()}>Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}