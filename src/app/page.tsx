import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Logo from "@/components/ui/Logo";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Globe,
  ShieldCheck,
  Users,
  BookOpen,
} from "lucide-react";

const programs = [
  {
    badge: "CPO",
    title: "Certified Pool & Spa Operator",
    description:
      "La credencial de piscinas más reconocida del mundo, completamente en español. Valida tu experiencia y abre nuevas puertas.",
    features: ["Certificado oficial PHTA", "100% en español", "Examen incluido"],
    href: "/cpo",
    featured: true,
  },
  {
    badge: "CPI",
    title: "Certified Pool Inspector",
    description:
      "Conviértete en inspector certificado de piscinas y spas. Amplía tus servicios con una credencial de alto valor.",
    features: ["Inspecciones profesionales", "Material en español", "Práctica incluida"],
    href: "/cpi",
    featured: false,
  },
  {
    badge: "Academia",
    title: "Academia Piscinas Sin Fronteras",
    description:
      "Cursos propios, educación continua, foros y recursos diseñados exclusivamente para el profesional Latino.",
    features: ["Cursos exclusivos PSF", "Comunidad de profesionales", "Acceso de por vida"],
    href: "/academia",
    featured: false,
  },
];

const whyItems = [
  {
    icon: Globe,
    title: "100% en Español",
    desc: "Todo el contenido, los exámenes y el soporte están en español. Sin barreras de idioma.",
  },
  {
    icon: ShieldCheck,
    title: "Certificaciones Reconocidas",
    desc: "Credenciales oficiales CPO y CPI con validez nacional en Estados Unidos.",
  },
  {
    icon: Users,
    title: "Comunidad Latina",
    desc: "Conecta con miles de profesionales Latinos del sector de piscinas y acuáticas.",
  },
  {
    icon: BookOpen,
    title: "Mobile First",
    desc: "Estudia desde tu teléfono, en tu propio horario, sin importar dónde estés.",
  },
];

const stats = [
  { value: "2,000+", label: "Profesionales certificados" },
  { value: "50+",    label: "Estados en EE.UU." },
  { value: "98%",    label: "Tasa de aprobación" },
  { value: "4.9★",  label: "Calificación promedio" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute -top-[30%] -left-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,158,219,.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(0,195,255,.1)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-5">
                by The Pool Scientist
              </p>
              <h1 className="font-black text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.1] tracking-tight text-white mb-6">
                Certifícate en{" "}
                <span className="text-gradient">Operación de Piscinas</span>
                {" "}— en Español
              </h1>
              <p className="text-base text-white/60 leading-[1.8] max-w-lg mb-8">
                La plataforma líder en educación acuática para profesionales Latinos. CPO, CPI y
                más — sin barreras de idioma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/cpo" variant="primary" size="lg">
                  Empezar ahora <ArrowRight size={18} />
                </Button>
                <Button
                  href="/nosotros"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Conocer más
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <Logo variant="dark" width={380} />
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────── */}
        <section className="bg-white border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-black text-2xl text-gradient">{value}</p>
                <p className="text-xs text-slate mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Programs ─────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="Nuestros Programas"
              title="Elige tu Certificación"
              description="Programas diseñados por y para profesionales Latinos del sector acuático."
              center
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {programs.map((p) => (
                <div
                  key={p.badge}
                  className={`rounded-2xl border p-7 flex flex-col transition-shadow hover:shadow-lg ${
                    p.featured
                      ? "bg-navy border-brand-blue/30 ring-1 ring-brand-blue/20"
                      : "bg-white border-border"
                  }`}
                >
                  {p.featured && (
                    <span className="self-start text-[0.65rem] font-bold tracking-[0.12em] uppercase bg-gradient-brand text-white px-3 py-1 rounded-full mb-4">
                      Más popular
                    </span>
                  )}
                  <p
                    className={`text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-2 ${
                      p.featured ? "text-brand-cyan" : "text-brand-blue"
                    }`}
                  >
                    {p.badge}
                  </p>
                  <h3
                    className={`font-black text-lg leading-snug mb-3 ${
                      p.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1 ${
                      p.featured ? "text-white/55" : "text-slate"
                    }`}
                  >
                    {p.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle
                          size={15}
                          className={p.featured ? "text-brand-cyan" : "text-brand-blue"}
                        />
                        <span className={p.featured ? "text-white/70" : "text-slate"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={p.href}
                    variant={p.featured ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    Ver programa <ArrowRight size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why PSF ──────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="¿Por qué Piscinas Sin Fronteras?"
              title="La diferencia es el idioma"
              description="Miles de profesionales Latinos tienen el talento. Solo necesitan la oportunidad de certificarse en su idioma."
              center
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyItems.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-surface border border-border p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────── */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <GraduationCap size={40} className="text-brand-blue mx-auto mb-5" />
            <h2 className="font-black text-[clamp(1.8rem,4vw,2.8rem)] text-white tracking-tight mb-4">
              Tu certificación está a un paso
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Únete a más de 2,000 profesionales Latinos que ya obtuvieron su credencial CPO o CPI
              con Piscinas Sin Fronteras.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/auth/signup" variant="primary" size="lg">
                Crear cuenta gratis <ArrowRight size={18} />
              </Button>
              <Button
                href="/contacto"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Hablar con nosotros
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
