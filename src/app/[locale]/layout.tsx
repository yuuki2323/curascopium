import { Noto_Serif_JP, Marcellus } from "next/font/google";
import "../globals.css";

// フォント
const notoSerifJP = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
});

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marcellus",
});

// メタデータ
export const metadata = {
  title: "Curascopium",
  description:
    "「視覚障がい者へ宇宙の素晴らしさを伝えて、感動を共有する」をモットーに活動している非営利団体です。",
};

export default function LocaleLayout({ children, params: { locale } }: any) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`bg-bg-black bg-bg bg-contain ${marcellus.variable} ${notoSerifJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
