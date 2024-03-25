import "@style/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Header from "@component/Header";
import { SiteFooter } from "@component/Footer";
import Background from "@component/Background";
import { TailwindIndicator } from "@component/config/TailwindIndicator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@component/ui/Card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@component/ui/Tabs"
import { Toaster } from "@component/ui/Toaster";

export const metadata: Metadata = {
  title: "SpammerJS - The best email spammer",
  description:
    "SpammerJS is the best email spammer. It is free and open source.",
  openGraph: {
    title: "SpammerJS - The best email spammer",
    description:
      "SpammerJS is the best email spammer. It is free and open source.",
    type: "website",
    url: "https://spammerjs.vercel.app",
    images: [
      {
        url: "https://spammerjs.vercel.app/og.png",
        width: 1280,
        height: 1280,
        alt: "SpammerJS - The best email spammer",
      },
    ],
  },
  twitter: {
    site: "@SpammerJS",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        <Tabs defaultValue="email-js" className="sm:w-[700px] container w-fit">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email-js">EmailJS</TabsTrigger>
            <TabsTrigger value="web3-forms">Web3Forms</TabsTrigger>
          </TabsList>
          <TabsContent value="email-js">
            <Card>
              <CardHeader>
                <CardTitle>EmailJS</CardTitle>
                <CardDescription>
                  Search your friend code base for the exposed emailjs keys.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {children}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <Toaster />
        <SiteFooter />
        <Background />
        <TailwindIndicator />
      </body>
    </html>
  );
}
