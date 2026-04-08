"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/update-password`,
    });

    if (error) {
      setError("Ocurrió un error. Verifica el email e inténtalo de nuevo.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-border shadow-sm p-8 text-center">
        <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-black text-navy mb-2">Revisa tu email</h2>
        <p className="text-slate text-sm">
          Si existe una cuenta con <strong>{email}</strong>, recibirás un enlace para restablecer tu
          contraseña.
        </p>
        <Link
          href="/auth/login"
          className="inline-block mt-6 text-sm text-brand-blue font-semibold hover:underline"
        >
          Volver al inicio de sesión
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
      <h1 className="text-2xl font-black text-navy mb-1">Restablecer contraseña</h1>
      <p className="text-slate text-sm mb-6">
        Ingresa tu email y te enviaremos un enlace para crear una nueva contraseña.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar enlace"}
        </Button>
      </form>

      <p className="text-center text-sm text-slate mt-6">
        <Link href="/auth/login" className="text-brand-blue font-semibold hover:underline">
          Volver al inicio de sesión
        </Link>
      </p>
    </div>
  );
}
