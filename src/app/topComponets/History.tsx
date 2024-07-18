import React from "react";
import CustomSection from "../ui/CustomSection";
import { useTranslations } from "next-intl";
import { Section } from "../constants";

const History = () => {
  const t = useTranslations("history");
  return (
    <CustomSection
      id={Section.history}
      title={t.rich("title", { br: () => <br /> }) as React.ReactElement}
      body={<HistoryBody t={t} />}
    />
  );
};

const HistoryBody = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <p className="mx-auto text-white text-sm md:text-xl py-4 md:py-8">
      {t.rich("body", { br: () => <br /> })}
    </p>
  );
};

export default History;
