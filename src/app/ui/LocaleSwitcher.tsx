"use client";

import { Locale } from "@/navigation";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <label className="text-white">
      <p className="sr-only">Switch Language</p>
      <select
        defaultValue={localeActive}
        onChange={onSelectChange}
        disabled={isPending}
        className="bg-transparent px-2">
        <option value={Locale.ja}>日本語</option>
        <option value={Locale.en}>English</option>
      </select>
    </label>
  );
};

export default LocaleSwitcher;
