import { de } from "./de";
import { en } from "./en";

export const languages = { de, en };
export type Lang = keyof typeof languages;

export function getLang(url: URL): Lang {
  const path = url.pathname;
  if (path.startsWith("/en")) return "en";
  return "de";
}

export function t(lang: Lang) {
  return languages[lang];
}
