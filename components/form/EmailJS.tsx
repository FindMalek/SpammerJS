"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@hook/use-toast";
import { fakerData, sendEmailJS, delay, cn } from "@lib/utils";

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
import { Icons } from "@component/ui/Icons";
import { Slider } from "@component/ui/Slider"
import { buttonVariants } from "@component/ui/Button";

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
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        for (let i = 0; i < count; i++) {
            const data = await sendEmailJS(values, fakerData());

            if (data.error) {
                toast({
                    title: "Error",
                    description: data.error,
                    variant: "destructive",
                });
                return;
            }

            toast({
                title: `Email sent to ${values.userId}`,
                description: <pre>{JSON.stringify(data.data, null, 2)}</pre>
            });

            if ((i + 1) % 3 === 0) {
                await delay(2000);
            }
        }
        setLoading(false);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto max-w-2xl py-4 space-y-8"
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

                <Slider
                    defaultValue={[count]}
                    value={[count]}
                    onValueChange={(newCount) => setCount(newCount[0])}
                    max={100} step={1} />

                <button
                    type="submit"
                    className={cn(buttonVariants(), "w-full")}
                    disabled={loading}
                >
                    {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                    Spam
                    <Icons.chevronRight className="ml-2 h-4 w-4 stroke-[3px]" />
                </button>
            </form>
        </Form>
    );
}
