"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/",         label: "Inicio" },
  { href: "/cpo",      label: "CPO" },
  { href: "/cpi",      label: "CPI" },
  { href: "/academia", label: "Academia" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Logo variant="light" width={220} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors",
                  pathname === href
                    ? "text-brand-blue"
                    : "text-slate hover:text-brand-blue"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="/auth/login" variant="ghost" size="sm">
            Iniciar Sesión
          </Button>
          <Button href="/auth/signup" variant="primary" size="sm">
            Inscríbete
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate hover:text-brand-blue transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors",
                    pathname === href
                      ? "text-brand-blue bg-brand-blue/8"
                      : "text-slate hover:text-brand-blue hover:bg-surface"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button href="/auth/login" variant="outline" size="sm" className="w-full">
              Iniciar Sesión
            </Button>
            <Button href="/auth/signup" variant="primary" size="sm" className="w-full">
              Inscríbete Ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
