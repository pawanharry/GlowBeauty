import React from 'react'
import Title from '../components0/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components0/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Elevate your beauty game with our exquisite shimmer body and eye products, designed to add a touch of radiance to every look. Whether you're aiming for a subtle glow or a bold statement, our collection offers versatile options to suit any mood or occasion. </p>
        <p>Crafted with high-quality, skin-loving ingredients, our shimmer products blend effortlessly for a flawless finish. From velvety textures to luminous pigments, each item is tailored to enhance your natural beauty while being gentle on your skin.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Perfect for day or night, these lightweight formulas provide long-lasting sparkle and a confident glow. Whether you're heading to a special event or embracing everyday glamour, our shimmer collection ensures you shine your brightest.</p>

        </div>

      </div>
      <div className='text-2xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>"We guarantee top-tier products crafted with precision and care."</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'> "Effortless shopping, seamless delivery—beauty at your fingertips."</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'> "We're here to help, every step of the way, with a smile."</p>
        </div>

      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About