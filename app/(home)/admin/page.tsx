"use client";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ShieldAlertIcon, WandIcon } from "lucide-react";
import isAdmin from "@/lib/isAdmin";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/file-upload";

const formSchema = z.object({
    title: z.string().min(1, {message: "Title is required"}),
    description: z.string().min(1, {message: "Description is required"}),
    imageUrl: z.string().optional()
});

const page = () => {
    const { userId } = useAuth();

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            imageUrl: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values : z.infer<typeof formSchema>) => {
        console.log(values);

        try {
            const response = await fetch("/api/announcements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                console.log(response);
                alert("Failed to create announcement");
                throw new Error("Failed to create announcement");
            }
            
            alert("Announcement created successfully");
            router.refresh();

            router.push("/admin/table");

            const data = await response.json();
            console.log("Announcement created successfully:", data);
        }
        catch (error) {
            console.error("Failed to create announcement:", error);
        }
    };

    if(!userId || !isAdmin(userId)) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-yellow-400 overflow-hidden">
            {/* Floating particles animation */}
                {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
                    initial={{ 
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight 
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                ))}
        
                {/* Main content */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center"
                >
                    <motion.div
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <ShieldAlertIcon className="w-24 h-24 text-yellow-400" />
                    </motion.div>
                    
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6 font-[Cinzel]"
                    >
                        Restricted Area
                    </motion.h1>
                    
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="max-w-2xl mx-auto space-y-4 text-lg md:text-xl"
                    >
                        <p className="text-yellow-300">
                            "Mischief managed, but not quite right!"
                        </p>
                        <p className="text-yellow-400/80">
                            This area is protected by ancient magic. Only those with proper administrative privileges may enter.
                        </p>
                    </motion.div>
                
                    {/* Animated wand */}
                    <motion.div
                        className="mt-12"
                        initial={{ rotate: -45 }}
                        animate={{ rotate: 45 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <WandIcon className="w-12 h-12 mx-auto text-yellow-400" />
                    </motion.div>
                    
                    {/* Spell effect */}
                    <motion.div
                        className="absolute inset-0 bg-yellow-400/5 rounded-full blur-3xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.5 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        );
    }

    return (
        <>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">
                            Announcement Creation
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                            <div>
                                <div className="mt-6 border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                        Title
                                    </div>
                                    <FormField control={form.control} name="title" render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input disabled={isSubmitting} placeholder="Enter title" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                </div>
                            </div>
                            <div>
                                <div className="mt-6 border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                        Description
                                    </div>
                                    <FormField control={form.control} name="description" render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea disabled={isSubmitting} placeholder="Enter description" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                </div>
                            </div>
                            <div>
                                <div className="mt-6 border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                        Image
                                    </div>
                                    <div>
                                        <FileUpload endpoint="image" onChange={(url) => form.setValue("imageUrl", url)} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Button disabled={!isValid || isSubmitting} type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
                <div className="mt-6">
                    <div className="flex items-center justify-center w-full">
                        <Button onClick={() => router.push("/admin/table")}>
                            Manage announcements
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );  
}

export default page;