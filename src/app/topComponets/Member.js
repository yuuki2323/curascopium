'use client';
import React from 'react';
import Title from '../ui/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import { MemberProfile } from '../constants';

const MemberCard = ({ id, name, description }) => {
  const formattedText = description.split('\n').map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });
  return (
    <SplideSlide>
      <div className='w-[370] h-[480]  bg-blue-950 bg-bg bg-contain p-8 text-center text-white'>
        <Image
          src={`/profile/${id}.png`}
          alt='topimage'
          width={300}
          height={300}
          className='w-screen h-auto hidden md:block rounded-full mb-2 p-4'
        />
        <p className='text-2xl mb-4'>{name}</p>
        <p className='text-base h-16'>{formattedText}</p>
      </div>
    </SplideSlide>
  );
};

const Member = () => {
  const members = Object.entries(MemberProfile);
  return (
    <section
      className='container p-4 mx-auto'
      id='member'>
      <div className='mb-8'>
        <Title
          en='MEMBER'
          ja='メンバー紹介'
          center='text-center'
        />
      </div>

      <div className='hidden md:block'>
        <Splide
          options={{
            autoplay: true,
            interval: 4000,
            type: 'loop',
            speed: 1200,
            perPage: 3,
            perMove: 1,
            gap: 24,
            pagination: false,
          }}
          aria-label='profile-photo'>
          {members.map((member) => {
            return (
              <MemberCard
                key={member[0]}
                id={member[0]}
                name={member[1].name}
                description={member[1].description}
              />
            );
          })}
        </Splide>
      </div>
      <div className='md:hidden block'>
        <Splide
          options={{
            autoplay: true,
            interval: 4000,
            type: 'loop',
            speed: 1200,
            perPage: 2,
            perMove: 1,
            gap: 24,
            pagination: false,
          }}
          aria-label='profile-photo'>
          <SplideSlide>
            <div className='w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 text-center text-white'>
              <Image
                src='/profile/tanaka.png'
                alt='topimage'
                width={160}
                height={160}
                className=' w-screen h-auto md:hidden block rounded-full mb-2'
              />
              <p className='text-sm mb-2 '>田中 優作</p>
              <p className='text-[8px] h-10'>
                カリフォルニア大学バークレー校学部4年生。宇宙物理学専攻、障害者学副専攻。
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 text-center text-white'>
              <Image
                src='/profile/yamamoto.png'
                alt='topimage'
                width={160}
                height={160}
                className=' w-screen h-auto md:hidden block rounded-full mb-2'
              />
              <p className='text-sm mb-2 '>山本 暖</p>
              <p className='text-[8px] h-10'>
                カリフォルニア大学バークレー校卒。生物学専攻、データサイエンス副専攻
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 text-center text-white'>
              <Image
                src='/profile/nagasawa.png'
                alt='topimage'
                width={160}
                height={160}
                className=' w-screen h-auto md:hidden block rounded-full mb-2'
              />
              <p className='text-sm mb-2 '>長澤 赳志</p>
              <p className='text-[8px] h-10'>
                カリフォルニア大学バークレー校卒。宇宙物理学専攻。
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Member;
