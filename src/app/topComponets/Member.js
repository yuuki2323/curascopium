"use client";
import React from "react";
import Title from "../ui/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
const Member = () => {
  return (
    <section className="container p-4 mx-auto">
      <div className="mb-8">
        <Title en="MEMBER" ja="メンバー紹介" center="text-center" />
      </div>

      <Splide
        options={{
          autoplay: true,
          interval: 4000,
          type: "loop",
          speed: 1200,
          perPage: 3,
          perMove: 1,
          gap:24,
          pagination: false,
        }}
        aria-label="profile-photo"
      >
        <SplideSlide>
          <Image
            src="/tanaka.png"
            alt="topimage"
            width={370}
            height={480}
            className=" w-screen h-auto hidden md:block"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/nagasawa.png"
            alt="topimage"
            width={370}
            height={480}
            className=" w-screen h-auto hidden md:block"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/yamamoto.png"
            alt="topimage"
            width={370}
            height={480}
            className=" w-screen h-auto hidden md:block"
          />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Member;
