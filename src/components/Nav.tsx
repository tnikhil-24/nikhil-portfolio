"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/how-i-build", label: "how_i_build" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bg-border)] bg-[var(--bg)]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-lg font-bold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
        >
          NT_
        </Link>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    "font-mono text-sm transition-colors",
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-dim)] transition-colors duration-200 hover:text-[var(--accent)]"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
