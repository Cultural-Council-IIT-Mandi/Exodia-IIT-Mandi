import React from 'react'
import { FooterSocialMediaDock } from './Home_FooterSocialMediaDock'
import { aboutNPfont11 } from '@/lib/font.utils'

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-20 max-sm:py-10 flex flex-col items-center">


      <div className="container mx-auto grid grid-cols-4 max-md:grid-cols-1">

        <div className='z-[900]'>
          <p className={`text-[3rem] flex justify-center items-center ${aboutNPfont11.className}`}>EXODIA '25</p>
        </div>

        {/* Participate Section */}
        <div className='max-md:hidden'>
          <h3 className="text-white font-semibold mb-3">Participate</h3>
          <ul className="space-y-2">
            <li><a href="/events" className="hover:text-purple-400">Events Portal</a></li>
            <li><a href="https://www.instagram.com/exodia.iitmandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-purple-400">Join The Community</a></li>
            <li><a href="/brochure" className="hover:text-purple-400">Brochure</a></li>
          </ul>
        </div>

        {/* Explore More Section */}
        <div className='max-md:hidden'>
          <h3 className="text-white font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-purple-400">About Exodia</a></li>
            <li><a href="/gallery" className="hover:text-purple-400">Previous Star Attractions</a></li>
            <li><a href="/gallery" className="hover:text-purple-400">Gallery</a></li>
          </ul>
        </div>

        {/* Reach Out Section */}
        <div className='max-md:hidden'>
          <h3 className="text-white font-semibold mb-3">Reach Out To Us</h3>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-purple-400">Contact Us</a></li>
            <li><a href="/team" className="hover:text-purple-400">Core Team</a></li>
            {/* <li><a href="/githubLinkSoon" className="hover:text-purple-400">Contribute With Us</a></li> */}
            <li><a href="/developers" className="hover:text-purple-400">Developers</a></li>
          </ul>
        </div>

      </div>

      <FooterSocialMediaDock />


      {/* Social Icons and Copyright */}
      <div className=" border-t border-gray-700 pt-6 max-sm:pt-3 flex flex-col md:flex-row justify-between items-center lg:px-12">
        {/* Social Media Links */}

        {/* Copyright */}
        <p className="text-white mt-4 max-sm:mt-1 md:mt-0 text-sm">
          © Exodia '25, IIT Mandi &nbsp; | &nbsp; Made with <span className="text-pink-500">♥</span> by Web Dev Team
        </p>
      </div>
    </footer>
  )
}

export default Footer