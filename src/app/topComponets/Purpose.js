import Image from 'next/image';
import React from 'react';
import Title from '../ui/Title';

const Purpose = () => {
  return (
    <section
      className='container p-4 mx-auto h-screen flex items-center justify-center'
      id='purpose'>
      <div className='w-full'>
        <Title
          en='PURPOSE'
          ja='活動目的'
          center='text-center'
        />

        <Image
          src='/galaxy.jpg'
          alt='photo'
          width={1800}
          height={600}
        />
        <p className=' text-white text-sm md:text-xl py-4 md:py-8 text-center'>
          『視覚障がい者に宇宙の素晴らしさを伝えて感動を共有する』
          <br />
          <br />
          現在、筑波大学特別支援学校や筑波大学、ハッブル天文台などアメリカと日本での様々な協力者と共に、視覚障がい者、
          及び晴眼者が共に楽しめる新たなイベントを制作するために、様々な学問・分野の知識を取り入れ活動中。
        </p>
      </div>
    </section>
  );
};

export default Purpose;
