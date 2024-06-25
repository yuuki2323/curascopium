import React from "react";
import pick from "lodash/pick";
import PcHeader from "../HeaderComponent/PcHeader";
import MobileHeader from "../HeaderComponent/MobileHeader";
import { NextIntlClientProvider, useMessages } from "next-intl";

const Header = () => {
  const messages = useMessages();
  return (
    <>
      <PcHeader />
      <NextIntlClientProvider messages={pick(messages, "header")}>
        <MobileHeader />
      </NextIntlClientProvider>
    </>
  );
};

export default Header;
