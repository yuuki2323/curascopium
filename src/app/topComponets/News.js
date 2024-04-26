import React from "react";
import { getList } from "../../../libs/client";
import { format } from "date-fns";
import CustomSection from "../ui/CustomSection";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

const News = () => {
  const t = useTranslations("news");
  return <CustomSection id="news" title={t("title")} body={<NewsBody />} />;
};

const NewsBody = async () => {
  const { contents } = await getList({ limit: 5 });
  const t = await getTranslations("news");
  return (
    <div className="text-xs md:text-xl">
      {contents.map((post) => (
        <dl
          className="text-white border-b border-white flex gap-2 md:gap-8 py-2 mb-2 tabular-nums"
          key={post.id}>
          <dt>{format(new Date(post.createdAt), "yyyy/MM/dd")}</dt>
          <Link href={`/news/${post.id}`}>
            <dd>{post.title}</dd>
          </Link>
        </dl>
      ))}

      <Link href="/news" className="block text-white ">
        <p className=" text-right">{t("more")}</p>
      </Link>
    </div>
  );
};

export default News;
