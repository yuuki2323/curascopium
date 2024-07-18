import React from "react";
import { getList } from "../../libs/client";
import { format } from "date-fns";
import CustomSection from "../ui/CustomSection";
import { useLocale, useTranslations } from "next-intl";
import { Link, Locale } from "@/navigation";
import { Section } from "../constants";
import { MicroCMSQueries } from "microcms-js-sdk";

interface NewsBodyProps {
  t: ReturnType<typeof useTranslations>;
  isWidget?: boolean;
}

const News = ({ isWidget }: { isWidget?: boolean }) => {
  const t = useTranslations("news");
  return (
    <CustomSection
      id={Section.news}
      title={t.rich("title", { br: () => <br /> }) as React.ReactElement}
      body={<NewsBody t={t} isWidget={isWidget} />}
    />
  );
};

const NewsBody = async ({ t, isWidget = false }: NewsBodyProps) => {
  const locale = useLocale() as Locale;
  const queries: MicroCMSQueries = isWidget ? { limit: 5 } : {};
  const { contents } = await getList(locale, queries);
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

      {isWidget && (
        <Link href="/news" className="block text-white ">
          <p className="text-right">{t("more")}</p>
        </Link>
      )}
    </div>
  );
};

export default News;
