import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "hola@piscinassinfronteras.com",
    sub: "Respondemos en menos de 24 horas",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+1 (555) 000-0000",
    sub: "Lunes a viernes, 9am – 6pm EST",
  },
  {
    icon: Clock,
    label: "Horario de soporte",
    value: "Lunes – Viernes",
    sub: "9:00 AM – 6:00 PM EST",
  },
  {
    icon: MessageSquare,
    label: "Chat en vivo",
    value: "Disponible en plataforma",
    sub: "Para estudiantes inscritos",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.14)_0%,transparent_65%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              Estamos aquí para ayudarte
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-tight text-white mb-4">
              <span className="text-gradient">Contáctanos</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
              ¿Tienes preguntas sobre nuestros programas? ¿Necesitas ayuda con tu inscripción?
              Nuestro equipo habla español y está listo para ayudarte.
            </p>
          </div>
        </section>

        {/* ── Contact form + info ──────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white border border-border rounded-2xl p-8">
              <SectionHeader label="Escríbenos" title="Envíanos un mensaje" />
              <form className="flex flex-col gap-5 mt-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider">
                      Apellido
                    </label>
                    <input
                      type="text"
                      placeholder="Tu apellido"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider">
                    Asunto
                  </label>
                  <select className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition bg-white">
                    <option value="">Selecciona un tema...</option>
                    <option value="cpo">Información sobre CPO</option>
                    <option value="cpi">Información sobre CPI</option>
                    <option value="academia">Academia PSF</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="facturacion">Facturación / Pagos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <SectionHeader label="Información de contacto" title="¿Cómo podemos ayudarte?" />

              <div className="grid gap-4">
                {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                  <div
                    key={label}
                    className="bg-white border border-border rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-bold text-navy">{value}</p>
                      <p className="text-xs text-muted mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy rounded-2xl p-7">
                <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-brand-cyan mb-3">
                  Grupos y empresas
                </p>
                <h3 className="font-black text-white text-lg mb-3">
                  ¿Tienes un equipo que certificar?
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  Ofrecemos precios especiales para grupos de 5 o más personas. Contacta a nuestro
                  equipo de ventas para obtener una cotización personalizada.
                </p>
                <Button
                  href="mailto:grupos@piscinassinfronteras.com"
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Solicitar cotización grupal
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
