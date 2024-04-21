import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navi, SNS } from '../constants';

const PcHeader = () => {
  const sns = Object.values(SNS);
  const navi = Object.values(Navi);

  return (
    // ヘッダー
    <header
      className='hidden md:flex md:p-4 lg:py-6
    justify-between container mx-auto absolute top-0 right-0 left-0 z-10 '>
      {/* アイコン */}
      <h1>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='photo'
            width={88}
            height={88}
          />
        </Link>
      </h1>

      <div className='ml-auto'>
        {/* sns */}
        <div className='flex items-center justify-end gap-4'>
          {sns.map((sns) => {
            return (
              <Link
                href={sns.href}
                key={sns.href}
                target='_blank'
                rel='noopener noreferrer'>
                <Image
                  src={sns.src}
                  width={36}
                  height={36}
                  alt='sns'
                />
              </Link>
            );
          })}
        </div>
        {/* ナビ */}
        <nav className='hidden md:block'>
          <ul className=' md:flex md:justify-between md:items-center md:gap-6 md:mt-4'>
            {navi.map((navi) => {
              return (
                <li key={navi.nav}>
                  <Link href={navi.href}>
                    <p className='text-white  text-sm lg:text-lg'>{navi.nav}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PcHeader;
 