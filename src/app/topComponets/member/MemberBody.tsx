"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { members } from "../../constants";
import { mediaQuery, useMediaQuery } from "../../useMediaQuery";
import { useTranslations } from "next-intl";

interface MemberCardProps {
  id: string;
  name: React.ReactElement;
  en: string;
  description: React.ReactElement;
}

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
      {members.map((member) => {
        return (
          <MemberCard
            key={member}
            id={member}
            name={
              t.rich(`${member}.name`, {
                br: () => <br />,
              }) as React.ReactElement
            }
            en={t(`${member}.en`)}
            description={
              t.rich(`${member}.description`, {
                br: () => <br />,
              }) as React.ReactElement
            }
          />
        );
      })}
    </Splide>
  );
};

const MemberCard = ({
  id,
  name,
  en,
  description,
}: MemberCardProps): React.JSX.Element => {
  return (
    <SplideSlide>
      <div className="w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-2 md:p-3 md:pt-0 md:px-10 text-center text-white">
        <Image
          src={`/profile/${id}.png`}
          alt="topimage"
          width={300}
          height={300}
          className="w-screen h-auto rounded-full mb-2 md:p-4"
        />
        <p className="text-sm md:text-xl mb-1">{name}</p>
        <p className="text-[10px] md:text-sm mb-2 md:mb-2">{en}</p>
        <p className="text-[8px] md:text-[12px] h-10 md:h-20">{description}</p>
      </div>
    </SplideSlide>
  );
};

export default MemberBody;
