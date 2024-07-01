import { Noto_Serif_JP, Playfair_Display } from "next/font/google";
import "../globals.css";
import { Locale } from "@/navigation";

// フォント
const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

// メタデータ
export const metadata = {
  title: "Curascopium",
  description:
    "「視覚障がい者へ宇宙の素晴らしさを伝えて、感動を共有する」をモットーに活動している非営利団体です。",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`bg-bg-black bg-bg bg-contain ${playfairDisplay.variable} ${notoSerifJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
