import Link from "next/link";
import React from "react";
import Title from "../ui/Title.js";
import { getList } from "../../../libs/client.js";
import { format } from "date-fns";

const News = async () => {
  const { contents } = await getList();

  return (
    <section className="container p-4 mx-auto">
      <Title en="NEWS" ja="お知らせ" />

      {contents.map((post) => (
        <dl className="text-white border-b border-white flex gap-8 py-2 mb-2">
          <dt key={post.id}>
            {format(new Date(post.createdAt), "yyyy年MM月dd日")}
          </dt>
          <dd>{post.title}</dd>
          {post.content}
        </dl>

      ))}

      <Link href="/" className="block text-white ">
        <p className=" text-right">一覧を見る</p>
      </Link>
    </section>
  );
};

export default News;
