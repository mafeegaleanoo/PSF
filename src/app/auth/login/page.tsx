"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

function translateError(message: string): string {
  if (message.includes("Invalid login credentials")) return "Email o contraseña incorrectos.";
  if (message.includes("Email not confirmed")) return "Confirma tu email antes de iniciar sesión.";
  if (message.includes("rate limit")) return "Demasiados intentos. Espera unos minutos.";
  return "Ocurrió un error. Inténtalo de nuevo.";
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(translateError(error.message));
      setLoading(false);
      return;
    }

    router.push(next);
    router.refresh();
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
      <h1 className="text-2xl font-black text-navy mb-1">Iniciar Sesión</h1>
      <p className="text-slate text-sm mb-6">Bienvenido de vuelta a Piscinas Sin Fronteras</p>

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

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="block text-sm font-semibold text-navy">
              Contraseña
            </label>
            <Link href="/auth/reset-password" className="text-xs text-brand-blue hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Iniciar Sesión"}
        </Button>
      </form>

      <p className="text-center text-sm text-slate mt-6">
        ¿No tienes cuenta?{" "}
        <Link href="/auth/signup" className="text-brand-blue font-semibold hover:underline">
          Regístrate gratis
        </Link>
      </p>
    </div>
  );
}
