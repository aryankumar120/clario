import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
    ],
    Developers: [
      { label: "API Docs", href: "http://localhost:8000/api/docs" },
      { label: "SDK", href: "#" },
      { label: "Status", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-white/10 py-16 bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
      <div className="container-shell">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href as any}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="text-slate-600 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-secondary text-sm">
              © {currentYear} Clario. All rights reserved.
            </p>
            <p className="text-secondary text-xs mt-1">
              Built by <span className="text-accent font-semibold">Aryan</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-white/10 text-slate-600 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <GlobeAltIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-lg border border-white/10 text-slate-600 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <GlobeAltIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-white/10 text-slate-600 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <GlobeAltIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
