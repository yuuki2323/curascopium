import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curascopium",
  description: "Curascopium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`bg-bg-black bg-bg bg-contain  ${inter.className}`}>{children}</body>
    </html>
  );
}
