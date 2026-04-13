"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";

const contactIcons = [Mail, Phone, Clock, MessageSquare];

export default function ContactoPage() {
  const { t } = useLang();
  const c = t.contacto;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,.14)_0%,transparent_65%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-4">
              {c.hero.eyebrow}
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-tight text-white mb-4">
              <span className="text-gradient">{c.hero.title}</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
              {c.hero.subtitle}
            </p>
          </div>
        </section>

        {/* ── Form + info ──────────────────────────────────── */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white border border-border rounded-2xl p-8">
              <SectionHeader label={c.form.label} title={c.form.title} />
              <form className="flex flex-col gap-5 mt-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider">{c.form.firstName}</label>
                    <input type="text" placeholder={c.form.firstNamePh} className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider">{c.form.lastName}</label>
                    <input type="text" placeholder={c.form.lastNamePh} className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider">{c.form.email}</label>
                  <input type="email" placeholder="tu@email.com" className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider">{c.form.subject}</label>
                  <select className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition bg-white">
                    <option value="">{c.form.subjectPh}</option>
                    {c.form.subjectOptions.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider">{c.form.message}</label>
                  <textarea rows={5} placeholder={c.form.messagePh} className="w-full border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition resize-none" />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {c.form.submit}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <SectionHeader label={c.info.label} title={c.info.title} />
              <div className="grid gap-4">
                {c.info.items.map(({ label, value, sub }, i) => {
                  const Icon = contactIcons[i];
                  return (
                    <div key={label} className="bg-white border border-border rounded-2xl p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate mb-0.5">{label}</p>
                        <p className="text-sm font-bold text-navy">{value}</p>
                        <p className="text-xs text-muted mt-0.5">{sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-navy rounded-2xl p-7">
                <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-brand-cyan mb-3">
                  {c.groups.eyebrow}
                </p>
                <h3 className="font-black text-white text-lg mb-3">{c.groups.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{c.groups.desc}</p>
                <Button href="mailto:grupos@piscinassinfronteras.com" variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  {c.groups.cta}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
