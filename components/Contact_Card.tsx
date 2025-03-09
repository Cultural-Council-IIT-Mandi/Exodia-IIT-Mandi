// import React from 'react'
// import './card.css'

// interface CardProps {
//      src: string; 
//      title: string; 
//      desc: string; 
//      contact: string; 
// }

// const Contact_Card: React.FC<CardProps> = (props) => {
//   return (
//     <div className="Contact_card">
//         <h4 className="Contact_title"> {props.title} </h4> <br />
//         <img className="Contact_src" src={props.src} alt=""  />
//         <p className="Contact_desc">  {props.desc} </p>
//         <p className="Contact_contact"> 
//             <span> <img src="/icons/socialmedia2/call.png" alt="" /> </span>
//             <span> +91-9378882318 </span>
//          </p>

//          <div className="Contact_icons">
//             <a href="" target='_blank' className='Contact_email'> <button className="Contact_email"> <img src="/icons/socialmedia2/email.png" alt="" /> </button> </a>
//             <a href="" target='_blank' className="Contact_insta">  <button className="Contact_insta"> <img src="/icons/socialmedia2/instagram.png" alt=""/> </button> </a>
//             <a href="" target='_blank' className="Contact_linkedin"> <button className="Contact_linkedin">  <img src="/icons/socialmedia2/linkedin.png" alt="" /> </button> </a>
//             <a href="" target='_blank' className="Contact_whatsapp">   <button className="Contact_whatsapp">  <img src="/icons/socialmedia2/whatsapp.png" alt=""  /> </button> </a>
//          </div>
//     </div>
//   )
// }

// export default Contact_Card


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  src: string;
  title: string;
  desc: string;
  contact: string;
}

const ContactCard: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[1rem] max-sm:gap-1 p-4 m-4 max-sm:m-2 max-sm:p-2 h-[30rem] max-sm:h-[10rem] 
                    max-sm:w-[8rem] border-2 border-white/[0.2] rounded-3xl shadow-lg glass hover:scale-105 transition-transform duration-300 mb-[10rem]">
      <h4 className="text-xl max-sm:text-[10px] font-bold text-center mb-2 max-sm:mb-0 text-white">{props.title}</h4>
      <Image
        className="w-24 h-24 max-sm:h-10 max-sm:w-10 rounded-full shadow-md mb-4 max-sm:mb-0"
        src={props.src}
        alt={`${props.title} image`}
        width={96}
        height={96}
        objectFit="cover"
      />
      <p className="text-sm max-sm:text-[8px] mb-4 max-sm:mb-0 text-white">{props.desc}</p>
      <div className="flex items-center justify-center gap-4 max-sm:gap-2 mb-4 max-sm:mb-0">
        <Image src="/icons/socialmedia2/call.png" className='max-sm:w-2 max-sm:h-2' alt="Call" width={20} height={20} />
        <div className="text-[1rem] max-sm:text-[10px] text-white">+91-9378882318</div>
      </div>
      <div className="flex gap-4 max-sm:gap-1">
        <Link href="" className="p-2 max-sm:p-0 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/email.png" className='max-sm:h-2 max-sm:w-2' alt="Email" width={32} height={32} />
          {/* </a> */}
        </Link>
        <Link href="" className="p-2 max-sm:p-0 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/instagram.png" className='max-sm:h-2 max-sm:w-2' alt="Instagram" width={32} height={32} />
          {/* </a> */}
        </Link>
        <Link href="" className="p-2 max-sm:p-0 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/linkedin.png" className='max-sm:h-2 max-sm:w-2' alt="LinkedIn" width={32} height={32} />
          {/* </a> */}
        </Link>
        <Link href="" className="p-2 max-sm:p-0 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/whatsapp.png" className='max-sm:h-2 max-sm:w-2' alt="WhatsApp" width={32} height={32} />
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
