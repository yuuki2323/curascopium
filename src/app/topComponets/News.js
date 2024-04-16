import Link from 'next/link';
import React from 'react';
import Title from '../ui/Title.js';
import { getList } from '../../../libs/client.js';
import { format } from 'date-fns';

const News = async () => {
  const { contents } = await getList();

  return (
    <section className='container p-4 mx-auto text-sm md:text-xl h-screen flex items-center justify-center'>
      <div className='w-full'>
        <Title
          en='NEWS'
          ja='お知らせ'
          center='text-center'
        />

        {contents.slice(0, 5).map((post) => (
          <dl
            className='text-white border-b border-white flex gap-2 md:gap-8 py-2 mb-2 tabular-nums'
            key={post.id}>
            <dt>{format(new Date(post.createdAt), 'yyyy/MM/dd')}</dt>
            <Link href={`/news/${post.id}`}>
              <dd>{post.title}</dd>
            </Link>
          </dl>
        ))}

        <Link
          href='/news'
          className='block text-white '>
          <p className=' text-right'>一覧を見る</p>
        </Link>
      </div>
    </section>
  );
};

export default News;
