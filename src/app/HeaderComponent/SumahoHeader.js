"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";

const SumahoHeader = () => {
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

  const [isOpen, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <header className="md:hidden z-30">
      <h1>
        <Link href="/">
          <Image
            src="/icon.png"
            alt="photo"
            width={48}
            height={48}
            className="absolute top-4 left-8"
          />
        </Link>
      </h1>

      <button onClick={handleMenu} className={`absolute top-4 right-8 `}>
        <IconContext.Provider value={{ color: "white", size: "44px" }}>
          <FaBars />
        </IconContext.Provider>
      </button>
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 opacity-0 transition-all duration-200 ease-linear invisible w-screen h-screen"
            : " fixed top-0 left-0 opacity-100 transition-all duration-200 ease-linear bg-bg-black bg-bg bg-contain w-screen h-screen visible z-50"
        }
      >
        <h1>
          <Link href="/">
            <Image
              src="/icon.png"
              alt="photo"
              width={48}
              height={48}
              className="absolute top-4 left-8"
            />
          </Link>
        </h1>
        <button className={`fixed top-4 right-8 `} onClick={handleMenu}>
          <IconContext.Provider value={{ color: "white", size: "44px" }}>
          <FaXmark />
          </IconContext.Provider>
        </button>
        <div>
        <nav className=" mt-24 flex flex-col items-center justify-center">
          <ul className="mb-8">
          {navi.map((navi)=>{
            return(
              <li key={navi.nav} className="mb-4 text-center">
                <button onClick={handleMenu}>
                  <Link href={navi.href} className="block p-2" >
                    <p className="text-white text-base">{navi.nav}</p>
                  </Link>
                  </button>
                </li>
            );
          })}
          </ul>
          <ul className="flex items-center gap-8">
          {sns.map((sns) => {
            return (
              <li key={sns.href}>
              <Link href={sns.href} target="_blank" rel="noopener noreferrer">
                <Image src={sns.src} width={36} height={36} alt="sns" />
              </Link>
              </li>
            );
          })}
          </ul>
          
        </nav>
        </div>

      </div>
    </header>
  );
};

export default SumahoHeader;
