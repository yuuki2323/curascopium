import React from "react";
import { format } from "date-fns";
import Title from "../../ui/Title";
import Header from "../../topComponets/Header";
import { Link } from "@/navigation";
import { MicroCMSPost, getList } from "../../../../libs/client";

export const runtime = "edge";

const Home = () => {
  return (
    <main className="mx-8">
      <Header />
      <section className="container mx-auto mt-20 md:mt-32 text-sm md:text-xl">
        <Title en="NEWS" ja="お知らせ" />
        <NewsBody />
      </section>
    </main>
  );
};

const NewsBody = async () => {
  const { contents } = await getList({ limit: 5 });
  return contents.map((post: MicroCMSPost) => (
    <dl
      className="text-white border-b border-white flex gap-2 md:gap-8 py-2 mb-2 tabular-nums"
      key={post.id}>
      <dt>{format(new Date(post.createdAt), "yyyy/MM/dd")}</dt>
      <Link href={`/news/${post.id}`}>
        <dd>{post.title}</dd>
      </Link>
    </dl>
  ));
};

export default Home;
