"use client"

import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

import toast from 'react-hot-toast';

import { useRouter } from 'next/navigation';

interface AdminPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    setIsAdmin: () => void;
}

const formSchema = z.object({
    password: z.string().min(1, { message: "Password is required" })
})

export const AdminPasswordModal = ({ isOpen, onClose, onOpen, setIsAdmin }: AdminPasswordModalProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ""
        }
    })

    const router = useRouter();

    
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if(values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsAdmin();
            onClose();
        }
        else {
            toast.error(`Wrong Password`);
        }
    }

    return (
        <Modal
            title="Admin Page"
            description="Enter the admin password for access to the admin page"
            isOpen={isOpen}
            onClose={onClose}
            className='bg-white'
        >
            <div>
                <div className='py-2 pb-4 space-y-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-black'>Password</FormLabel>
                                        <FormControl>
                                            <Input className='text-black' type='password' placeholder='Enter Password' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex items-center justify-end w-full pt-6 space-x-2'>
                                <Button variant="outline" onClick={() => {
                                    onClose();
                                    router.push("/");
                                }}>
                                    Go Back
                                </Button>
                                <Button type='submit'>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}