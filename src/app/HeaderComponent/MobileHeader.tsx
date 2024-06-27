"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { SNSInfo, SectionInfo } from "../constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../ui/LocaleSwitcher";

const MobileHeader = () => {
  const t = useTranslations("header");

  // メニューの開閉を定義してます
  const [isOpen, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    // ヘッダー

    <header className="md:hidden z-30">
      {/* アイコン */}
      <h1>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="photo"
            width={48}
            height={48}
            className="absolute top-4 left-8"
          />
        </Link>
      </h1>
      {/* メニューボタン */}
      <button onClick={handleMenu} className={`absolute top-4 right-8 `}>
        <IconContext.Provider value={{ color: "white", size: "44px" }}>
          <FaBars />
        </IconContext.Provider>
      </button>
      {/* 開いた時の画面 */}
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 opacity-0 transition-all duration-200 ease-linear invisible w-screen h-screen"
            : " fixed top-0 left-0 opacity-100 transition-all duration-200 ease-linear bg-bg-black bg-bg bg-contain w-screen h-screen visible z-50"
        }>
        {/* アイコン */}
        <h1>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="photo"
              width={48}
              height={48}
              className="absolute top-4 left-8"
            />
          </Link>
        </h1>
        {/* 閉じるボタン */}
        <button className={`fixed top-4 right-8 `} onClick={handleMenu}>
          <IconContext.Provider value={{ color: "white", size: "44px" }}>
            message
            <FaXmark />
          </IconContext.Provider>
        </button>
        {/* 内容 */}
        <div>
          {/* Navigation */}
          <nav className=" mt-24 flex flex-col items-center justify-center">
            <ul className="mb-8">
              {SectionInfo.map((navi) => {
                return (
                  <li key={navi.title} className="mb-4 text-center">
                    <button onClick={handleMenu}>
                      <Link href={navi.href} className="block p-2">
                        <p className="text-white text-base">{t(navi.title)}</p>
                      </Link>
                    </button>
                  </li>
                );
              })}
            </ul>
            {/* SNS */}
            <ul className="flex items-center gap-8">
              {SNSInfo.map((sns) => {
                return (
                  <li key={sns.title}>
                    <Link
                      href={sns.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image src={sns.src} width={36} height={36} alt="sns" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-8">
              <LocaleSwitcher />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
