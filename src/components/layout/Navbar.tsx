"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/i18n";

type NavChild = { href: string; label: string };
type NavLink = { href?: string; label: string; children?: NavChild[] };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { lang, toggle, t } = useLang();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(label);
  }

  function closeDropdown() {
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 120);
  }

  const links = t.nav.links as NavLink[];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Logo variant="light" width={180} />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors",
                    item.children.some((c) => c.href === pathname)
                      ? "text-brand-blue bg-brand-blue/8"
                      : "text-slate hover:text-navy hover:bg-surface"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={cn("transition-transform", dropdownOpen === item.label && "rotate-180")}
                  />
                </button>

                {dropdownOpen === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-xl shadow-lg py-1.5 z-50"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm font-semibold transition-colors",
                          pathname === child.href
                            ? "text-brand-blue bg-brand-blue/8"
                            : "text-slate hover:text-navy hover:bg-surface"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href!}
                  className={cn(
                    "text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-brand-blue bg-brand-blue/8"
                      : "text-slate hover:text-navy hover:bg-surface"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop right: toggle + auth */}
        <div className="hidden lg:flex items-center gap-2">
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
            {links.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <p className="px-3 pt-2 pb-1 text-[0.65rem] font-bold uppercase tracking-widest text-slate/50">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-2.5 px-5 rounded-lg text-sm font-semibold transition-colors",
                        pathname === child.href
                          ? "text-brand-blue bg-brand-blue/8"
                          : "text-slate hover:text-navy hover:bg-surface"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors",
                      pathname === item.href
                        ? "text-brand-blue bg-brand-blue/8"
                        : "text-slate hover:text-navy hover:bg-surface"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
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
