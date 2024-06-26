import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Locale, locales } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const _locale: Locale = Locale[locale as keyof typeof Locale];
  if (!locales.includes(_locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
