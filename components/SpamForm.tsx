"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@component/ui/Button";
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
import { useToast } from "@hook/use-toast";

const formSchema = z.object({
  serviceId: z
    .string()
    .regex(/^service_[a-zA-Z0-9]{7}/, "Invalid Service ID format."),

  templateId: z
    .string()
    .regex(/^template_[a-zA-Z0-9]{7}/, "Invalid Template ID format."),

  userId: z.string().length(17, "The User ID must be 17 characters long."),
});

export default function SpamForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceId: "",
      templateId: "",
      userId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "We started spamming!",
      description:
        "We won't stop until your friend quota is full.",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-2xl -mt-8 px-10 space-y-8"
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
        <FormField
          control={form.control}
          name="templateId"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
              <FormLabel>Service ID</FormLabel>
              <FormControl>
                <Input placeholder="service_abcefgh" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600/80"
        >
          Spam
        </Button>
      </form>
    </Form>
  );
}
