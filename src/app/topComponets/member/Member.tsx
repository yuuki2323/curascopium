import React from "react";
import pick from "lodash/pick";
import CustomSection from "../../ui/CustomSection";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import MemberBody from "./MemberBody";
import { Section } from "@/app/constants";

const Member = () => {
  const t = useTranslations("member");
  const msg = useMessages();
  return (
    <CustomSection
      id={Section.member}
      title={t.rich("title", { br: () => <br /> }) as React.ReactElement}
      body={
        <NextIntlClientProvider messages={pick(msg, "member")}>
          <MemberBody />
        </NextIntlClientProvider>
      }
    />
  );
};

export default Member;
