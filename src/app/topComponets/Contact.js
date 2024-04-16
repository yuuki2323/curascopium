import React from 'react';
import Title from '../ui/Title';
import CustomSection from '../ui/CustomSection';

const Contact = () => {
  return (
    <CustomSection
      id='contact'
      body={<ContactBody />}
    />
  );
};

const ContactBody = () => {
  return (
    <div className='text-white text-sm md:text-lg'>
      <form
        action='https://ssl.form-mailer.jp/fm/service/Forms/confirm'
        method='post'
        name='form1'
        encType='multipart/form-data'
        acceptCharset='UTF-8'
        className='bg-contact mx-auto md:w-3/4 bg-bg bg-contain py-5'>
        <input
          type='hidden'
          name='key'
          value='d7efceec813650'
        />
        <div className='w-10/12 md:w-8/12 mx-auto'>
          <div className='mb-4'>
            <p>氏名</p>
            <p>
              <input
                name='field_7105057'
                type='text'
                size='30'
                placeholder='例)山田 太郎'
                className=' w-full p-1 text-black'
              />
            </p>
          </div>
          <div className='mb-4'>
            <p>連絡先</p>
            <p>
              <input
                name='field_7105050'
                type='text'
                placeholder='例)06-0000-0000'
                className=' w-full p-1 text-black'
              />
            </p>
          </div>
          <div className='mb-4'>
            <p>メールアドレス</p>
            <p>
              <input
                name='field_7105015'
                type='text'
                size='30'
                placeholder='例)sample@sample.com'
                className=' w-full p-1 text-black'
              />
            </p>
          </div>
          <div className='mb-4'>
            <p>お問い合わせ内容</p>
            <p>
              <textarea
                name='field_7105025'
                cols='30'
                rows='8'
                placeholder=''
                className='w-full p-1 text-black'></textarea>
            </p>
          </div>
          <p className='text-center'>
            <input
              name='submit'
              type='submit'
              value='確認画面へ'
              className='bg-title text-black py-2 px-12 rounded-sm cursor-pointer shadow-lg'
            />
          </p>
          <p className='text-xs text-white/50 text-right pt-5'>
            <a
              href='https://www.form-mailer.jp/?utm_source=https://ssl.form-mailer.jp/fms/d7efceec813650&utm_medium=ownedmedia&utm_campaign=powered-by-formmailer'
              target='_blank'
              id='powered'>
              Powered by FormMailer.
            </a>
          </p>
        </div>

        <input
          type='hidden'
          name='code'
          value='utf8'
        />
      </form>
    </div>
  );
};

export default Contact;
