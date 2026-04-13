"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";

export default function SignupPage() {
  const { t } = useLang();
  const c = t.auth.signup;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function translateError(message: string): string {
    if (message.includes("User already registered")) return c.errors.alreadyRegistered;
    if (message.includes("Password should be at least")) return c.errors.passwordTooShort;
    if (message.includes("Unable to validate email address")) return c.errors.invalidEmail;
    if (message.includes("rate limit")) return c.errors.rateLimit;
    return c.errors.generic;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError(c.errors.passwordMismatch); return; }
    if (password.length < 6) { setError(c.errors.passwordTooShort); return; }
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } });
    if (error) { setError(translateError(error.message)); setLoading(false); return; }
    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-border shadow-sm p-8 text-center">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-black text-navy mb-2">{c.successTitle}</h2>
        <p className="text-slate text-sm">
          {c.successDesc} <strong>{email}</strong>. {c.successDesc2}
        </p>
        <Link href="/auth/login" className="inline-block mt-6 text-sm text-brand-blue font-semibold hover:underline">
          {c.backToLogin}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
      <h1 className="text-2xl font-black text-navy mb-1">{c.title}</h1>
      <p className="text-slate text-sm mb-6">{c.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="full_name" className="block text-sm font-semibold text-navy mb-1.5">{c.fullName}</label>
          <input id="full_name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder={c.fullNamePh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">{c.email}</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder={c.emailPh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-navy mb-1.5">{c.password}</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder={c.passwordPh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
        </div>
        <div>
          <label htmlFor="confirm" className="block text-sm font-semibold text-navy mb-1.5">{c.confirm}</label>
          <input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required placeholder={c.confirmPh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
        </div>

        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">{error}</p>}

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
          {loading ? c.submitting : c.submit}
        </Button>
      </form>

      <p className="text-center text-sm text-slate mt-6">
        {c.hasAccount}{" "}
        <Link href="/auth/login" className="text-brand-blue font-semibold hover:underline">{c.loginLink}</Link>
      </p>
    </div>
  );
}
