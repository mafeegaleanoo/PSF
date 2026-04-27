"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import {
  ArrowRight, CheckCircle, Users, Globe, Shield, TrendingUp,
  Clock, Target,
} from "lucide-react";

const missionIcons = [Users, Globe, Shield, Globe, Clock, TrendingUp];

export default function NosotrosPage() {
  const { t } = useLang();
  const n = t.nosotros;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.15)_0%,transparent_65%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              {n.hero.eyebrow}
            </p>
            <h1 className="font-black text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] tracking-tight text-white mb-5">
              {n.hero.title}
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
              {n.hero.subtitle}
            </p>
          </div>
        </section>

        {/* ── Who We Are ───────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader label={n.who.label} title={n.who.title} />
            <div className="mt-8 space-y-4 text-slate leading-relaxed">
              <p>{n.who.body1}</p>
              <p>{n.who.body2}</p>
            </div>
            <div className="mt-8 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/5 border-l-4 border-brand-blue rounded-r-xl p-6">
              <p className="font-bold text-navy mb-2">{n.who.gap.label}:</p>
              <p className="text-slate text-sm leading-relaxed">{n.who.gap.desc}</p>
            </div>
          </div>
        </section>

        {/* ── Mission & Values ─────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={n.mission.label} title={n.mission.title} center />
            <p className="text-center text-brand-blue font-semibold italic text-base leading-relaxed max-w-2xl mx-auto mt-4 mb-3">
              {n.mission.quote}
            </p>
            <p className="text-center text-slate text-sm leading-relaxed max-w-2xl mx-auto mb-12">
              {n.mission.desc}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {n.mission.values.map(({ title, desc }: { title: string; desc: string }, i: number) => {
                const Icon = missionIcons[i] ?? Target;
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

        {/* ── How It Works ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <SectionHeader label={n.howItWorks.label} title={n.howItWorks.title} center />
            <p className="text-center text-slate text-sm mb-10">{n.howItWorks.desc}</p>
            <div className="flex flex-col md:flex-row gap-6">
              {n.howItWorks.parts.map(({ step, title, desc }: { step: string; title: string; desc: string }) => (
                <div key={step} className="flex-1 bg-surface border border-border rounded-2xl p-8">
                  <p className="font-black text-[2.5rem] text-gradient leading-none mb-4">{step}</p>
                  <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why PSF ──────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader label={n.why.label} title={n.why.title} center />
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {n.why.boxes.map(({ title, bullets }: { title: string; bullets: string[] }) => (
                <div key={title} className="bg-white border-2 border-brand-blue rounded-2xl p-6">
                  <h3 className="font-bold text-navy text-base mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {bullets.map((b: string) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-brand-blue shrink-0 mt-0.5" />
                        <span className="text-sm text-slate leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom Line ──────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeader label={n.bottomLine.label} title={n.bottomLine.title} />
            <div className="mt-6 space-y-3 text-slate leading-relaxed">
              <p>{n.bottomLine.body}</p>
              <p className="font-semibold text-navy">{n.bottomLine.body2}</p>
            </div>
            <div className="mt-8 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/5 border-l-4 border-brand-blue rounded-r-xl p-6 space-y-3">
              <p>
                <strong className="text-navy">{n.bottomLine.quote1es}</strong>
                <br />
                <em className="text-slate text-sm">{n.bottomLine.quote1en}</em>
              </p>
              <p>
                <strong className="text-navy">{n.bottomLine.quote2es}</strong>
                <br />
                <em className="text-slate text-sm">{n.bottomLine.quote2en}</em>
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">
              {n.cta.title}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">{n.cta.desc}</p>
            <Button href="/auth/signup" variant="primary" size="lg">
              {n.cta.btn} <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
