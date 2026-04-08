"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils/cn";
import { LayoutDashboard, BookOpen, Settings, LogOut, Menu, X } from "lucide-react";

interface Props {
  fullName: string | null;
  email: string;
}

const navItems = [
  { href: "/dashboard",          label: "Dashboard",       icon: LayoutDashboard },
  { href: "/dashboard/courses",  label: "Mis Cursos",      icon: BookOpen },
  { href: "/dashboard/settings", label: "Configuración",   icon: Settings },
];

export default function DashboardSidebar({ fullName, email }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  async function handleSignOut() {
    setSigningOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const initials = fullName
    ? fullName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : email[0].toUpperCase();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-border">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Logo variant="light" width={160} />
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                active
                  ? "bg-brand-blue/10 text-brand-blue"
                  : "text-slate hover:bg-surface hover:text-navy"
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User + sign out */}
      <div className="px-3 py-4 border-t border-border space-y-1">
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy truncate">{fullName ?? "Estudiante"}</p>
            <p className="text-xs text-muted truncate">{email}</p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-slate hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          <LogOut size={18} />
          {signingOut ? "Saliendo..." : "Cerrar sesión"}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 bg-white border-r border-border fixed top-0 left-0 h-screen z-40">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-border flex items-center justify-between px-4 z-40">
        <Link href="/">
          <Logo variant="light" width={140} />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-slate hover:text-brand-blue transition-colors"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-navy/40 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="md:hidden fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-xl">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
