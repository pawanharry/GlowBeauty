import React from 'react'
import Title from '../components0/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components0/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img  className='w-full md:max-w-[480px]' alt='' src={assets.contact_img}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>5409 william st<br/>suite 350 canada</p>
          <p className='text-gray-500'>Tel:(123)123-4568 <br/>Email: admin@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrers at Glow-Beauty.</p>
          <p className='text-gray-500'>Learn more about our team and job openings. </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact