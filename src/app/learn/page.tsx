"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Droplets, Wrench, Briefcase, Shield, ClipboardList, Award } from "lucide-react";

const categoryIcons = [Droplets, Wrench, Briefcase, Shield, ClipboardList, Award];

export default function LearnPage() {
  const { t } = useLang();
  const c = t.learn;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,158,219,.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              {c.hero.eyebrow}
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3.4rem)] leading-[1.1] tracking-tight text-white mb-5">
              {c.hero.title}
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/auth/signup" variant="primary" size="lg">
                {c.hero.cta1} <ArrowRight size={18} />
              </Button>
              <Button
                href="#categorias"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {c.hero.cta2}
              </Button>
            </div>
          </div>
        </section>

        {/* ── Categories ───────────────────────────────────── */}
        <section id="categorias" className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.categories.label} title={c.categories.title} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.categories.items.map(({ title, desc }, i) => {
                const Icon = categoryIcons[i];
                return (
                  <div key={title} className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Coming soon ──────────────────────────────────── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              {c.coming.eyebrow}
            </p>
            <h2 className="font-black text-[clamp(1.8rem,4vw,2.8rem)] text-white tracking-tight mb-4">
              {c.coming.title}
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              {c.coming.desc}
            </p>
            <Button href="/auth/signup" variant="primary" size="lg">
              {c.coming.cta} <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
