"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Target, Heart, Lightbulb } from "lucide-react";

const valueIcons = [Target, Heart, Lightbulb];

export default function NosotrosPage() {
  const { t } = useLang();
  const c = t.nosotros;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.14)_0%,transparent_65%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              {c.hero.eyebrow}
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-tight text-white mb-5">
              {c.hero.title}
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
              {c.hero.subtitle}
            </p>
          </div>
        </section>

        {/* ── Story ────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader label={c.story.label} title={c.story.title} />
                <p className="text-slate text-base leading-relaxed mb-4">{c.story.body1}</p>
                <p className="text-slate text-base leading-relaxed mb-4">{c.story.body2}</p>
                <p className="text-slate text-base leading-relaxed mb-6">{c.story.body3}</p>
                <Button href="/cpo" variant="primary" size="md">
                  {c.story.cta} <ArrowRight size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {c.stats.map(({ value, label }) => (
                  <div key={label} className="bg-surface border border-border rounded-2xl p-6 text-center">
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
            <SectionHeader label={c.values.label} title={c.values.title} center />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {c.values.items.map(({ title, desc }, i) => {
                const Icon = valueIcons[i];
                return (
                  <div key={title} className="bg-white border border-border rounded-2xl p-7 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-3">{title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pool Scientist ───────────────────────────────── */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,158,219,.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
                {c.tps.eyebrow}
              </p>
              <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">
                {c.tps.title}
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">{c.tps.desc}</p>
              <Button href="/contacto" variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                {c.tps.cta} <ArrowRight size={16} />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              {c.tps.bullets.map((item) => (
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
