"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Building2, Landmark, Home, Users, CheckCircle } from "lucide-react";
import { useState } from "react";

const whoIcons = [Building2, Landmark, Home, Users];

export default function ConsultingPage() {
  const { t } = useLang();
  const c = t.consulting;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,158,219,.15)_0%,transparent_60%)] pointer-events-none" />
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
              <Button href="#formulario" variant="primary" size="lg">
                {c.hero.cta1} <ArrowRight size={18} />
              </Button>
              <Button
                href="#servicios"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {c.hero.cta2}
              </Button>
            </div>
          </div>
        </section>

        {/* ── Who it's for ─────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.who.label} title={c.who.title} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.who.items.map(({ title, desc }, i) => {
                const Icon = whoIcons[i];
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

        {/* ── Services ─────────────────────────────────────── */}
        <section id="servicios" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.services.label} title={c.services.title} center />
            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {c.services.items.map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6">
                  <CheckCircle size={20} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy text-base mb-1">{title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Inquiry form ─────────────────────────────────── */}
        <section id="formulario" className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader label={c.form.label} title={c.form.title} center />
            <div className="mt-10 bg-white border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={40} className="text-brand-blue mx-auto mb-4" />
                  <p className="font-bold text-navy text-lg">{c.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{c.form.name}</label>
                      <input required placeholder={c.form.namePh} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-navy placeholder-slate/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{c.form.org}</label>
                      <input required placeholder={c.form.orgPh} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-navy placeholder-slate/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{c.form.email}</label>
                      <input required type="email" placeholder={c.form.emailPh} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-navy placeholder-slate/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{c.form.size}</label>
                      <input required placeholder={c.form.sizePh} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-navy placeholder-slate/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">{c.form.message}</label>
                    <textarea required rows={4} placeholder={c.form.messagePh} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-navy placeholder-slate/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none" />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                    {loading ? "..." : c.form.submit} {!loading && <ArrowRight size={16} />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
