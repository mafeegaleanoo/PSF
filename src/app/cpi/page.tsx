"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import Image from "next/image";
import cpiImg1 from "../../../public/images/cpi/IMG_2698.jpg";
import cpiImg2 from "../../../public/images/cpi/pexels-rdne-8293680.jpg";
import cpiImg3 from "../../../public/images/cpi/vitaly-gariev-vBg0dxwfIYM-unsplash.jpg";
import { CheckCircle, Clock, Award, Users, ArrowRight, BookOpen, Search } from "lucide-react";

export default function CpiPage() {
  const { t } = useLang();
  const c = t.cpi;

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
                {c.hero.eyebrow}
              </p>
              <h1 className="font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-tight text-white mb-5">
                Certified Pool{" "}
                <span className="text-gradient">Inspector (CPI®)</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">{c.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/auth/signup" variant="primary" size="lg">
                  {c.hero.cta1} <ArrowRight size={18} />
                </Button>
                <Button href="/contacto" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  {c.hero.cta2}
                </Button>
              </div>
            </div>

            <div className="bg-white/8 border border-white/12 rounded-2xl p-7">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Clock,    label: c.card.duration, value: c.card.durationVal },
                  { icon: Award,    label: c.card.validity,  value: c.card.validityVal },
                  { icon: Users,    label: c.card.mode,      value: c.card.modeVal },
                  { icon: BookOpen, label: c.card.language,  value: c.card.languageVal },
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
                <p className="text-[0.65rem] text-white/40 uppercase tracking-wider mb-1">{c.card.priceLabel}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-black text-gradient">$199</p>
                  <span className="text-xs text-white/40 uppercase font-bold tracking-tighter">USD</span>
                </div>
                <p className="text-[0.6rem] text-white/30 line-through mt-1">{c.pricing.standard}</p>
                <p className="text-xs text-brand-cyan mt-1 font-medium italic">{c.pricing.note}</p>
                <p className="text-[0.6rem] text-white/40 mt-3 flex items-center gap-1.5">
                  <CheckCircle size={10} className="text-brand-cyan" /> {c.card.priceNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Modules ──────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.modules.label} title={c.modules.title} description={c.modules.desc} />
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {c.modules.items.map((mod, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4">
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
            <SectionHeader label={c.career.label} title={c.career.title} center />
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {c.career.items.map(({ title, desc }) => (
                <div key={title} className="rounded-2xl bg-surface border border-border p-6">
                  <div className="w-2 h-8 rounded-full bg-gradient-brand mb-4" />
                  <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ─────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.gallery.label} title={c.gallery.title} description={c.gallery.desc} />
            <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
              {/* Large left */}
              <div className="row-span-2 relative rounded-2xl overflow-hidden">
                <Image src={cpiImg1} alt="CPI inspector photo 1" fill unoptimized className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Top right */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image src={cpiImg2} alt="CPI inspector photo 2" fill unoptimized className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Bottom right */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image src={cpiImg3} alt="CPI inspector photo 3" fill unoptimized className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-16 bg-gradient-brand">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white tracking-tight mb-4">{c.cta.title}</h2>
            <p className="text-white/75 text-base mb-8">{c.cta.subtitle}</p>
            <Button href="/auth/signup" variant="secondary" size="lg" className="bg-white text-brand-blue hover:bg-white/90">
              {c.cta.cta} <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
