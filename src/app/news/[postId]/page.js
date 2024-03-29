import React from "react";
import parse from "html-react-parser";
import { format } from "date-fns";
import Header from "../../topComponets/Header.js";
import { getList,getDetail } from "../../../../libs/client.js";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

const Home = async ({ params: { postId } }) => {
  const post = await getDetail(postId);
  return (
    <main className="">
      <Header />
      <section className="container pt-36 pb-4 text-xl mx-auto">
        <div>
          <h1>{post.title}</h1>
          <h2>{format(new Date(post.createdAt), "yyyy年MM月dd日")}</h2>
          <div>{parse(post.content)}</div>
        </div>
      </section>
    </main>
  );
};

export default Home;
