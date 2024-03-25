"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@hook/use-toast";
import { web3Schema } from "@config/schema";
import { fakerData, sendWeb3Form, delay, cn } from "@lib/utils";

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

export default function Web3Form() {
    const { toast } = useToast();
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof web3Schema>>({
        resolver: zodResolver(web3Schema),
    });

    async function onSubmit(values: z.infer<typeof web3Schema>) {
        setLoading(true);

        let i = 0;
        while (i < count) {
            const data = await sendWeb3Form(values.apiKey, fakerData("web3-forms"));
            if (data.error) {
                console.log("Failed to sent, resting for 2 seconds...")
                await delay(5000);
            } else {
                toast({
                    title: `Email sent`,
                    description: <pre className="break-all">{JSON.stringify(data.data, null, 2)}</pre>
                });
                i++;
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
                    name="apiKey"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                API Key
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Your friend API Key" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
