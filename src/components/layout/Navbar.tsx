"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Logo variant="light" width={180} />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {t.nav.links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors",
                  pathname === href
                    ? "text-brand-blue bg-brand-blue/8"
                    : "text-slate hover:text-navy hover:bg-surface"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right: toggle + auth */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-bold text-slate hover:text-brand-blue border border-border hover:border-brand-blue/40 rounded-lg px-2.5 py-1.5 transition-colors"
            aria-label="Cambiar idioma / Change language"
          >
            <Globe size={13} />
            {lang === "es" ? "EN" : "ES"}
          </button>

          <Button href="/auth/login" variant="ghost" size="sm">
            {t.nav.login}
          </Button>
          <Button href="/auth/signup" variant="primary" size="sm">
            {t.nav.signup}
          </Button>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-bold text-slate hover:text-brand-blue border border-border rounded-lg px-2 py-1.5 transition-colors"
            aria-label="Cambiar idioma"
          >
            <Globe size={13} />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="p-2 text-slate hover:text-brand-blue transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-3">
            {t.nav.links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors",
                    pathname === href
                      ? "text-brand-blue bg-brand-blue/8"
                      : "text-slate hover:text-navy hover:bg-surface"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button href="/auth/login" variant="outline" size="sm" className="w-full">
              {t.nav.login}
            </Button>
            <Button href="/auth/signup" variant="primary" size="sm" className="w-full">
              {t.nav.signup}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
