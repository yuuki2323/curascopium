import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { SplideSlide } from "@splidejs/react-splide";
import { useLocale } from "next-intl";
import { SNS, SNSInfo } from "@/app/constants";

interface MemberCardProps {
  id: string;
  name: React.ReactElement;
  en: string;
  description: React.ReactElement;
  portfolioURL: string;
}

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
          portfolioURL && (
            <Link href={portfolioURL} target="_blank" rel="noreferrer">
              <Image
                src={SNSInfo[SNS.linkedin].src}
                width={36}
                height={36}
                alt="sns"
              />
            </Link>
          )
        )}
      </div>
    </SplideSlide>
  );
};

export default MemberCard;
