import Link from "next/link";
import Logo from "@/components/ui/Logo";

const links = {
  Programas: [
    { href: "/cpo",      label: "Certificación CPO" },
    { href: "/cpi",      label: "Certificación CPI" },
    { href: "/academia", label: "Academia PSF" },
  ],
  Empresa: [
    { href: "/nosotros",  label: "Nosotros" },
    { href: "/contacto",  label: "Contacto" },
  ],
  Legal: [
    { href: "/privacidad",  label: "Privacidad" },
    { href: "/terminos",    label: "Términos" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="dark" width={220} />
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              La plataforma líder en educación de piscinas en español, diseñada para
              profesionales Latinos.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-brand-blue mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/55 hover:text-brand-cyan transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30 tracking-wide uppercase">
          <p>© {new Date().getFullYear()} Piscinas Sin Fronteras · by The Pool Scientist</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
