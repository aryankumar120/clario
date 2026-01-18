"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClarioLogo } from "./minimal-logo";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/query", label: "Query" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b" style={{ borderColor: 'var(--shy-blunt)' }}>
      <div className="container-shell flex items-center justify-between py-4 gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg transition" style={{ color: 'var(--reversed-grey)' }}>
          <ClarioLogo />
          <span>Clario</span>
        </Link>
        <nav className="flex items-center gap-10 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href as any}
                className="transition-colors"
                style={{
                  color: isActive ? 'var(--reversed-grey)' : 'var(--smoked-pearl)',
                  borderBottom: isActive ? '2px solid var(--jet-black)' : 'none',
                  paddingBottom: isActive ? '2px' : '0'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/dashboard"
          aria-label="Account"
          className="ml-6 p-2 rounded-full transition-colors"
          style={{ color: 'var(--jet-black)' }}
        >
          <UserCircleIcon className="h-8 w-8" />
        </Link>
      </div>
    </header>
  );
}
