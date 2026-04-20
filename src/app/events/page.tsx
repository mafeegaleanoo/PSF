"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, MonitorPlay, MessageCircle, MapPin, GraduationCap } from "lucide-react";

const typeIcons = [MonitorPlay, MessageCircle, MapPin, GraduationCap];

export default function EventsPage() {
  const { t } = useLang();
  const c = t.events;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.15)_0%,transparent_65%)] pointer-events-none" />
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
            </div>
          </div>
        </section>

        {/* ── Event types ──────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.types.label} title={c.types.title} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.types.items.map(({ title, desc }, i) => {
                const Icon = typeIcons[i];
                return (
                  <div key={title} className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand mb-4">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Upcoming events ──────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.upcoming.label} title={c.upcoming.title} description={c.upcoming.desc} center />
            <div className="mt-10 text-center">
              <Button href="/auth/signup" variant="primary" size="lg">
                {c.upcoming.cta} <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
