import Link from "next/link";

export default function Footer() {
  const menuLinks = [
    {
      title: "FAQs",
      href: "/about/faqs",
    },
    {
      title: "Acknowledgements",
      href: "/about/acknowledgements",
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="https://spammer-js.vercel.app/"
            className="inline-flex gap-1.5 text-lg font-medium text-gray-900"
          >
            SpammerJS
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            SpammerJS is the best email spammer. It is free and open source.
          </p>
          <ul className="flex gap-4 pt-2    ">
            {menuLinks.map((menuLink) => (
              <li key={menuLink.href}>
                <Link
                  href={menuLink.href}
                  className="block text-sm font-medium text-gray-900 hover:opacity-75"
                >
                  {menuLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right part */}
        <div>
          <p className="mt-4 text-sm text-gray-600">
            Created by{" "}
            <Link
              href="https://github.com/findmalek"
              rel="noreferrer"
              target="_blank"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              FindMalek
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
