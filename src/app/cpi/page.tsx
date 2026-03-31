import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle, Clock, Award, Users, ArrowRight, BookOpen, Search } from "lucide-react";

const modules = [
  "Fundamentos de inspección de piscinas y spas",
  "Evaluación de sistemas de circulación y filtración",
  "Inspección de sistemas de desinfección",
  "Seguridad: barandas, cubiertas y drenajes",
  "Inspección eléctrica básica en áreas acuáticas",
  "Documentación y redacción de reportes",
  "Regulaciones estatales y locales",
  "Preparación para el examen CPI oficial",
];

export default function CpiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,195,255,.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
                Certificación
              </p>
              <h1 className="font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-tight text-white mb-5">
                Certified Pool{" "}
                <span className="text-gradient">Inspector (CPI®)</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                Amplía tus servicios como inspector certificado de piscinas y spas. Una credencial
                de alto valor para profesionales independientes y empresas.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/auth/signup" variant="primary" size="lg">
                  Inscribirme ahora <ArrowRight size={18} />
                </Button>
                <Button
                  href="/contacto"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Más información
                </Button>
              </div>
            </div>

            {/* Info card */}
            <div className="bg-white/8 border border-white/12 rounded-2xl p-7">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Clock,    label: "Duración",   value: "12 horas" },
                  { icon: Award,    label: "Validez",    value: "3 años" },
                  { icon: Users,    label: "Modalidad",  value: "Online / Presencial" },
                  { icon: BookOpen, label: "Idioma",     value: "Español" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] text-white/40 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-bold text-white mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-[0.65rem] text-white/40 uppercase tracking-wider mb-1">Precio</p>
                <p className="text-3xl font-black text-gradient">$199 USD</p>
                <p className="text-xs text-white/40 mt-1">Examen incluido · Materiales incluidos</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What you'll learn ────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="Contenido del curso"
              title="Lo que aprenderás"
              description="Curriculum oficial CPI de PHTA, completamente en español."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-border rounded-xl p-4"
                >
                  <Search size={17} className="text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-navy font-medium">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Career value ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="Valor de carrera"
              title="¿Por qué convertirte en CPI?"
              center
            />
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { title: "Nuevos ingresos", desc: "Ofrece inspecciones de piscinas como servicio premium a hoteles, condominios y propiedades residenciales." },
                { title: "Diferenciación", desc: "Destácate de la competencia con una credencial oficial que demuestra tu nivel de conocimiento y profesionalismo." },
                { title: "Cumplimiento legal", desc: "Muchos estados requieren inspecciones por inspectores certificados. Conviértete en el experto de tu área." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-2xl bg-surface border border-border p-6">
                  <div className="w-2 h-8 rounded-full bg-gradient-brand mb-4" />
                  <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-16 bg-gradient-brand">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">
              Conviértete en Inspector Certificado
            </h2>
            <p className="text-white/75 text-base mb-8">
              Accede al material del curso de inmediato después de inscribirte.
            </p>
            <Button
              href="/auth/signup"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90"
            >
              Comenzar ahora <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
