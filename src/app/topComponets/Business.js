import Image from 'next/image'
import React from 'react'

const Business = () => {
  return (
    <section className='container p-4 mx-auto'>
    <div className='mb-8'>
    <h2 className='text-4xl text-title text-center'>BUSINESS</h2>
    <p className='text-white text-center'>事業内容</p>
    </div>
    <div className='flex justify-between gap-12 text-white'>
      <div>
        <Image src="/4.jpg" alt="photo" width={1920} height={1080} className=' aspect-video' />
        <p>視覚障がいを持つ高校二年生を対象に宇宙講座を行った。目的は、視覚に依存しない方法で天文学の理解を深め、生徒たちと感動を共有し、彼らへ大学進学の可能性を示すこと。</p>
      </div>
      <div>
      <Image src="/5.jpg" alt="photo" width={1920} height={1080} className=' aspect-video' />
      <p>仙台市天文台とのコラボレーション視覚障がいを持つ方々と晴眼者が共に感動できるプラネタリウムを制作中。アドバイザーとして落合陽一氏と共に前例のないプラネタリウムに挑戦中。</p>
      </div>
    </div>
  </section>
  )
}

export default Business