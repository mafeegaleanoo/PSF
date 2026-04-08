"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "es" | "en";

// ── Translations ──────────────────────────────────────────────────────────────

export const translations = {
  es: {
    nav: {
      links: [
        { href: "/cpo",      label: "CPO" },
        { href: "/cpi",      label: "CPI" },
        { href: "/academia", label: "Academia" },
        { href: "/nosotros", label: "Nosotros" },
        { href: "/contacto", label: "Contacto" },
      ],
      login:  "Iniciar Sesión",
      signup: "Inscríbete",
    },
    footer: {
      tagline: "La plataforma líder en educación de piscinas en español, diseñada para profesionales Latinos.",
      columns: {
        Programas: [
          { href: "/cpo",      label: "Certificación CPO" },
          { href: "/cpi",      label: "Certificación CPI" },
          { href: "/academia", label: "Academia PSF" },
        ],
        Empresa: [
          { href: "/nosotros", label: "Nosotros" },
          { href: "/contacto", label: "Contacto" },
        ],
        Legal: [
          { href: "/privacidad", label: "Privacidad" },
          { href: "/terminos",   label: "Términos" },
        ],
      },
      rights: "Todos los derechos reservados",
    },
    home: {
      hero: {
        eyebrow:   "by The Pool Scientist",
        titlePre:  "Certifícate en",
        highlight: "Operación de Piscinas",
        titlePost: "— en Español",
        subtitle:  "La plataforma líder en educación acuática para profesionales Latinos. CPO, CPI y más — sin barreras de idioma.",
        cta1: "Empezar ahora",
        cta2: "Conocer más",
      },
      stats: [
        { value: "2,000+", label: "Profesionales certificados" },
        { value: "50+",    label: "Estados en EE.UU." },
        { value: "98%",    label: "Tasa de aprobación" },
        { value: "4.9★",  label: "Calificación promedio" },
      ],
      programs: {
        label: "Nuestros Programas",
        title: "Elige tu Certificación",
        desc:  "Programas diseñados por y para profesionales Latinos del sector acuático.",
        featuredBadge: "Más popular",
        cta: "Ver programa",
        items: [
          {
            badge: "CPO",
            title: "Certified Pool & Spa Operator",
            description: "La credencial de piscinas más reconocida del mundo, completamente en español. Valida tu experiencia y abre nuevas puertas.",
            features: ["Certificado oficial PHTA", "100% en español", "Examen incluido"],
            href: "/cpo",
            featured: true,
          },
          {
            badge: "CPI",
            title: "Certified Pool Inspector",
            description: "Conviértete en inspector certificado de piscinas y spas. Amplía tus servicios con una credencial de alto valor.",
            features: ["Inspecciones profesionales", "Material en español", "Práctica incluida"],
            href: "/cpi",
            featured: false,
          },
          {
            badge: "Academia",
            title: "Academia Piscinas Sin Fronteras",
            description: "Cursos propios, educación continua, foros y recursos diseñados exclusivamente para el profesional Latino.",
            features: ["Cursos exclusivos PSF", "Comunidad de profesionales", "Acceso de por vida"],
            href: "/academia",
            featured: false,
          },
        ],
      },
      why: {
        label: "¿Por qué Piscinas Sin Fronteras?",
        title: "La diferencia es el idioma",
        desc:  "Miles de profesionales Latinos tienen el talento. Solo necesitan la oportunidad de certificarse en su idioma.",
        items: [
          { title: "100% en Español",           desc: "Todo el contenido, los exámenes y el soporte están en español. Sin barreras de idioma." },
          { title: "Certificaciones Reconocidas",desc: "Credenciales oficiales CPO y CPI con validez nacional en Estados Unidos." },
          { title: "Comunidad Latina",           desc: "Conecta con miles de profesionales Latinos del sector de piscinas y acuáticas." },
          { title: "Mobile First",               desc: "Estudia desde tu teléfono, en tu propio horario, sin importar dónde estés." },
        ],
      },
      cta: {
        title:    "Tu certificación está a un paso",
        subtitle: "Únete a más de 2,000 profesionales Latinos que ya obtuvieron su credencial CPO o CPI con Piscinas Sin Fronteras.",
        cta1: "Crear cuenta gratis",
        cta2: "Hablar con nosotros",
      },
    },
  },

  en: {
    nav: {
      links: [
        { href: "/cpo",      label: "CPO" },
        { href: "/cpi",      label: "CPI" },
        { href: "/academia", label: "Academy" },
        { href: "/nosotros", label: "About Us" },
        { href: "/contacto", label: "Contact" },
      ],
      login:  "Sign In",
      signup: "Enroll Now",
    },
    footer: {
      tagline: "The leading pool education platform in Spanish, designed for Latino professionals.",
      columns: {
        Programs: [
          { href: "/cpo",      label: "CPO Certification" },
          { href: "/cpi",      label: "CPI Certification" },
          { href: "/academia", label: "PSF Academy" },
        ],
        Company: [
          { href: "/nosotros", label: "About Us" },
          { href: "/contacto", label: "Contact" },
        ],
        Legal: [
          { href: "/privacidad", label: "Privacy" },
          { href: "/terminos",   label: "Terms" },
        ],
      },
      rights: "All rights reserved",
    },
    home: {
      hero: {
        eyebrow:   "by The Pool Scientist",
        titlePre:  "Get Certified in",
        highlight: "Pool Operations",
        titlePost: "— in Spanish",
        subtitle:  "The leading aquatic education platform for Latino professionals. CPO, CPI and more — no language barriers.",
        cta1: "Get started",
        cta2: "Learn more",
      },
      stats: [
        { value: "2,000+", label: "Certified professionals" },
        { value: "50+",    label: "U.S. States" },
        { value: "98%",    label: "Pass rate" },
        { value: "4.9★",  label: "Average rating" },
      ],
      programs: {
        label: "Our Programs",
        title: "Choose Your Certification",
        desc:  "Programs designed by and for Latino professionals in the aquatic industry.",
        featuredBadge: "Most popular",
        cta: "View program",
        items: [
          {
            badge: "CPO",
            title: "Certified Pool & Spa Operator",
            description: "The world's most recognized pool credential, fully in Spanish. Validate your expertise and open new doors.",
            features: ["Official PHTA certificate", "100% in Spanish", "Exam included"],
            href: "/cpo",
            featured: true,
          },
          {
            badge: "CPI",
            title: "Certified Pool Inspector",
            description: "Become a certified pool and spa inspector. Expand your services with a high-value credential.",
            features: ["Professional inspections", "Material in Spanish", "Hands-on practice"],
            href: "/cpi",
            featured: false,
          },
          {
            badge: "Academy",
            title: "Piscinas Sin Fronteras Academy",
            description: "Original courses, continuing education, forums and resources designed exclusively for the Latino professional.",
            features: ["Exclusive PSF courses", "Professional community", "Lifetime access"],
            href: "/academia",
            featured: false,
          },
        ],
      },
      why: {
        label: "Why Piscinas Sin Fronteras?",
        title: "The difference is the language",
        desc:  "Thousands of Latino professionals have the talent. They just need the opportunity to get certified in their language.",
        items: [
          { title: "100% in Spanish",           desc: "All content, exams and support are in Spanish. No language barriers." },
          { title: "Recognized Certifications",  desc: "Official CPO and CPI credentials valid nationwide in the United States." },
          { title: "Latino Community",           desc: "Connect with thousands of Latino professionals in the pool and aquatic industry." },
          { title: "Mobile First",               desc: "Study from your phone, on your own schedule, no matter where you are." },
        ],
      },
      cta: {
        title:    "Your certification is one step away",
        subtitle: "Join more than 2,000 Latino professionals who already earned their CPO or CPI credential with Piscinas Sin Fronteras.",
        cta1: "Create free account",
        cta2: "Talk to us",
      },
    },
  },
} as const;

// ── Context ───────────────────────────────────────────────────────────────────

type Translations = typeof translations[Lang];

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "es",
  toggle: () => {},
  t: translations.es as Translations,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("psf-lang") as Lang | null;
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  function toggle() {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("psf-lang", next);
  }

  return (
    <LangContext.Provider value={{ lang, toggle, t: translations[lang] as Translations }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
