import Image from 'next/image'
import React from 'react'

const Topphoto = () => {
  return (
    <section className=' relative -z-50'>
                <Image src="/sumahoTopPhoto.jpg"
          alt="topimage"
          width={780}
          height={1280}
          className=" object-cover md:hidden block "/>
          <p className=' text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-5/6 md:hidden text-3xl'>視覚障がい者に<br/>宇宙の素晴らしさを<br/>伝えて感動を共有する</p>

      <Image src="/topphoto.jpg"
          alt="topimage"
          width={1920}
          height={1280}
          className=" aspect-video  hidden mx-auto  md:block "/>
          <p className=' text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max hidden md:block text-3xl lg:text-5xl'>視覚障がい者に宇宙の素晴らしさを<br/>伝えて感動を共有する</p>


    </section>
  )
}

export default Topphoto