"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@hook/use-toast";
import { fakerData, sendEmail, delay } from "@lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@component/ui/Form";
import { Input } from "@component/ui/Input";
import { Button } from "@component/ui/Button";

const formSchema = z.object({
  serviceId: z
    .string()
    .regex(/^service_[a-zA-Z0-9]{7}/, "Invalid Service ID format."),

  templateId: z
    .string()
    .regex(/^template_[a-zA-Z0-9]{7}/, "Invalid Template ID format."),

  userId: z.string().length(17, "The User ID must be 17 characters long."),
  website: z.string().url("Invalid website URL."),
});

export default function SpamForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Spamming...",
      description: "Spamming your friend...",
    });

    for (let i = 0; i < 10; i++) {
      await sendEmail(values, fakerData());
      if ((i + 1) % 3 === 0) {
        await delay(2000);
      }
    }

    toast({
      title: "Spamming Complete",
      description: "10 emails have been sent.",
      variant: "destructive",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-2xl -mt-8 px-10 py-6 space-y-8"
      >
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User ID</FormLabel>
              <FormControl>
                <Input placeholder="Your friend User ID" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:flex sm:flex-row sm:gap-4">
          <FormField
            control={form.control}
            name="templateId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Template ID</FormLabel>
                <FormControl>
                  <Input placeholder="template_abcefgh" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Service ID</FormLabel>
                <FormControl>
                  <Input placeholder="service_abcefgh" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Spam
        </Button>
      </form>
    </Form>
  );
}
