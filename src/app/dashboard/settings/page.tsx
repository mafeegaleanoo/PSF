import { createClient } from "@/lib/supabase/server";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";
import type { Profile } from "@/types";

export default async function SettingsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user!.id)
    .single();

  return (
    <div className="space-y-8 max-w-xl">
      <div>
        <h1 className="text-2xl font-black text-navy">Configuración</h1>
        <p className="text-slate text-sm mt-1">Administra tu perfil y preferencias.</p>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-base font-black text-navy mb-5">Información personal</h2>
        <ProfileForm profile={profile as Profile} />
      </div>

      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-base font-black text-navy mb-5">Cambiar contraseña</h2>
        <PasswordForm />
      </div>
    </div>
  );
}
