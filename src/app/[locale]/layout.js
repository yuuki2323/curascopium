import { Noto_Serif_JP } from "next/font/google";
import "../globals.css";

// フォント
const notoSerifJP = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
});

// メタデータ
export const metadata = {
  title: "Curascopium",
  description:
    "「視覚障がい者へ宇宙の素晴らしさを伝えて、感動を共有する」をモットーに活動している非営利団体です。",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`bg-bg-black bg-bg bg-contain ${notoSerifJP.className}`}>
        {children}
      </body>
    </html>
  );
}
