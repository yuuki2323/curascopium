import React from 'react';
import { getList } from '../../../libs/client.js';
import { format } from 'date-fns';
import Title from '../ui/Title.js';
import Header from '../topComponets/Header.js';
import Link from 'next/link.js';

const Home = async () => {
  const { contents } = await getList();
  return (
    <main className='mx-8'>
      <Header />
      <section className='container mx-auto mt-20 md:mt-32 text-sm md:text-xl'>
        <Title
          en='NEWS'
          ja='お知らせ'
        />
        {contents.map((post) => (
          <dl
            className='text-white border-b border-white flex gap-2 md:gap-8 py-2 mb-2 tabular-nums'
            key={post.id}>
            <dt>{format(new Date(post.createdAt), 'yyyy/MM/dd')}</dt>
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
