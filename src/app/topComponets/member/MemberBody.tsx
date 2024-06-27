"use client";
import React from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { members } from "../../constants";
import { mediaQuery, useMediaQuery } from "../../useMediaQuery";
import { useTranslations } from "next-intl";
import MemberCard from "./MemberCard";

const MemberBody = (): React.JSX.Element => {
  const isMd = useMediaQuery(mediaQuery.md);
  const t = useTranslations("member.profile");
  return (
    <Splide
      options={{
        // autoplay: true,
        interval: 4000,
        type: "loop",
        speed: 1200,
        perPage: isMd ? 2 : 3,
        perMove: 1,
        gap: 24,
        pagination: false,
      }}
      aria-label="profile-photo">
      {members.map(({ id, portfolioURL }) => {
        return (
          <MemberCard
            key={id}
            id={id}
            name={
              t.rich(`${id}.name`, {
                br: () => <br />,
              }) as React.ReactElement
            }
            en={t(`${id}.subtitle`)}
            description={
              t.rich(`${id}.description`, {
                br: () => <br />,
              }) as React.ReactElement
            }
            portfolioURL={portfolioURL}
          />
        );
      })}
    </Splide>
  );
};

export default MemberBody;
