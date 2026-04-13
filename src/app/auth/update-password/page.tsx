"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const { t } = useLang();
  const c = t.auth.updatePassword;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError(c.errors.mismatch); return; }
    if (password.length < 6) { setError(c.errors.tooShort); return; }
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) { setError(c.errors.generic); setLoading(false); return; }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
      <h1 className="text-2xl font-black text-navy mb-1">{c.title}</h1>
      <p className="text-slate text-sm mb-6">{c.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
}
