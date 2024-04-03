import parse from 'html-react-parser';
export const runtime = 'edge';
import React from "react";
import Header from "../../topComponets/Header.js";
import { getDetail } from "../../../../libs/client.js";



const Home = async ({ params: { postId } }) => {
  const post = await getDetail(postId);
  return (
    <main className="">
      <Header />
      <section className="container mx-auto mt-20 md:mt-32 text-sm md:text-xl text-white">
        <div>
          <h1 className='mb-4 md:mb-12'>{post.title}</h1>
          <div>{parse(post.content)}</div>
        </div>
      </section>
    </main>
  );
};

export default Home;