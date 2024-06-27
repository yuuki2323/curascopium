"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { SNS, SNSInfo, members } from "../../constants";
import { mediaQuery, useMediaQuery } from "../../useMediaQuery";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";

interface MemberCardProps {
  id: string;
  name: React.ReactElement;
  en: string;
  description: React.ReactElement;
  portfolioURL: string;
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

const MemberCard = ({
  id,
  name,
  en,
  description,
  portfolioURL,
}: MemberCardProps): React.JSX.Element => {
  const locale = useLocale();
  return (
    <SplideSlide>
      <div className="flex flex-col items-center gap-3 h-full bg-blue-950 bg-bg bg-contain p-2 md:p-3 md:pt-0 md:px-10 text-center text-white">
        <Image
          src={`/profile/${id}.png`}
          alt="topimage"
          width={300}
          height={300}
          className="w-screen h-auto rounded-full md:p-4"
        />
        <p className="text-sm md:text-xl">{name}</p>
        <p className="text-[10px] md:text-sm">{en}</p>
        <p className="text-[8px] md:text-[12px]">{description}</p>
        {locale === "ja" ? (
          <></>
        ) : (
          <Link href={portfolioURL} target="_blank" rel="noreferrer">
            <Image
              src={SNSInfo[SNS.linkedin].src}
              width={36}
              height={36}
              alt="sns"
            />
          </Link>
        )}
      </div>
    </SplideSlide>
  );
};

export default MemberBody;
