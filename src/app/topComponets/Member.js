'use client';
import React from 'react';
import Title from '../ui/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import { MemberProfile } from '../constants';
import { mediaQuery, useMediaQuery } from '../useMediaQuery';

const MemberCard = ({ id, name, alphabet, description }) => {
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
      <div className='w-[370] h-[480] bg-blue-950 bg-bg bg-contain p-3 md:pt-0 md:px-10 text-center text-white'>
        <Image
          src={`/profile/${id}.png`}
          alt='topimage'
          width={300}
          height={300}
          className='w-screen h-auto rounded-full mb-2 md:p-4'
        />
        <p className='text-sm md:text-xl mb-1'>{name}</p>
        <p className='text-xs md:text-sm mb-2 md:mb-2'>{alphabet}</p>
        <p className='text-[8px] md:text-[12px] h-10 md:h-20'>
          {formattedText}
        </p>
      </div>
    </SplideSlide>
  );
};

const Member = () => {
  const isMd = useMediaQuery(mediaQuery.md);
  const members = Object.entries(MemberProfile);
  return (
    <section
      className='container p-4 mx-auto h-screen flex items-center justify-center'
      id='member'>
      <div className='w-full'>
        <div className='mb-8'>
          <Title
            en='MEMBER'
            ja='メンバー紹介'
            center='text-center'
          />
        </div>

        <Splide
          options={{
            // autoplay: true,
            interval: 4000,
            type: 'loop',
            speed: 1200,
            perPage: isMd ? 2 : 3,
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
                alphabet={member[1].alphabet}
                description={member[1].description}
              />
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Member;
