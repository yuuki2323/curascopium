import React from "react";
import CustomSection from "../ui/CustomSection";
import { useTranslations } from "next-intl";

const History = () => {
  const t = useTranslations("history");
  return (
    <CustomSection
      id="history"
      title={t.rich("title", { br: () => <br /> })}
      body={<HistoryBody t={t} />}
    />
  );
};

const HistoryBody = ({ t }: any) => {
  return (
    <p className="mx-auto text-white text-sm md:text-xl py-4 md:py-8">
      {t.rich("body", { br: () => <br /> })}
    </p>
  );
};

export default History;
