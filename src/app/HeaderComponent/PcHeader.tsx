import Image from "next/image";
import React from "react";
import { SNSInfo, SectionInfo } from "../constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../ui/LocaleSwitcher";

const PcHeader = () => {
  const t = useTranslations("header");

  return (
    <header
      className="hidden md:flex md:p-4 lg:py-6
    justify-between container mx-auto absolute top-0 right-0 left-0 z-10 ">
      {/* アイコン */}
      <h1>
        <Link href="/">
          <Image src="/logo.png" alt="photo" width={88} height={88} />
        </Link>
      </h1>
      <div className="ml-auto">
        {/* sns */}
        <div className="flex items-center justify-end gap-4">
          {SNSInfo.map((sns) => {
            return (
              <Link
                href={sns.href}
                key={sns.href}
                target="_blank"
                rel="noopener noreferrer">
                <Image src={sns.src} width={36} height={36} alt="sns" />
              </Link>
            );
          })}
          <LocaleSwitcher />
        </div>
        {/* ナビ */}
        <nav className="hidden md:block">
          <ul className=" md:flex md:justify-between md:items-center md:gap-6 md:mt-4">
            {SectionInfo.map((navi) => {
              return (
                <li key={navi.title}>
                  <Link href={navi.href}>
                    <p className="text-white  text-sm lg:text-lg">
                      {t(navi.title)}
                    </p>
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
