import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, Locale } from "./navigation";
import { TranslationValues, Formats, RichTranslationValues, MarkupTranslationValues } from "next-intl";

export default createMiddleware({
  defaultLocale: Locale.en,
  localePrefix,
  locales,
});

export interface tProps {
  t: {
    <TargetKey>(
      key: TargetKey,
      values?: TranslationValues,
      formats?: Partial<Formats>
    ): string;
    rich<TargetKey>(
      key: TargetKey,
      values?: RichTranslationValues,
      formats?: Partial<Formats>
    ): string | React.ReactElement | React.ReactNodeArray;
    markup<TargetKey>(
      key: TargetKey,
      values?: MarkupTranslationValues,
      formats?: Partial<Formats>
    ): string;
    raw<TargetKey>(key: TargetKey): string;
  };
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ja)/:path*"],
};
