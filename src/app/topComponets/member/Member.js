import React from "react";
import CustomSection from "../../ui/CustomSection";
import { useTranslations } from "next-intl";
import { MemberBody } from "./MemberBody";

const Member = () => {
  const t = useTranslations("member");
  return <CustomSection id="member" title={t("title")} body={<MemberBody />} />;
};

export default Member;
