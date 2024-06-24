export const runtime = "edge";
import React from "react";
import Header from "../../../topComponets/Header.js";
import { getDetail } from "../../../../../libs/client.js";
import { format } from "date-fns";

const Home = async ({ params: { postId } }) => {
  const post = await getDetail(postId);
  const html = post.content;
  return (
    <main className="mx-8">
      <Header />
      <section className="container mx-auto mt-24 md:mt-36 text-sm md:text-lg text-white">
        <div>
          <p className="text-center mb-2 md:mb-4">
            {format(new Date(post.createdAt), "yyyy/MM/dd")}
          </p>
          <h2 className="mb-4 md:mb-12 text-2xl md:text-4xl text-center">
            {post.title}
          </h2>
          {html && <div dangerouslySetInnerHTML={{ __html: html }}></div>}
        </div>
      </section>
    </main>
  );
};

export default Home;
