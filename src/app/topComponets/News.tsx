import React from "react";
import { getList } from "../../../libs/client";
import { format } from "date-fns";
import CustomSection from "../ui/CustomSection";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Section } from "../constants";
import { tProps } from "@/middleware";

const News = () => {
  const t = useTranslations("news");
  return (
    <CustomSection
      id={Section.news}
      title={t.rich("title", { br: () => <br /> }) as React.ReactElement}
      body={<NewsBody t={t} />}
    />
  );
};

const NewsBody = async ({ t }: tProps) => {
  const { contents } = await getList({ limit: 5 });
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
