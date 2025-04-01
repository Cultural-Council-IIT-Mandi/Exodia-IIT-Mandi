"use client";

import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isAdminModal } from "@/hooks/is-admin";
import { isAuthorized } from "@/hooks/is-authorized";

import { ModalProvider } from "@/providers/modal-provider";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, {message: "Title is required"}),
  description: z.string().min(1, {message: "Description is required"}),
  imageUrl: z.string().optional()
});

const AdminPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: ""
    }
  });

  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const setIsAdmin =  isAuthorized(state => state.setIsAdmin);
  const isAdmin =  isAuthorized(state => state.isAdmin);
  const setIsNotAdmin = isAuthorized(state => state.setIsNotAdmin);

  const onOpen =  isAdminModal(state => state.onOpen);
  const isOpen =  isAdminModal(state => state.isOpen);
  const onClose = isAdminModal(state => state.onClose);

  if(!isAdmin)
    onOpen();

  const onSubmit = async (values : z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if(!response.ok) {
        throw new Error("Failed to create announcement");
      }

      router.refresh();

      const data = await response.json();
      console.log("Announcement created successfully:", data);
    }
    catch(error) {
      console.error("Failed to create announcement:", error);
    }
  };

  return (
    <>
      <ModalProvider isOpen={isOpen} onClose={onClose} onOpen={onOpen} setIsAdmin={setIsAdmin} />
      <div className="p-6 flex flex-col justify-center items-center">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">
                Announcement Creation
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-16 mb-16">
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
              <div className="flex items-center justify-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                    Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );  
} 

export default AdminPage;