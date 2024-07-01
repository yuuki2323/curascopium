import React from "react";
import Header from "../../../topComponets/Header";
import { getDetail } from "../../../../libs/client";
import { format } from "date-fns";
import Image from "next/image";

export const runtime = "edge";

interface PostIdProps {
  params: { postId: string };
}

const Home = async ({ params: { postId } }: PostIdProps) => {
  const post = await getDetail(postId);

  return (
    <main className="mx-8">
      <Header />
      <article className="container mx-auto mt-24 md:mt-36 text-sm md:text-lg text-white bg-slate-600 bg-opacity-50">
        <section id="summary" className="mx-3">
          <p className="mb-2 md:mb-4">
            {format(new Date(post.createdAt), "yyyy/MM/dd")}
          </p>

          <h2 className="mb-4 md:mb-10 text-2xl md:text-4xl text-center font-bold">
            {post.title}
          </h2>
        </section>
        <section id="content" className="mx-8 md:mx-20 pb-10 mb-10">
          {post.photo && (
            <div className="mb-4 md:mb-10">
              <Image
                src={post.photo.url}
                alt={post.title}
                width={1800}
                height={100}
              />
            </div>
          )}
          {post.content && (
            <article
              className="prose prose-white md:prose-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}></article>
          )}
        </section>
      </article>
    </main>
  );
};

export default Home;
