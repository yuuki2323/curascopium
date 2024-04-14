"use client";
import React from "react";
import Title from "../ui/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
const Member = () => {
  return (
    <section className="container p-4 mx-auto" id="member">
      <div className="mb-8">
        <Title en="MEMBER" ja="メンバー紹介" center="text-center" />
      </div>

      <div className="hidden md:block">
        <Splide
          options={{
            autoplay: true,
            interval: 4000,
            type: "loop",
            speed: 1200,
            perPage: 3,
            perMove: 1,
            gap: 24,
            pagination: false,
          }}
          aria-label="profile-photo">
          <SplideSlide>
            <div className="w-[370] h-[480]  bg-blue-950 bg-bg bg-contain p-8 text-center text-white">
              <Image
                src="/tanaka1.png"
                alt="topimage"
                width={300}
                height={300}
                className="w-screen h-auto hidden md:block rounded-full mb-2 p-4"
              />
              <p className="text-2xl mb-4">田中 優作</p>
              <p className="text-base h-16">
                カリフォルニア大学バークレー校学部4年生。宇宙物理学専攻、障害者学副専攻。
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[370] h-[480]  bg-blue-950 bg-bg bg-contain p-8 text-center text-white">
              <Image
                src="/yamamoto1.png"
                alt="topimage"
                width={300}
                height={300}
                className="w-screen h-auto hidden md:block rounded-full mb-2 p-4"
              />
              <p className="text-2xl mb-4 ">山本 暖</p>
              <p className="text-base h-16">
                カリフォルニア大学バークレー校卒。生物学専攻、データサイエンス副専攻
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" bg-blue-950 bg-bg bg-contain p-8 text-center text-white">
              <Image
                src="/nagasawa1.png"
                alt="topimage"
                width={300}
                height={300}
                className="w-screen h-auto hidden md:block rounded-full mb-2 p-4"
              />
              <p className="text-2xl mb-4">長澤 赳志</p>
              <p className="text-base h-16">
                カリフォルニア大学バークレー校卒。宇宙物理学専攻。
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="md:hidden block">
        <Splide
          options={{
            autoplay: true,
            interval: 4000,
            type: "loop",
            speed: 1200,
            perPage: 2,
            perMove: 1,
            gap: 24,
            pagination: false,
          }}
          aria-label="profile-photo">
          <SplideSlide>
            <div className="w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 text-center text-white">
              <Image
                src="/tanaka1.png"
                alt="topimage"
                width={160}
                height={160}
                className=" w-screen h-auto md:hidden block rounded-full mb-2"
              />
              <p className="text-sm mb-2 ">田中 優作</p>
              <p className="text-[8px] h-10">
                カリフォルニア大学バークレー校学部4年生。宇宙物理学専攻、障害者学副専攻。
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 text-center text-white">
              <Image
                src="/yamamoto1.png"
                alt="topimage"
                width={160}
                height={160}
                className=" w-screen h-auto md:hidden block rounded-full mb-2"
              />
              <p className="text-sm mb-2 ">山本 暖</p>
              <p className="text-[8px] h-10">
                カリフォルニア大学バークレー校卒。生物学専攻、データサイエンス副専攻
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 text-center text-white">
              <Image
                src="/nagasawa1.png"
                alt="topimage"
                width={160}
                height={160}
                className=" w-screen h-auto md:hidden block rounded-full mb-2"
              />
              <p className="text-sm mb-2 ">長澤 赳志</p>
              <p className="text-[8px] h-10">
                カリフォルニア大学バークレー校卒。宇宙物理学専攻。
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Member;
