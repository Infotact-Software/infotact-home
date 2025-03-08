"use client"
import React from 'react'
import Home from '@/utils/Home'
import HomeAbout from '@/utils/HomeAbout'
import Team from '@/utils/Team';
import JoinourTeam from '@/utils/JoinourTeam';
import { BentoDemo } from '@/utils/BentoDemo';
import { TestimonalsDemo } from '@/utils/Testimonials';
import Faq from '@/utils/Faq';
const page = () => {
  return (
    <div>
      <Home />
      <HomeAbout />
      <Team />
      <JoinourTeam />
      <div className='max-w-7xl mx-auto'>
      <BentoDemo />
      </div>
     
      <TestimonalsDemo />
     
      
      <Faq />
    </div>
  )
}

export default page
