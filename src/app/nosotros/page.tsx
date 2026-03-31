import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    desc: "Convertirnos en la plataforma líder de educación de piscinas en español, eliminando la barrera del idioma que ha mantenido a miles de profesionales Latinos de alcanzar su pleno potencial.",
  },
  {
    icon: Heart,
    title: "Visión",
    desc: "Un sector acuático donde el idioma nunca sea un obstáculo para el reconocimiento profesional. Donde cada técnico Latino tenga las mismas oportunidades que sus colegas angloparlantes.",
  },
  {
    icon: Lightbulb,
    title: "Propósito",
    desc: "Diseñar la mejor experiencia de aprendizaje para el profesional Latino: práctica, accesible, en su idioma, y reconocida en todo Estados Unidos.",
  },
];

const team = [
  {
    name: "Equipo PSF",
    role: "Instructores certificados CPO & CPI",
    bio: "Nuestros instructores son profesionales certificados con décadas de experiencia en la industria acuática en Estados Unidos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.14)_0%,transparent_65%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              Nuestra historia
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-tight text-white mb-5">
              Somos <span className="text-gradient">Piscinas Sin Fronteras</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
              Nacimos de la necesidad real de miles de profesionales Latinos que tienen el talento y la
              experiencia, pero no el idioma para obtener sus certificaciones oficiales.
            </p>
          </div>
        </section>

        {/* ── Story ────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  label="El problema que resolvemos"
                  title="El idioma no debería ser una barrera"
                />
                <p className="text-slate text-base leading-relaxed mb-4">
                  En Estados Unidos, millones de Latinos trabajan cada día manteniendo piscinas
                  residenciales, hoteles, y centros recreativos. Muchos llevan años de experiencia,
                  pero nunca han podido certificarse porque los cursos están en inglés.
                </p>
                <p className="text-slate text-base leading-relaxed mb-6">
                  Piscinas Sin Fronteras, bajo el paraguas de <strong className="text-navy">The Pool Scientist</strong>,
                  llegó a cambiar eso. Tradujimos, adaptamos y perfeccionamos el curriculum CPO y CPI
                  para que cualquier profesional Latino pueda obtener su credencial oficial.
                </p>
                <Button href="/cpo" variant="primary" size="md">
                  Ver programas <ArrowRight size={16} />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2018", label: "Año de fundación" },
                  { value: "2,000+", label: "Certificados" },
                  { value: "50+", label: "Estados" },
                  { value: "98%", label: "Aprobación" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-surface border border-border rounded-2xl p-6 text-center"
                  >
                    <p className="font-black text-2xl text-gradient">{value}</p>
                    <p className="text-xs text-slate mt-1 tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="Lo que nos mueve"
              title="Misión, visión y propósito"
              center
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-3">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pool Scientist ───────────────────────────────── */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,158,219,.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
                Nuestra marca padre
              </p>
              <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">
                by The Pool Scientist
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">
                Piscinas Sin Fronteras es una marca bajo The Pool Scientist (TPS), la empresa líder
                en capacitación y consultoría para la industria acuática en EE.UU.
              </p>
              <Button
                href="/contacto"
                variant="outline"
                size="md"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Contáctanos <ArrowRight size={16} />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Contenido desarrollado por instructores certificados PHTA",
                "Más de 15 años de experiencia en educación acuática",
                "Presencia en más de 50 estados de EE.UU.",
                "Soporte en español 7 días a la semana",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-white font-bold">✓</span>
                  </div>
                  <p className="text-white/65 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
