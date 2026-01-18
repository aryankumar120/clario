import Link from "next/link";

export function MinimalFooter() {
  const links = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "API", href: "http://localhost:8000/api/docs" },
      { label: "Pricing", href: "#" },
    ],
    Resources: [
      { label: "Docs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Status", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  };

  return (
    <footer className="py-16" style={{ backgroundColor: 'var(--reversed-grey)', borderTop: '1px solid var(--jet-black)' }}>
      <div className="container-shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'white' }}>Clario</h3>
            <p className="text-sm" style={{ color: 'var(--grey-timber)' }}>
              Operational Intelligence
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4" style={{ color: 'white' }}>{category}</h4>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href as any}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--grey-timber)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid var(--jet-black)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'var(--grey-timber)' }}>
              © 2026 Clario. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: 'var(--grey-timber)' }}>
              Built by <span style={{ color: 'white' }}>Aryan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
