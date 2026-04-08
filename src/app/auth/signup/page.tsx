"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

function translateError(message: string): string {
  if (message.includes("User already registered")) return "Ya existe una cuenta con este email.";
  if (message.includes("Password should be at least")) return "La contraseña debe tener al menos 6 caracteres.";
  if (message.includes("Unable to validate email address")) return "El formato del email no es válido.";
  if (message.includes("rate limit")) return "Demasiados intentos. Espera unos minutos.";
  return "Ocurrió un error. Inténtalo de nuevo.";
}

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      setError(translateError(error.message));
      setLoading(false);
      return;
    }

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
        <h2 className="text-xl font-black text-navy mb-2">¡Revisa tu email!</h2>
        <p className="text-slate text-sm">
          Te enviamos un enlace de confirmación a <strong>{email}</strong>. Haz clic en el enlace para
          activar tu cuenta.
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
      <h1 className="text-2xl font-black text-navy mb-1">Crear cuenta</h1>
      <p className="text-slate text-sm mb-6">Únete a miles de profesionales de piscinas</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="full_name" className="block text-sm font-semibold text-navy mb-1.5">
            Nombre completo
          </label>
          <input
            id="full_name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Juan García"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          />
        </div>

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

        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-navy mb-1.5">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Mínimo 6 caracteres"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="confirm" className="block text-sm font-semibold text-navy mb-1.5">
            Confirmar contraseña
          </label>
          <input
            id="confirm"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            placeholder="Repite tu contraseña"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
          {loading ? "Creando cuenta..." : "Crear cuenta"}
        </Button>
      </form>

      <p className="text-center text-sm text-slate mt-6">
        ¿Ya tienes cuenta?{" "}
        <Link href="/auth/login" className="text-brand-blue font-semibold hover:underline">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
