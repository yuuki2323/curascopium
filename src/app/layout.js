import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curascopium",
  description: "「視覚障がい者へ宇宙の素晴らしさを伝えて、感動を共有する」をモットーに活動している非営利団体です。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`bg-bg-black bg-bg bg-contain  ${inter.className}`}>{children}</body>
    </html>
  );
}
