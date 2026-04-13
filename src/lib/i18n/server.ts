import { cookies } from "next/headers";
import { translations, type Lang } from "./translations";

export async function getServerLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("psf-lang")?.value;
  return lang === "en" ? "en" : "es";
}

export async function getServerT() {
  const lang = await getServerLang();
  return translations[lang];
}
