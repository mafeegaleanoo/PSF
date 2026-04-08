import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piscinas Sin Fronteras — Certificación CPO en Español",
  description:
    "La plataforma líder en educación de piscinas en español. Obtén tu certificación CPO, CPI y más, diseñado para profesionales Latinos.",
  keywords: ["CPO", "CPI", "piscinas", "certificación", "español", "latinos"],
  openGraph: {
    title: "Piscinas Sin Fronteras",
    description: "Certificación de piscinas en español para profesionales Latinos.",
    siteName: "Piscinas Sin Fronteras",
    locale: "es_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
          <LanguageProvider>{children}</LanguageProvider>
        </body>
    </html>
  );
}
