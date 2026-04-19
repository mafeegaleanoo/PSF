"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLang } from "@/lib/i18n";

export default function PrivacidadPage() {
  const { t } = useLang();
  const c = t.privacy;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="bg-navy py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-cyan mb-3">
              {c.eyebrow}
            </p>
            <h1 className="font-black text-[clamp(2rem,5vw,3rem)] leading-tight text-white mb-3">
              {c.title}
            </h1>
            <p className="text-white/40 text-sm">{c.effective}</p>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────── */}
        <section className="py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-slate text-base leading-relaxed mb-10 p-6 bg-white border border-border rounded-2xl">
              {c.intro}
            </p>

            <div className="flex flex-col gap-6">
              {c.sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-white border border-border rounded-2xl p-6"
                >
                  <h2 className="font-bold text-navy text-base mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm text-slate leading-relaxed">
                    {section.content}
                  </p>
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
