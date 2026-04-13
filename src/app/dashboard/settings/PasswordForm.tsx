"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";

export default function PasswordForm() {
  const { t } = useLang();
  const c = t.dashboard.password;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (password !== confirm) { setMessage({ type: "error", text: c.errors.mismatch }); return; }
    if (password.length < 6) { setMessage({ type: "error", text: c.errors.tooShort }); return; }
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setMessage(error ? { type: "error", text: c.errors.generic } : { type: "success", text: c.success });
    if (!error) { setPassword(""); setConfirm(""); }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{c.newPassword}</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder={c.newPasswordPh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{c.confirm}</label>
        <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required placeholder={c.confirmPh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
      </div>
      {message && (
        <p className={`text-sm px-4 py-3 rounded-xl ${message.type === "success" ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"}`}>
          {message.text}
        </p>
      )}
      <Button type="submit" variant="primary" size="md" disabled={saving}>
        {saving ? c.submitting : c.submit}
      </Button>
    </form>
  );
}
