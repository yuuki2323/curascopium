import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Topphoto = () => {
  const t = useTranslations("top");
  return (
    <section className=" relative -z-50">
      {/* スマホ用 */}
      <Image
        src="/top/mobile.jpg"
        alt="topimage"
        width={780}
        height={1280}
        className=" object-cover md:hidden block w-screen h-screen"
      />
      <p className=" text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-5/6 md:hidden text-3xl">
        {t.rich("Mobile", { br: () => <br /> })}
      </p>
      {/* PC用 */}
      <Image
        src="/top/pc.jpg"
        alt="topimage"
        width={1920}
        height={1280}
        className=" aspect-video  hidden mx-auto  md:block h-screen"
      />
      <p className=" text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max hidden md:block text-3xl lg:text-5xl">
        {t.rich("PC", { br: () => <br /> })}
      </p>
    </section>
  );
};

export default Topphoto;
