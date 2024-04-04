import Image from "next/image";
import Link from "next/link";
import React from "react";

const PcHeader = () => {
  const sns = [
    { href: "https://x.com/curascopium?s=11&t=bab-OhquEEWjR_k74r_d3w", src: "/x.png" },
    { href: "https://www.instagram.com/curascopium?igsh=MzRlODBiNWFlZA==", src: "/Instagram.png" },
    { href: "https://www.linkedin.com/company/curascopium138/", src: "/inw.png" },
  ];

  const navi = [
    { href: "/news", nav: "お知らせ" },
    { href: "/#history", nav: "チームの歴史" },
    { href: "/#purpose", nav: "活動目的" },
    { href: "/#member", nav: "メンバー紹介" },
    { href: "/#business", nav: "事業内容" },
    { href: "/#contact", nav: "お問い合わせ" },
  ];
  return (
    <header className="hidden md:flex md:p-4 lg:py-6 
    justify-between container mx-auto absolute top-0 right-0 left-0 z-10 ">
      <h1>
        <Link href="/">
          <Image src="/icon.png" alt="photo" width={88} height={88} />
        </Link>
      </h1>
      <div className="ml-auto">
        <div className="flex items-center justify-end gap-4">
          {sns.map((sns) => {
            return (
              <Link href={sns.href} key={sns.href} target="_blank" rel="noopener noreferrer">
                <Image src={sns.src} width={36} height={36} alt="sns" />
              </Link>
            );
          })}
        </div>
        <nav className="hidden md:block">
          <ul className=" md:flex md:justify-between md:items-center md:gap-6 md:mt-4">
            {navi.map((navi) => {
              return (
                <li key={navi.nav}>
                  <Link href={navi.href}>
                    <p className="text-white  text-sm lg:text-lg">{navi.nav}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PcHeader;
