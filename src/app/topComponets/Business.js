import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'

const Business = () => {
  return (
    <section className='container p-4 mx-auto'>
    <div className='mb-8'>
    <Title en="BUSINESS" ja="事業内容" center="text-center"/>
    </div>
    <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-white text-sm md:text-lg'>
      <div>
        <div className='relative'>
        <Image src="/4.jpg" alt="photo" width={1920} height={1080} className=' aspect-video mb-4' />
        <p className='absolute bottom-0 left-0 py-2 px-4 text-center bg-black bg-opacity-70'>視覚障害者教育</p>
        </div>
       
        <p>視覚障がいを持つ高校二年生を対象に宇宙講座を行った。目的は、視覚に依存しない方法で天文学の理解を深め、生徒たちと感動を共有し、彼らへ大学進学の可能性を示すこと。</p>
      </div>
      <div>
        <div className='relative'>
        <Image src="/5.jpg" alt="photo" width={1920} height={1080} className=' aspect-video mb-4' />
      <p className='absolute bottom-0 left-0 py-2 px-4 text-center bg-black bg-opacity-70'>次世代プラネタリウム</p>
        </div>
      
      <p>仙台市天文台とのコラボレーション視覚障がいを持つ方々と晴眼者が共に感動できるプラネタリウムを制作中。アドバイザーとして落合陽一氏と共に前例のないプラネタリウムに挑戦中。</p>
      </div>
    </div>
  </section>
  )
}

export default Business