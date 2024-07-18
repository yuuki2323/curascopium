"use client";

import { Link, Locale, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import React from "react";

const LocaleSwitcher = () => {
  const activeLocale = useLocale() as Locale;
  const curPath = usePathname();

  return (
    <div className="text-white text-xl md:ml-5 bg-slate-600 hover:bg-opacity-100 bg-opacity-75 rounded-lg h-12 w-24">
      <Link
        href={curPath}
        locale={Locale.ja}
        className={
          activeLocale === Locale.ja
            ? "hidden"
            : "flex items-center justify-center h-full w-full"
        }>
        <p>日本語</p>
      </Link>
      <Link
        href={curPath}
        locale={Locale.en}
        className={
          activeLocale === Locale.en
            ? "hidden"
            : "flex items-center justify-center h-full w-full"
        }>
        <p>English</p>
      </Link>
    </div>
  );
};

export default LocaleSwitcher;
