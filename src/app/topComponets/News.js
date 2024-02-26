import Link from 'next/link'
import React from 'react'
import Title from '../ui/title'

const News = () => {
  return (
    <section className='container p-4 mx-auto'>
      <Title en="NEWS" ja="お知らせ"/>

      <dl className='text-white border-b border-white flex gap-8 py-2 mb-2'>
        <dt>2024/01/01</dt>
        <dd>おしらせおしらせおしらせ</dd>
      </dl>
      <dl className='text-white border-b border-white flex gap-8 py-2 mb-2'>
        <dt>2024/01/01</dt>
        <dd>おしらせおしらせおしらせ</dd>
      </dl>
      <dl className='text-white border-b border-white flex gap-8 py-2 mb-2'>
        <dt>2024/01/01</dt>
        <dd>おしらせおしらせおしらせ</dd>
      </dl>

      <Link href='/' className='block text-white '><p className=' text-right'>一覧を見る</p></Link>
    </section>


  )
}

export default News