import * as React from "react";

import { cn } from "@lib/utils";
import { siteConfig } from "@config/site";
import { Button } from "@component/ui/Button";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex justify-center items-center gap-4 py-14 md:h-24 md:flex-row">
        <div />
        <div className="flex flex-col items-center gap-4 px-8">
          <Button size={"icon"} variant={"secondary"}>
            🔺
          </Button>
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.website}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              findmalek
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
