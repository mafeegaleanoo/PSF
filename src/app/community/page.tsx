"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, MessageCircle, Tag, Globe, User, CheckCircle } from "lucide-react";

const whatIcons = [MessageCircle, Tag, Globe, User];

export default function CommunityPage() {
  const { t } = useLang();
  const c = t.community;

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
              <Button
                href="#que-es"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {c.hero.cta2}
              </Button>
            </div>
          </div>
        </section>

        {/* ── What is it ───────────────────────────────────── */}
        <section id="que-es" className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.what.label} title={c.what.title} description={c.what.desc} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.what.items.map(({ title, desc }, i) => {
                const Icon = whatIcons[i];
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

        {/* ── How it works ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.steps.label} title={c.steps.title} center />
            <div className="mt-12 flex flex-col md:flex-row gap-6">
              {c.steps.items.map(({ step, title, desc }) => (
                <div key={step} className="flex-1 relative">
                  <div className="bg-surface border border-border rounded-2xl p-8 h-full">
                    <p className="font-black text-[2.5rem] text-gradient leading-none mb-4">{step}</p>
                    <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founding members CTA ─────────────────────────── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,158,219,.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
                {c.founding.eyebrow}
              </p>
              <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">
                {c.founding.title}
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">{c.founding.desc}</p>
              <Button href="/auth/signup" variant="primary" size="lg">
                {c.founding.cta} <ArrowRight size={18} />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              {c.founding.perks.map((item: string) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-cyan shrink-0 mt-0.5" />
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
