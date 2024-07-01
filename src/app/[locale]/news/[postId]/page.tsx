import React from "react";
import Header from "../../../topComponets/Header";
import { getDetail } from "../../../../libs/client";
import { format } from "date-fns";

export const runtime = "edge";

interface PostIdProps {
  params: { postId: string };
}



const Home = async ({ params: { postId } }: PostIdProps) => {
  const post = await getDetail(postId);
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

          {post.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
