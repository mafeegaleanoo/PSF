"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Logo from "@/components/ui/Logo";
import { GraduationCap, ArrowRight, CheckCircle, Globe, ShieldCheck, Users, BookOpen } from "lucide-react";
import { useLang } from "@/lib/i18n";

const whyIcons = [Globe, ShieldCheck, Users, BookOpen];

export default function HomePage() {
  const { t } = useLang();
  const { hero, stats, programs, why, cta } = t.home;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute -top-[30%] -left-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,158,219,.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(0,195,255,.1)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-5">
                {hero.eyebrow}
              </p>
              <h1 className="font-black text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.1] tracking-tight text-white mb-6">
                {hero.titlePre}{" "}
                <span className="text-gradient">{hero.highlight}</span>
                {" "}{hero.titlePost}
              </h1>
              <p className="text-base text-white/60 leading-[1.8] max-w-lg mb-8">
                {hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/cpo" variant="primary" size="lg">
                  {hero.cta1} <ArrowRight size={18} />
                </Button>
                <Button
                  href="/nosotros"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  {hero.cta2}
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <Logo variant="dark" width={380} />
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────── */}
        <section className="bg-white border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-black text-2xl text-gradient">{value}</p>
                <p className="text-xs text-slate mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Programs ─────────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label={programs.label}
              title={programs.title}
              description={programs.desc}
              center
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {programs.items.map((p) => (
                <div
                  key={p.badge}
                  className={`rounded-2xl border p-7 flex flex-col transition-shadow hover:shadow-lg ${
                    p.featured
                      ? "bg-navy border-brand-blue/30 ring-1 ring-brand-blue/20"
                      : "bg-white border-border"
                  }`}
                >
                  {p.featured && (
                    <span className="self-start text-[0.65rem] font-bold tracking-[0.12em] uppercase bg-gradient-brand text-white px-3 py-1 rounded-full mb-4">
                      {programs.featuredBadge}
                    </span>
                  )}
                  <p
                    className={`text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-2 ${
                      p.featured ? "text-brand-cyan" : "text-brand-blue"
                    }`}
                  >
                    {p.badge}
                  </p>
                  <h3
                    className={`font-black text-lg leading-snug mb-3 ${
                      p.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1 ${
                      p.featured ? "text-white/55" : "text-slate"
                    }`}
                  >
                    {p.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle
                          size={15}
                          className={p.featured ? "text-brand-cyan" : "text-brand-blue"}
                        />
                        <span className={p.featured ? "text-white/70" : "text-slate"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={p.href}
                    variant={p.featured ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    {programs.cta} <ArrowRight size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why PSF ──────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader
              label={why.label}
              title={why.title}
              description={why.desc}
              center
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {why.items.map(({ title, desc }, i) => {
                const Icon = whyIcons[i];
                return (
                  <div
                    key={title}
                    className="rounded-2xl bg-surface border border-border p-6 text-center hover:shadow-md transition-shadow"
                  >
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

        {/* ── CTA Banner ───────────────────────────────────── */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <GraduationCap size={40} className="text-brand-blue mx-auto mb-5" />
            <h2 className="font-black text-[clamp(1.8rem,4vw,2.8rem)] text-white tracking-tight mb-4">
              {cta.title}
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              {cta.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/auth/signup" variant="primary" size="lg">
                {cta.cta1} <ArrowRight size={18} />
              </Button>
              <Button
                href="/contacto"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {cta.cta2}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
