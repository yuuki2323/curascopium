import Image from "next/image";
import React from "react";
import CustomSection from "../ui/CustomSection";
import { useTranslations } from "next-intl";

const Purpose = () => {
  const t = useTranslations("purpose");
  return (
    <CustomSection
      id="purpose"
      title={t.rich("title", { br: () => <br /> })}
      body={<PurposeBody t={t} />}
    />
  );
};

const PurposeBody = ({ t }: any) => {
  return (
    <>
      <Image src="/galaxy.jpg" alt="photo" width={1800} height={600} />
      <p className=" text-white text-sm md:text-xl py-4 md:py-8 text-center">
        {t.rich("body", { br: () => <br /> })}
      </p>
    </>
  );
};

export default Purpose;
