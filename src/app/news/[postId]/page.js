
export const runtime = 'edge';
import React from "react";
import { format } from "date-fns";
import Header from "../../topComponets/Header.js";
import { getList,getDetail } from "../../../../libs/client.js";



const Home = async ({ params: { postId } }) => {
  const post = await getDetail(postId);
  return (
    <main className="">
      <Header />
      <section className="container pt-36 pb-4 text-xl mx-auto">
        <div>
          <h1>{post.title}</h1>
          <h2>{format(new Date(post.createdAt), "yyyy/MM/dd")}</h2>
          <div>{post.content}</div>
        </div>
      </section>
    </main>
  );
};

export default Home;