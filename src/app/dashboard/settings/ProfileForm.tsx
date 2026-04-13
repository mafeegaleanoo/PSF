"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import type { Profile } from "@/types";

export default function ProfileForm({ profile }: { profile: Profile }) {
  const router = useRouter();
  const { t } = useLang();
  const c = t.dashboard.profile;

  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    const supabase = createClient();
    const { error } = await supabase.from("profiles").update({ full_name: fullName, phone: phone || null, updated_at: new Date().toISOString() }).eq("id", profile.id);
    setMessage(error ? { type: "error", text: c.error } : { type: "success", text: c.success });
    if (!error) router.refresh();
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{c.fullName}</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={c.fullNamePh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{c.email}</label>
        <input type="email" value={profile?.email ?? ""} disabled className="w-full px-4 py-3 rounded-xl border border-border text-sm text-muted bg-surface cursor-not-allowed" />
        <p className="text-xs text-muted mt-1">{c.emailNote}</p>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">{c.phone}</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={c.phonePh} className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" />
      </div>
      {message && (
        <p className={`text-sm px-4 py-3 rounded-xl ${message.type === "success" ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"}`}>
          {message.text}
        </p>
      )}
      <Button type="submit" variant="primary" size="md" disabled={saving}>
        {saving ? c.saving : c.save}
      </Button>
    </form>
  );
}
