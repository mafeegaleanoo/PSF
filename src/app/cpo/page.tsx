import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle, Clock, Award, Users, ArrowRight, BookOpen } from "lucide-react";

const modules = [
  "Química del agua y química de piscinas",
  "Sistemas de filtración y circulación",
  "Desinfección: cloro, bromo y alternativas",
  "Seguridad acuática y prevención de accidentes",
  "Mantenimiento de equipos y resolución de problemas",
  "Regulaciones y cumplimiento legal",
  "Operación de spas y jacuzzis",
  "Preparación para el examen CPO oficial",
];

const faqs = [
  {
    q: "¿Cuánto tiempo toma completar el curso?",
    a: "El programa CPO se puede completar en 2 días de instrucción en vivo o a tu propio ritmo en línea en aproximadamente 16 horas.",
  },
  {
    q: "¿La certificación CPO es reconocida en todos los estados?",
    a: "Sí. La certificación CPO (PHTA) es reconocida en todos los estados de EE.UU. y en más de 60 países.",
  },
  {
    q: "¿Cuánto tiempo es válida la certificación?",
    a: "La certificación CPO es válida por 5 años. Ofrecemos cursos de renovación en español.",
  },
  {
    q: "¿Qué pasa si no paso el examen la primera vez?",
    a: "Puedes retomar el examen sin costo adicional dentro de los primeros 90 días.",
  },
];

export default function CpoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,158,219,.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
                Certificación
              </p>
              <h1 className="font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-tight text-white mb-5">
                Certified Pool & Spa{" "}
                <span className="text-gradient">Operator (CPO®)</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                La credencial más reconocida del mundo para operadores de piscinas y spas.
                Completamente en español para profesionales Latinos.
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
                  { icon: Clock, label: "Duración", value: "16 horas" },
                  { icon: Award, label: "Validez", value: "5 años" },
                  { icon: Users, label: "Modalidad", value: "Online / Presencial" },
                  { icon: BookOpen, label: "Idioma", value: "Español" },
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
                <p className="text-3xl font-black text-gradient">$299 USD</p>
                <p className="text-xs text-white/40 mt-1">Examen incluido · Materiales incluidos</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Modules ──────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="Contenido del curso"
              title="Lo que aprenderás"
              description="Curriculum oficial CPO de PHTA, adaptado y traducido al español por expertos certificados."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-border rounded-xl p-4"
                >
                  <CheckCircle size={17} className="text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-navy font-medium">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label="Preguntas frecuentes"
              title="Todo lo que necesitas saber"
              center
            />
            <div className="mt-10 flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-surface border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-navy text-sm mb-2">{q}</h3>
                  <p className="text-sm text-slate leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-16 bg-gradient-brand">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">
              ¿Listo para obtener tu CPO?
            </h2>
            <p className="text-white/75 text-base mb-8">
              Inscríbete hoy y obtén acceso inmediato al material del curso.
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
