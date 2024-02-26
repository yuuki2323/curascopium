import Image from 'next/image'
import React from 'react'

const Purpose = () => {
  return (
    <section className='container p-4 mx-auto'>
    <h2 className='text-4xl text-title text-center'>PURPOSE</h2>
    <p className='text-white text-center'>活動目的</p>
    <Image src="/purpose.jpg" alt="photo" width={1800} height={300}/>
    <p className='text-center text-white'>『視覚障がい者に宇宙の素晴らしさを伝えて感動を共有する』をテーマ<br/>現在、筑波大学特別支援学校や筑波大学、ハッブル天文台などアメリカと日本での様々な協力者と共に、視覚障がい者、 及び青眼者が共に楽しめる新たなイベントを制作するために、様々な学問・分野の知識を取り入れ活動中。</p>
    </section>
  )
}

export default Purpose