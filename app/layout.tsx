import "@style/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Header from "@component/Header";
import Background from "@component/Background";
import Footer from "@component/Footer";

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
        {children}
        <Footer />
        <Background />
      </body>
    </html>
  );
}
