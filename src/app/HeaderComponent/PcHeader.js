import Image from "next/image";
import Link from "next/link";
import React from "react";

const PcHeader = () => {
  const sns = [
    { href: "/", src: "/x.png" },
    { href: "/", src: "/Instagram.png" },
    { href: "/", src: "/in.png" },
  ];

  const navi = [
    { href: "/", nav: "お知らせ" },
    { href: "/", nav: "チームの歴史" },
    { href: "/", nav: "活動目的" },
    { href: "/", nav: "メンバー紹介" },
    { href: "/", nav: "事業内容" },
    { href: "/", nav: "お問い合わせ" },
  ];
  return (
    <header className="hidden md:flex md:p-4 
    justify-between container mx-auto absolute top-0 right-0 left-0 z-10">
      <h1>
        <Link href="/">
          <Image src="/icon.png" alt="photo" width={84} height={84} />
        </Link>
      </h1>
      <div className="ml-auto">
        <div className="flex items-center justify-end gap-4">
          {sns.map((sns) => {
            return (
              <Link href={sns.href} key={sns.href}>
                <Image src={sns.src} width={32} height={32} />
              </Link>
            );
          })}
        </div>
        <nav className="hidden md:block">
          <ul className=" md:flex md:justify-between md:items-center md:gap-4 md:mt-4">
            {navi.map((navi) => {
              return (
                <li key={navi.nav}>
                  <Link href={navi.href}>
                    <p className="text-white">{navi.nav}</p>
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
