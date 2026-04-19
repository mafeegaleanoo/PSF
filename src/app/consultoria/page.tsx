"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Building2, HardHat, Waves, Lightbulb, Scale } from "lucide-react";

const icons = [Waves, HardHat, Building2, Lightbulb, Scale];

export default function ConsultoriaPage() {
  const { t } = useLang();
  const c = t.consultoria;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,158,219,.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
                {c.hero.eyebrow}
              </p>
              <h1 className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-white mb-5 transition-all duration-300">
                {c.hero.title}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {c.hero.subtitle}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button href="/contacto" variant="primary" size="lg">
                  {c.hero.cta} <ArrowRight size={18} />
                </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-blue/20 p-4 rounded-2xl border border-brand-blue/30 aspect-square flex flex-col items-center justify-center text-center">
                    <Waves className="text-brand-cyan mb-2" size={32} />
                    <span className="text-white text-xs font-bold font-montserrat tracking-tighter uppercase leading-none mt-2">Expertise</span>
                  </div>
                  <div className="bg-brand-cyan/20 p-4 rounded-2xl border border-brand-cyan/30 aspect-square flex flex-col items-center justify-center text-center translate-y-4">
                    <Building2 className="text-white mb-2" size={32} />
                    <span className="text-white text-xs font-bold font-montserrat tracking-tighter uppercase leading-none mt-2">Design</span>
                  </div>
                  <div className="bg-brand-blue/20 p-4 rounded-2xl border border-brand-blue/30 aspect-square flex flex-col items-center justify-center text-center -translate-y-4">
                    <HardHat className="text-brand-cyan mb-2" size={32} />
                    <span className="text-white text-xs font-bold font-montserrat tracking-tighter uppercase leading-none mt-2">Ops</span>
                  </div>
                  <div className="bg-brand-cyan/20 p-4 rounded-2xl border border-brand-cyan/30 aspect-square flex flex-col items-center justify-center text-center">
                    <Scale className="text-white mb-2" size={32} />
                    <span className="text-white text-xs font-bold font-montserrat tracking-tighter uppercase leading-none mt-2">Legal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ────────────────────────────────────── */}
        <section className="py-24 bg-surface relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <SectionHeader
              label={c.servicesLabel}
              title={c.servicesTitle}
              description={c.servicesDesc}
            />
            
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.services.map((service: any, i: number) => {
                const Icon = icons[i % icons.length];
                return (
                  <div 
                    key={service.title} 
                    className="group bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand p-[1px] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center text-brand-blue">
                        <Icon size={28} />
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>
                    <a 
                      href={service.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-brand-blue uppercase tracking-widest group-hover:gap-2 transition-all duration-300"
                    >
                      {c.servicesLink} <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Partner Section ──────────────────────────────── */}
        <section className="py-20 bg-navy border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-brand-cyan text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-8 opacity-60">{c.partnerLabel}</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Logos representados por texto elegante por ahora, dado que son marcas externas */}
               <span className="text-white font-montserrat font-black text-xl tracking-tighter">NAC4H2O</span>
               <span className="text-white font-montserrat font-black text-xl tracking-tighter uppercase">Counsilman-Hunsaker</span>
               <span className="text-white font-montserrat font-black text-xl tracking-tighter uppercase">Barr + Wray</span>
               <span className="text-white font-montserrat font-black text-xl tracking-tighter uppercase text-xs">Aquatic Consultants of America</span>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-brand">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-black text-[clamp(2rem,5vw,2.8rem)] text-white tracking-tight leading-tight mb-6">
              {c.cta.title}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              {c.cta.subtitle}
            </p>
            <Button href="/contacto" variant="secondary" size="lg" className="bg-white text-brand-blue hover:bg-white/90 px-10">
              {c.cta.cta} <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
