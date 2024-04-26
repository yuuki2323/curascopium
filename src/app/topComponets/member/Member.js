import React from "react";
import pick from "lodash/pick";
import CustomSection from "../../ui/CustomSection";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { MemberBody } from "./MemberBody";

const Member = () => {
  const t = useTranslations("member");
  const msg = useMessages();
  return (
    <CustomSection
      id="member"
      title={t("title")}
      body={
        <NextIntlClientProvider messages={pick(msg, "member")}>
          <MemberBody />
        </NextIntlClientProvider>
      }
    />
  );
};

export default Member;
