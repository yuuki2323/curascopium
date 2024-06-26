import { createSharedPathnamesNavigation } from "next-intl/navigation";

export enum Locale {
  en = "en",
  ja = "ja",
}

export const locales = Object.values(Locale);
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
