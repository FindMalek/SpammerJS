import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-2xl py-20 px-6 sm:px-10 lg:py-20">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/20 hover:ring-gray-900/60">
          It&apos;s free and open source{" "}
          <Link
            target="_blank"
            href="https://github.com/FindMalek/SpammerJS"
            className="font-semibold text-amber-600"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-amber-500 to-amber-300 sm:text-6xl">
          SpammerJS is the best email spammer.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Who doesn&apos;t like spamming their friends? SpammerJS is the best
          email spammer. It is free and open source. Just fill out the form
          and click &quot;Spam&quot;!
        </p>
      </div>
    </header>
  );
}
