import Link from 'next/link';
import React from 'react';
import { getList } from '../../../libs/client.js';
import { format } from 'date-fns';
import CustomSection from '../ui/CustomSection.js';

const News = () => {
  return (
    <CustomSection
      id='news'
      body={<NewsBody />}
    />
  );
};

const NewsBody = async () => {
  const { contents } = await getList({ limit: 5 });
  return (
    <div className='text-xs md:text-xl'>
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

      <Link
        href='/news'
        className='block text-white '>
        <p className=' text-right'>一覧を見る</p>
      </Link>
    </div>
  );
};

export default News;
