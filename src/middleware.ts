import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, Locale } from "./navigation";
import {
  TranslationValues,
  Formats,
  RichTranslationValues,
  MarkupTranslationValues,
} from "next-intl";

export default createMiddleware({
  defaultLocale: Locale.en,
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ja)/:path*"],
};
