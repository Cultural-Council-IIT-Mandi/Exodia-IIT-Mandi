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

      <div className='p-0 m-0 h-full'>
        <div className={`mt-[8rem] mb-7 text-white text-[5rem] max-sm:text-[3rem] ${aboutNPfont11.className}`}>Contact Us</div>

        <div className='flex justify-center items-center flex-wrap'>
          <div className='flex justify-center items-center flex-wrap'>
            <Contact_Card src="/assets/contact/c1.jpeg" title='Albus Dumbledore' desc="Headmaster" contact="+91-987384738" />

            <Contact_Card src="/assets/contact/c2.jpeg" title="Minerva Mcgonagall" desc="Professor" contact="+91-987384738" />

            <Contact_Card src="/assets/contact/c1.jpeg" title="Severus Snape" desc="Professor" contact="+91-987384738" />

            <Contact_Card src="/assets/contact/c2.jpeg" title="Harry Potter" desc="Head boy" contact="+91-987384738" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page