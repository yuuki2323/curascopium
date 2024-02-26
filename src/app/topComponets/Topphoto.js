import Image from 'next/image'
import React from 'react'

const Topphoto = () => {
  return (
    <section className=''>
      <Image src="/topphoto.jpg"
          alt="topimage"
          width={1920}
          height={1280}
          className=" relative aspect-video object-cover hidden md:block "/>
          <p className=' text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-5/6  text-5xl'>視覚障がい者に宇宙の素晴らしさを<br/>伝えて感動を共有する</p>
    </section>
  )
}

export default Topphoto