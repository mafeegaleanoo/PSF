"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (password !== confirm) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }
    if (password.length < 6) {
      setMessage({ type: "error", text: "La contraseña debe tener al menos 6 caracteres." });
      return;
    }

    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage({ type: "error", text: "No se pudo cambiar la contraseña. Inténtalo de nuevo." });
    } else {
      setMessage({ type: "success", text: "Contraseña actualizada correctamente." });
      setPassword("");
      setConfirm("");
    }

    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Nueva contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Mínimo 6 caracteres"
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Confirmar contraseña</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          placeholder="Repite tu nueva contraseña"
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
        />
      </div>

      {message && (
        <p
          className={`text-sm px-4 py-3 rounded-xl ${
            message.type === "success"
              ? "bg-green-50 text-green-600 border border-green-100"
              : "bg-red-50 text-red-600 border border-red-100"
          }`}
        >
          {message.text}
        </p>
      )}

      <Button type="submit" variant="primary" size="md" disabled={saving}>
        {saving ? "Guardando..." : "Cambiar contraseña"}
      </Button>
    </form>
  );
}
