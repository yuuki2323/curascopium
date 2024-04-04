
export const runtime = 'edge';
import React from "react";
import Header from "../../topComponets/Header.js";
import { getDetail } from "../../../../libs/client.js";



const Home = async ({ params: { postId } }) => {
  const post = await getDetail(postId);
const html = post.content
  return (
    <main className="mx-8">
      <Header />
      <section className="container md:mx-auto mt-24 md:mt-36 text-sm md:text-xl text-white">
        <div>
          <h1 className='mb-4 md:mb-12'>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </section>
    </main>
  );
};

export default Home;