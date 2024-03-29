import React from "react";
import { getList } from "../../../libs/client.js";
import { format } from "date-fns";
import Title from "../ui/Title.js";
import Header from "../topComponets/Header.js";
import Link from "next/link.js";
import parse from "html-react-parser";

const Home = async () => {
  const { contents } = await getList();
  return (
    <main className="">
        <Header />
        <section className="container pt-36 pb-4 text-xl mx-auto">
          <Title en="NEWS" ja="お知らせ" />
          {contents.map((post) => (
            <dl
              className="text-white border-b border-white flex gap-8 py-2 mb-2"
              key={post.id}
            >
              <dt>{format(new Date(post.createdAt), "yyyy年MM月dd日")}</dt>
              <Link href={`/news/${post.id}`}>
              <dd>{post.title}</dd>
              </Link>
              
            </dl>
          ))}
        </section>
    </main>
  );
};

export default Home;
