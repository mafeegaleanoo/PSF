"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, BookOpen, MessageSquare, Video, Download, Users, Trophy } from "lucide-react";

const offeringIcons = [Video, BookOpen, MessageSquare, Download, Users, Trophy];

export default function AcademiaPage() {
  const { t } = useLang();
  const c = t.academia;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,158,219,.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              {c.hero.eyebrow}
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3.4rem)] leading-[1.1] tracking-tight text-white mb-5">
              Academia{" "}
              <span className="text-gradient">Piscinas Sin Fronteras</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              {c.hero.subtitle}
            </p>
            <Button href="/auth/signup" variant="primary" size="lg">
              {c.hero.cta} <ArrowRight size={18} />
            </Button>
          </div>
        </section>

        {/* ── Offerings ────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.offerings.label} title={c.offerings.title} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.offerings.items.map(({ title, desc }, i) => {
                const Icon = offeringIcons[i];
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

        {/* ── Pricing ──────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.pricing.label} title={c.pricing.title} description={c.pricing.desc} center />
            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {c.pricing.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-8 flex flex-col ${plan.featured ? "bg-navy border-brand-blue/30 ring-1 ring-brand-blue/20" : "bg-surface border-border"}`}
                >
                  {plan.badge && (
                    <span className="self-start text-[0.65rem] font-bold tracking-[0.12em] uppercase bg-gradient-brand text-white px-3 py-1 rounded-full mb-4">
                      {plan.badge}
                    </span>
                  )}
                  <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${plan.featured ? "text-brand-cyan" : "text-brand-blue"}`}>
                    {plan.name}
                  </p>
                  <p className={`font-black text-4xl mb-0.5 ${plan.featured ? "text-gradient" : "text-navy"}`}>
                    {plan.price}
                    <span className={`text-base font-medium ${plan.featured ? "text-white/40" : "text-slate"}`}>
                      {plan.period}
                    </span>
                  </p>
                  <ul className="flex flex-col gap-2.5 my-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${plan.featured ? "bg-brand-blue/30 text-brand-cyan" : "bg-brand-blue/10 text-brand-blue"}`}>
                          ✓
                        </span>
                        <span className={plan.featured ? "text-white/70" : "text-slate"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/auth/signup" variant={plan.featured ? "primary" : "outline"} size="md" className="w-full">
                    {plan.cta} <ArrowRight size={16} />
                  </Button>
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
