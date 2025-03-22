"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact_Card from '@/components/Contact_Card'
import { aboutNPfont, aboutNPfont11 } from '@/lib/font.utils'


const page: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className='p-0 m-0 h-full min-h-screen'>
        <div className={`mt-[8rem] mb-7 text-white text-[5rem] max-sm:text-[3rem] ${aboutNPfont11.className}`}>Contact Us</div>

        <div className='flex justify-center items-center max-sm:flex-col max-sm:p-4 '>
          <Contact_Card src="/assets/team/vishal.jpeg" title='Vishal Kumar' desc="Convener" contact="" />

          <Contact_Card src="/assets/team/aryan.jpeg" title="Aryan Kumar" desc="Convener" contact="" />

          <Contact_Card src="/assets/team/divyanshu.jpg" title="Divyanshu Raj" desc="Head" contact="+91-9811197429" />

          <Contact_Card src="/assets/team/gaurav.jpg" title="Gourav Chaudhary" desc="Head" contact="+91-8278741047" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page