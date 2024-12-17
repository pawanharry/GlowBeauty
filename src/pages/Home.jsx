import React from 'react'
import Hero from '../components0/Hero'
import LatestCollection from '../components0/LatestCollection'
import BestSeller from '../components0/BestSeller'
import OurPolicy from '../components0/OurPolicy'
import NewsletterBox from '../components0/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home