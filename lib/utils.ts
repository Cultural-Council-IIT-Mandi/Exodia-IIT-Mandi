import { EventDetail } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// HOME PAGE UTILS 

// export const navItems = [
//   {
//     name: "Events",
//     link: "/events",
//   },
//   {
//     name: "Schedule",
//     link: "/schedule",
//   },
//   {
//     name: "Gallery",
//     link: "/gallery",
//   },
//   {
//     name: "Announcements",
//     link: "/announcements",
//   },
//   {
//     name: "Sponsors",
//     link: "/sponsors",
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Team",
//     link: "/team",
//   },
//   {
//     name: "Contact",
//     link: "/contact",
//   },
// ];

export const navItems = [
  {
    name: "Home",
    link: "/",
  
  },
  {
    name: "Events",
    link: "/events",
  },
  // {
  //   name: "Schedule",
  //   link: "/schedule",
  // },
  {
    name: "Gallery",
    link: "/gallery",
    // subItems: [
    //   { name: "Gallery", link: "/gallery" },
    //   { name: "Brochure", link: "/brochure" },
    // ],
  },
  // {
  //   name: "Announcements",
  //   link: "/announcements",
  // },
  // {
  //   name: "Sponsors",
  //   link: "/sponsors",
  // },
  // {
  //   name: "About",
  //   link: "/about",
  // },
  {
    name: "Team",
    link: "/team",
    // subItems: [
    //   { name: "Core Team", link: "/team" },
    //   { name: "Developers", link: "/developers" },
    // ],
  },
  {
    name: "Contact",
    link: "/contact",
    // subItems: [
    //   { name: "Contact Us", link: "/contact" },
    //   { name: "How to Reach", link: "/howtoreach" },
    //   { name: "3D Map", link: "/3dmap" },
    // ],
  },
];

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export  const Sociallinks = [
  {
    title: "Whatsapp",
    icon: "/icons/socialmedia/whatsapp.png",
    href: "8797003838",
  },

  {
    title: "Instagram",
    icon: "/icons/socialmedia/insta.png",
    href: "https://www.instagram.com/exodia.iitmandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "Twitter",
    icon:"/icons/socialmedia/twitter.png",
    href: "https://x.com/exodia_iitmandi",
  },
  {
    title: "Youtube",
    icon: "/icons/socialmedia/youtube.png",
    href: "www.youtube.com/@ExodiaIITMandi",
  },

  {
    title: "LinkedIn",
    icon: "/icons/socialmedia/linkedin.png",
    href: "https://www.linkedin.com/company/exodia-iit-mandi/",
  },
  {
    title: "Facebook",
    icon: "/icons/socialmedia/facebook.png",
    href: "https://www.facebook.com/Exodia.IITMandi",
  },
];


export  const AboutSociallinks = [
  {
    title: "Whatsapp",
    icon: "/icons/socialmedia/whatsapp.png",
    href: "#",
  },

  {
    title: "Instagram",
    icon: "/icons/socialmedia/insta.png",
    href: "#",
  },
  {
    title: "Twitter",
    icon:"/icons/socialmedia/twitter.png",
    href: "#",
  },
  {
    title: "Youtube",
    icon: "/icons/socialmedia/youtube.png",
    href: "#",
  },

  {
    title: "LinkedIn",
    icon: "/icons/socialmedia/linkedin.png",
    href: "#",
  },
  {
    title: "Facebook",
    icon: "/icons/socialmedia/facebook.png",
    href: "#",
  },
];

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const Events = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "/assets/home-event-images/gevent-1.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: 
         " Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide withher haunting voice and introspective lyrics. <br /> <br /> Her songsoften explore themes of tragic romance, glamour, and melancholia,drawing inspiration from both contemporary and vintage pop culture.With a career that has seen numerous critically acclaimed albums, LanaDel Rey has established herself as a unique and influential figure inthe music industry, earning a dedicated fan base and numerousaccolades.",
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/assets/home-event-images/gevent-1.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: 
         " Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics that resonate deeply with his audience. Born in the village of Khant Maanpur in Punjab, India, he has become a cultural icon in the Punjabi music industry. <br /> <br /> His songs often reflect the struggles and triumphs of everyday life, capturing the essence of Punjabi culture and traditions. With a career spanning over two decades, Babu Maan has released numerous hit albums and singles that have garnered him a massive fan following both in India and abroad.",
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/assets/home-event-images/gevent-1.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: 
         " Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances that resonate deeply with their audience. Formed in Los Angeles, California, they have become a cultural icon in the heavy metal music industry. <br /> <br /> Their songs often reflect themes of aggression, social issues, and personal struggles, capturing the essence of the heavy metal genre. With a career spanning over four decades, Metallica has released numerous hit albums and singles that have garnered them a massive fan following both in the United States and abroad.",
  },
  
];




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const SponList = [
  {
      name: 'Sponsor 1',
      image: '/assets/sponsors/1.png'
  },
  {
      name: 'Sponsor 2',
      image: '/assets/sponsors/2.jpeg'
  },
  {
      name: 'Sponsor 3',
      image: '/assets/sponsors/3.jpeg'
  },
  {
      name: 'Sponsor 4',
      image: '/assets/sponsors/4.png'
  },
  {
      name: 'Sponsor 5',
      image: '/assets/sponsors/5.jpeg'
  },
  {
      name: 'Sponsor 6',
      image: '/assets/sponsors/6.png'
  },
  {
      name: 'Sponsor 7',
      image: '/assets/sponsors/7.jpeg'
  },
  {
      name: 'Sponsor 8',
      image: '/assets/sponsors/8.png'
  },
  {
      name: 'Sponsor 9',
      image: '/assets/sponsors/9.png'
  },
  {
      name: 'Sponsor 10',
      image: '/assets/sponsors/10.png'
  },
  {
      name: 'Sponsor 11',
      image: '/assets/sponsors/11.png'
  },
  {
      name: 'Sponsor 12',
      image: '/assets/sponsors/12.png'
  },
  {
      name: 'Sponsor 13',
      image: '/assets/sponsors/13.png'
  },
  {
      name: 'Sponsor 14',
      image: '/assets/sponsors/14.png'
  },
];



export const videoLinks: Record<number, [string, string]> = {
  2017: ["xQDj8OrE0bo?si=KW575XIEyKTzBuMS", "/assets/pyqs/2017.jpg"],
  2018: ["WU_8wcNML3M?si=JwusbaJ7TvDwrYFS", "/assets/pyqs/2018.jpg"],
  2019: ["GlRHHi22mQg?si=XHcqcWHIqIM2z7wo", "/assets/pyqs/2019.jpg"],
  2023: ["GtArDHgOt5A?si=WfkmoRAPhQ5t5qYY", "/assets/pyqs/2023.jpg"],
  2024: ["WvwU3scKoAI?si=gB2kQWbVTzNk4kc7", "/assets/pyqs/2024.jpg"]
};




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ye sare event ki list hai day wise

export const cardData = [
  {
    day: "Day 1",
    cards: [
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
        title: "StandUps",
        description: "A Fun night with Friends.",
        location: "IIT Mandi, Auditorium",
        price: "600₹",
        time: "10:00 AM"
      },
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
        title: "Pro-Night",
        description: "Experience DJ with you friends",
        location: "Hockey Ground North Campus",
        price: "500₹",
        time: "11:00 AM"
      },
      {
        imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
        title: "Dancer Hits",
        description: "Prize pool 3K||1.5K||0.7K",
        location: "North Campus,Auiditorium",
        price: "100₹",
        time: "12:00 PM"
      },
      {
        imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
        title: "Gaming Mania",
        description: "Relax and play with us.",
        location: "SCEE A13-1B North Campus",
        price: "400₹",
        time: "01:00 PM"
      },
      {
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
        title: "MusicWins !",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
        time: "02:00 PM"
      },
      {
        imageUrl: "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
        title: "De Oasis",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
        time: "03:00 PM"
      },
    ],
  },
  {
    day: "Day 2",
    cards: [
      {
        imageUrl: "https://as1.ftcdn.net/v2/jpg/01/58/48/58/1000_F_158485851_DaiK7ZXKw1j9wf9NFdg3eKrZJD5Sfbdi.jpg",
        title: "PartyAllNight",
        description: "A Lorem ipsum dolor ore?",
        location: "IIT Mandi,South Campus",
        price: "$250",
        time: "04:00 PM"
      },
      {
        imageUrl: "https://i.pinimg.com/originals/71/23/f8/7123f8b689af3c6765abb4f2fef53768.png",
        title: "Pubg Pro",
        description: "Experience tranquility with mountain views.",
        location: "IIT Mandi, A10",
        price: "300₹",
        time: "05:00 PM"
      },
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
        title: "Pro-Night",
        description: "Experience DJ with you friends",
        location: "Hockey Ground North Campus",
        price: "500₹",
        time: "06:00 PM"
      },
      {
        imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
        title: "Dancer Hits",
        description: "Prize pool 3K||1.5K||0.7K",
        location: "North Campus,Auiditorium",
        price: "100₹",
        time: "07:00 PM"
      },
    ],
  },
  {
    day: "Day 3",
    cards: [
      {
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
        title: "MusicWins !",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
        time: "08:00 PM"
      },
      {
        imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
        title: "Gaming Mania",
        description: "Relax and play with us.",
        location: "SCEE A13-1B North Campus",
        price: "400₹",
        time: "09:00 PM"
      },
    ],
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ye sare event ki list hai 
export const eventcards = [
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    title: "MusicWins !",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
    title: "De Oasis",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },

  // repeat 

  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    title: "MusicWins !",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
    title: "De Oasis",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },

  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    title: "MusicWins !",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
    title: "De Oasis",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    title: "MusicWins !",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
    title: "De Oasis",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },


];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const Sliderslides = [
  {
    id: 1,
    title: "First Slide",
    subtitle: "Subtitle",
    description: "Description for the first slide.",
    image: "/assets/galery-raw-images/gallery-raw-1.jpg",
  },
  {
    id: 2,
    title: "Second Slide",
    subtitle: "Subtitle",
    description: "Description for the second slide.",
    image: "/assets/galery-raw-images/gallery-raw-2.jpg",
  },
  {
    id: 3,
    title: "Third Slide",
    subtitle: "Subtitle",
    description: "Description for the third slide.",
    image: "/assets/galery-raw-images/gallery-raw-3.jpg",
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const eventDetails:EventDetail[] = [
  {
    id: "1",
    title: "StandUps",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    date: "2025-05-01",
    location: "IIT Mandi, Auditorium",
    organizer: "Dumbledore",
    spellCategory: "Transfiguration",
    Fee: "600₹",
    description: "A Fun night with Friends.",
    currentParticipants: 30,
    maxParticipants: 100,
  },
  {
    id: "2",
    title: "Pro-Night",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    date: "2025-06-15",
    location: "Hockey Ground North Campus",
    organizer: "Grindelwald",
    spellCategory: "Dark Arts",
    Fee: "500₹",
    description: "Experience DJ with you friends",
    currentParticipants: 40,
    maxParticipants: 150,
  },
  {
    id: "3",
    title: "Dancer Hits",
    imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    date: "2025-07-20",
    location: "North Campus,Auiditorium",
    organizer: "Weasley Family",
    spellCategory: "Sports",
    Fee: "100₹",
    description: "Prize pool 3K||1.5K||0.7K",
    currentParticipants: 15,
    maxParticipants: 50,
  },
  {
    id: "4",
    title: "Gaming Mania",
    imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    date: "2025-08-05",
    location: "SCEE A13-1B North Campus",
    organizer: "Madam Pomfrey",
    spellCategory: "Potion Making",
    Fee: "400₹",
    description: "Relax and play with us.",
    currentParticipants: 10,
    maxParticipants: 30,
  },
  {
    id: "5",
    title: "MusicWins !",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    date: "2025-09-12",
    location: "IIT Mandi,North Campus",
    organizer: "Death Eaters",
    spellCategory: "Dark Arts",
    Fee: "200₹",
    description: "Enjoy peaceful music living.",
    currentParticipants: 5,
    maxParticipants: 20,
  },
  {
    id: "6",
    title: "De Oasis",
    imageUrl: "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
    date: "2025-10-08",
    location: "IIT Mandi,North Campus",
    organizer: "Professor Binns",
    spellCategory: "Muggle Studies",
    Fee: "200₹",
    description: "Enjoy peaceful music living.",
    currentParticipants: 50,
    maxParticipants: 100,
  },
  {
    id: "7",
    title: "PartyAllNight",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/01/58/48/58/1000_F_158485851_DaiK7ZXKw1j9wf9NFdg3eKrZJD5Sfbdi.jpg",
    date: "2025-06-15",
    location: "IIT Mandi,South Campus",
    organizer: "Mr. Ollivander",
    spellCategory: "Wand Crafting",
    Fee: "250₹",
    description: "Learn the ancient art of wand carving from the masters.",
    currentParticipants: 20,
    maxParticipants: 30,
  },
  {
    id: "8",
    title: "Pubg Pro",
    imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    date: "2025-07-20",
    location: "IIT Mandi, A10",
    organizer: "Newt Scamander",
    spellCategory: "Magical Creatures",
    Fee: "300₹",
    description: "Experience tranquility with mountain views.",
    currentParticipants: 10,
    maxParticipants: 50,
  },
  {
    id: "9",
    title: "Pro-Night",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    date: "2024-02-07",
    location: "Hockey Ground North Campus",
    organizer: "Professor Sprout",
    spellCategory: "Herbology",
    Fee: "500₹",
    description: "Experience DJ with you friends",
    currentParticipants: 25,
    maxParticipants: 60,
  },
  {
    id: "10",
    title: "Dancer Hits",
    imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    date: "2024-02-07",
    location: "North Campus,Auiditorium",
    organizer: "Oliver Wood",
    spellCategory: "Sports",
    Fee: "100₹",
    description: "Prize pool 3K||1.5K||0.7K",
    currentParticipants: 40,
    maxParticipants: 80,
  },
  {
    id: "11",
    title: "MusicWins !",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    date: "2025-09-12",
    location: "IIT Mandi,North Campus",
    organizer: "Professor McGonagall",
    spellCategory: "Time Magic",
    Fee: "200₹",
    description: "Enjoy peaceful music living.",
    currentParticipants: 50,
    maxParticipants: 100,
  },
  {
    id: "12",
    title: "Gaming Mania",
    imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    date: "2025-08-05",
    location: "SCEE A13-1B North Campus",
    organizer: "Professor Flitwick",
    spellCategory: "Dueling",
    Fee: "400₹",
    description: "Relax and play with us.",
    currentParticipants: 16,
    maxParticipants: 50,
  }
]

export const teamsList = [ 
  {
    id: 'team0',
    name: 'Convener',
    members: [
      { 
        name: 'Vishal Kumar',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nbegVpKFvlWGTIAJSubDhEoNp9XPaV5xw4jy',
        heading: 'Vishal Kumar',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/vishal-kumar-gupta-b5a664252/' },
          { name: 'instagram', link: 'https://www.instagram.com/bitchaal/' },
          { name: 'email', link: 'B22339@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Aryan Kumar',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8EgnL0zqXyL9MO1q2nHQca6xPvFe7YNiRswgV',
        heading: 'Aryan Kumar',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/aryan0singh/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'email', link: 'B22236@students.iitmandi.ac.in' },
        ],
      },
    ], 
  },
  {
    id: 'team1',
    name: 'Secretary',
    members: [
      { 
        name: 'Ayush Sinha',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8HG0sJDWxhybz3vfeqLAQnpcSBWg6d54OMKiH',
        heading: 'Literary Secretary',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/ayush-sinha-iit-mandi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/cultureshock_poet' },
          { name: 'whatsapp', link: '7992323005' },
          { name: 'email', link: 'literary_secretary@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Vivek Aggarwal',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XSTLmChWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ',
        heading: 'Cultural Secretary',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/vivek-aggarwal-b005b125a/' },
          { name: 'instagram', link: 'https://www.instagram.com/vivekaggarwal05/' },
          { name: 'whatsapp', link: '7417899100' },
          { name: 'email', link: 'cultural_secretary@students.iitmandi.ac.in' },
        ],
      },
    ], 
  },
  {
    id: 'team2',
    name: 'Sponsorship Team ',
    members: [
      { 
        name: 'Ayan Garg',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wPU7iBkN93fDJcmlrWoxYu8LRnVCHUMXgaki',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://linkedin.com/in/AyanGargAyanGarg' },
          { name: 'instagram', link: 'https://instagram.com/ayangarg2' },
          { name: 'whatsapp', link: '7756837945' },
          { name: 'email', link: 'ayangarg2005@gmail.com' },
        ],
      },
      { 
        name: 'Ayush Bhardwaj',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAYxcapvLvuzkRJai146Y2oZCN0Q3DmjflbH',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/ayush-bhardwaj01' },
          { name: 'whatsapp', link: '9877809383' },
          { name: 'email', link: 'b23199@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Hardeep Gupta',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8iO1pzvndrAuLZbPVFehBwa7QtcmkpnJoi6T1',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/hardeep-gupta-14ab7b337' },
          { name: 'instagram', link: 'https://instagram.com/hardeepgupta123' },
          { name: 'whatsapp', link: '9219602541' },
          { name: 'email', link: 'hardeepgupta2912@gmail.com' },
        ],
      },
    ],
  },
  {
    id: 'team3',
    name: 'Planning And Management Team',
    members: [
      { 
        name: 'Avishkar Chavan',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg85Wj3InUAUQ6YOXCtv3Fsqkif4u7ENMrxJenS',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/avishkarchavan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
          { name: 'instagram', link: 'https://instagram.com/avishkar_95' },
          { name: 'whatsapp', link: '8767757524' },
          { name: 'email', link: 'avishkarchavan55@gmail.com' },
        ],
      },
      { 
        name: 'Tushar Bhati',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XCV1kEhWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/tushar-bhati-632862318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
          { name: 'instagram', link: 'https://instagram.com/tusharbhatiiii' },
          { name: 'whatsapp', link: '9870226606' },
          { name: 'email', link: 'B23104@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Sujay Ghonshetwad',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8rY40s9FKczH6lU2AfYM4j8OCnVtxLuhdeWiG',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/sujay-ghonshetwad-233b89225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/itz_sujay_20' },
          { name: 'whatsapp', link: '8767430882' },
          { name: 'email', link: '20sujay04@gmail.com' },
        ],
      },
      { 
        name: 'Jaspinder kaur ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86rGX0YmwX9hA86oIV0kMUetRYfrxvLGNiHJa',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/jaspinder-kaur-ba33242a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'whatsapp', link: '9780771121' },
          { name: 'email', link: 'B23264@students.iitmandi.ac.in' },
        ],
      },
    ],
  },
  {
    id: 'team4',
    name: 'Development Team',
    members: [
      { 
        name: 'Piyush Kumar',
        photo: '/assets/team/piyush.jpeg',
        socialMediaLinks: [
        ],
      },
      // { 
      //   name: 'Pragyansh',
      //   photo: '/assets/team/pragyansh.png',
      //   socialMediaLinks: [
      //   ],
      // },
    ],
  },
  {
    id: 'team5',
    name: 'Publicity team ',
    members: [
      { 
        name: 'Deepansha Deora',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8DIPW1MtCGHb0TXgla6n8qNr1RxSKzEoJWwZy',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/deepansha-deora-27b8b4280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/deepansha_05' },
          { name: 'whatsapp', link: '97823 96590 ' },
          { name: 'email', link: '23deepansha@gmail.com' },
        ],
      },
      { 
        name: 'Gourav Chaudhary ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8C1nGsyYrR4iUhtEkXzqNrGjSnf1ul85MDWvB',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/gourav-chaudhary-845a78344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/Chodry_gourav_22' },
          { name: 'whatsapp', link: '8278741047' },
          { name: 'email', link: 'b23370@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Namita Singh ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8j3WZKKEvUlrMC78dNGSEnVcpPI96zhWaqeDy',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/namita-singh-b00346329' },
          { name: 'instagram', link: 'https://instagram.com/namitasingh14114' },
          { name: 'whatsapp', link: '9811197429' },
          { name: 'email', link: 'b22224@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Divyanshu Raj',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8duJobtD2zCVD9W0xXfbPgcFB8GtZ3ejKnmsO',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/divyanshu-raj-784306329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'whatsapp', link: '8797003838' },
          { name: 'email', link: 'b23438@students.iitmandi.ac.in' },
          { name: 'instagram', link: 'https://instagram.com/divyanshu_raj_2004' },
        ],
      },
    ],
  },
  {
    id: 'team6',
    name: 'Photography and Videography team',
    members: [
      { 
        name: 'Mankirat Singh Saini',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8UjpwyQc5DGBn1dJwk74IcaTePASLs3ofF6E8',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/mankirat-singh-saini-1695b81a4/' },
          { name: 'instagram', link: 'https://www.instagram.com/_mankirat_saini/' },
          { name: 'whatsapp', link: '9463553963' },
          { name: 'email', link: 'B23270@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Rohak Gupta',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg85O0JDPUAUQ6YOXCtv3Fsqkif4u7ENMrxJenS',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/rohak-gupta-04ab172b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'rohak_gupta' },
          { name: 'whatsapp', link: '9817157386' },
          { name: 'email', link: 'b23500@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Adit',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hjYjHfgiPInSsWU8AM03Hk6OVjE5NlYFoqrg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/adit-raj-69925224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://www.instagram.com/adit.raj_?igsh=MWg4b3lnMjdlbWJ1dA==' },
          { name: 'whatsapp', link: '9105555966' },
          { name: 'email', link: 'b23480@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Achintya Dixit',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8WKT2QbCiUtTqDvQ12xPwnlk7pVJeZcfi6r3B',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/achintya-dixit-302039328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'achintya_dixit_' },
          { name: 'whatsapp', link: '8839599733' },
          { name: 'email', link: 'achintyadixit2611@gmail.com' },
        ],
      },
    ],
  },
  {
    id: 'team7',
    name: 'Media team',
    members: [
      { 
        name: 'Aditya Sharma',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8jlfTs9EvUlrMC78dNGSEnVcpPI96zhWaqeDy',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/aditya-sharma-b71335289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://www.instagram.com/aditya_sh2606/profilecard/?igsh=MXF4Z2lpM3d1cDhzNA==' },
          { name: 'whatsapp', link: '7297938884' },
          { name: 'email', link: 'adityasha729@gmail.com' },
        ],
      },
      { 
        name: 'Monu Patil',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8jWhf8xEvUlrMC78dNGSEnVcpPI96zhWaqeDy',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/monu-patil-551a0b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://www.instagram.com/satyam.patil.7921/profilecard/?igsh=dTRwY3JoNGNnZTJn' },
          { name: 'whatsapp', link: '8603630993' },
          { name: 'email', link: 'b22052@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Aryan Kashyap',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8EgnL0zqXyL9MO1q2nHQca6xPvFe7YNiRswgV',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/aryan-kashyap-1953a3275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://www.instagram.com/_.aryankashyap/profilecard/?igsh=MXB5dzB6YWo5NThtaQ==' },
          { name: 'whatsapp', link: '9508050445' },
          { name: 'email', link: 'aryankashyap21a@gmail.com' },
        ],
      },
    ],
  },
  {
    id: 'team8',
    name: 'Content team',
    members: [
      { 
        name: 'Basil Khan',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8fZYU8mNnaGuQcUEXzIrigDtYvbPpyeAwZH8K',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/basil-khan-b7714b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'Basilkhan78' },
          { name: 'whatsapp', link: '7668421823' },
          { name: 'email', link: 'b23353@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Harshit Kumar Singh',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8K8SLqMQ3y0NMqAiv1scShIQEJfUmRlp8G745',
        socialMediaLinks: [
          { name: 'linkedin', link: 'harshithi5' },
          { name: 'instagram', link: 'harshit_hi5' },
          { name: 'whatsapp', link: '7061671688' },
          { name: 'email', link: 'b23133@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Mohit',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tY2XKQeeKLVcTXI7MJNPQraCYZ5iGjoEO9H8',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/mohit-b356172a5/' },
          { name: 'instagram', link: 'mohit_gothwal07' },
          { name: 'whatsapp', link: '8307133420' },
          { name: 'email', link: 'b23160@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Rishang Yadav',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87R1Az05VgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/yadavrishang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'meson_197' },
          { name: 'whatsapp', link: '7906092262' },
          { name: 'email', link: 'b23173@students.iitmandi.ac.in' },
        ],
      },
    ],
  },
  {
    id: 'team9',
    name: 'Design team',
    members: [
      { 
        name: 'Sumit  Tiwari',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAqjVaqvLvuzkRJai146Y2oZCN0Q3DmjflbH',
        socialMediaLinks: [
          { name: 'linkedin', link: 'sumit tiwari' },
          { name: 'instagram', link: 'tiwariisumit' },
          { name: 'whatsapp', link: '6280909926' },
          { name: 'email', link: 'st5387262@gmail.com' },
        ],
      },
      { 
        name: 'Yash Kataria',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Nua9Uo0TBnmKsCY0o1ENRbLkZXIgjp3rfh6V',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/yash-kataria-6a3610284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'yash_k_.9' },
          { name: 'whatsapp', link: '9671611971' },
          { name: 'email', link: 'kyash4054@gmail.com' },
        ],
      },
      { 
        name: 'Pranjal',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8G9x2tFvLvuzkRJai146Y2oZCN0Q3DmjflbHw',
        socialMediaLinks: [
          { name: 'linkedin', link: 'Pranjal Rai' },
          { name: 'instagram', link: 'Pranjalol' },
          { name: 'whatsapp', link: '9821044361' },
          { name: 'email', link: 'B23022@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Prashashti',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8qr6kyjoQarxcF3UnTdD8M24buszJNjfgyh1p',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/prashasti-singh-5516a8288' },
          { name: 'instagram', link: ' https://www.instagram.com/prashasti._.x?igsh=MTY3bmo5em00anc3dQ%3D%3D&utm_source=qr' },
          { name: 'email', link: 'B22339@students.iitmandi.ac.in' },
        ],
      },
    ],
  },
  {
    id: 'team10',
    name: 'Decor team',
    members: [
      { 
        name: 'Ruchi',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8i3zUjT5ndrAuLZbPVFehBwa7QtcmkpnJoi6T',
        socialMediaLinks: [
          { name: 'linkedin', link: '' },
          { name: 'instagram', link: 'Ruchi_pundir_16' },
          { name: 'whatsapp', link: '9818891994' },
          { name: 'email', link: 'B22317@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Aditya Bagyan',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8jlfTs9EvUlrMC78dNGSEnVcpPI96zhWaqeDy',
        socialMediaLinks: [
          { name: 'linkedin', link: 'Aditya bagyan' },
          { name: 'instagram', link: 'Aditya.bagyan' },
          { name: 'whatsapp', link: '8979615916' },
          { name: 'email', link: 'b23003@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Priyanshu Maurya',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8lqyK2wlAw3fuBnaqkdIUrR1PbAD8sHzjOSCh',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/priyanshu-maurya-092b95344/' },
          { name: 'instagram', link: 'priyanshu_maurya06' },
          { name: 'whatsapp', link: '9120440922' },
          { name: 'email', link: 'divyanshumaurya328@gmail.com' },
        ],
      },
      { 
        name: 'Ankur Rathore',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8ZkBam7F1OxwUjyTlv03g8bLCGVSYHBiKo4mp',
        socialMediaLinks: [
          { name: 'linkedin', link: '' },
          { name: 'instagram', link: '' },
          { name: 'whatsapp', link: '6398886022' },
          { name: 'email', link: 'b21181@students.iitmandi.ac.in' },
        ],
      },
    ],
  },
  {
    id: 'team11',
    name: 'Security team',
    members: [
      { 
        name: 'Alok Kumar Yadav ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86E5XyqEmwX9hA86oIV0kMUetRYfrxvLGNiHJ',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/alok-yadav-371a75305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://www.instagram.com/__.al0k.__/profilecard/?igsh=b2lwemRvOTVlYjlh' },
          { name: 'whatsapp', link: '6394080409' },
          { name: 'email', link: 'b23426@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Devansh Garg ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83CU1Q6z72kmsCXMLPhjzWtoifAyncURqe9d8',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/devansh-garg-92888a241' },
          { name: 'instagram', link: 'devansh_garg_mma' },
          { name: 'whatsapp', link: '9910329901' },
          { name: 'email', link: 'devansh.garg3105@gmail.com' },
        ],
      },
    ],
  },
  {
    id: 'team12',
    name: 'Hospitality team',
    members: [
      { 
        name: 'Ananya Rai',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OD9rsuZAVZirtFvpze2T4jfB9k1RaSXCLubx',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/ananya-rai-a54516267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: '' },
          { name: 'whatsapp', link: '7908161508' },
          { name: 'email', link: 'ananyarai050@gmail.com' },
        ],
      },
      { 
        name: 'Shivam Anand ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81KzxZq0dFuSj7PyAlmGUCN6WXqKIfTRJibEM',
        socialMediaLinks: [
          { name: 'linkedin', link: '' },
          { name: 'instagram', link: '__friend.exe__' },
          { name: 'whatsapp', link: '7982600750' },
          { name: 'email', link: 'b23465@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Saurav Kumar ',
        photo: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg88mcZCZf4vby2KhTFrt1qAxpg70QM59SaBCRI',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/saurav-kumar-0bb364284/' },
          { name: 'instagram', link: 'Sauravk_singhh' },
          { name: 'whatsapp', link: '9798490095' },
          { name: 'email', link: 'b23051@students.iitmandi.ac.in' },
        ],
      },
    ],
  },

  
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const faqquestions = [
  {
    id: 1,
    question: "Popular Articles",
    answer: "Details about popular articles.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer: "Details about fixing problems and removals.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer: "Details about browsing the web.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer: "Details about searching on your device.",
  },
];


export const announcementFaq = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const ScheduleEventList = [
  {
    title: "Anima",
    Date:"09/09/0909",
    Day:
      "Monday",
    Time:"09:00",
    link: "/eventDetail/Anima",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"
  },
  {
    title: "Itachi",
    Date:"09/09/0909",
    Day:
      "TuesDay",
    Time:"09:00",
    link: "/eventDetail/Anima",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"
  },
  {
    title: "Sasuke Uchiha",
    Date:"09/09/0909",
    Day:
      "Wednesday",
    Time:"09:00",
    link: "/eventDetail/Anima",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"
  },
  {
    title: "MADARA",
    Date:"09/09/0909",
    Day:
      "Thursday",
    Time:"09:00",
    link: "/eventDetail/Anima",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"
  },
  {
    title: "Gojo Saturo",
    Date:"09/09/0909",
    Day:
      "Friday",
    Time:"09:00",
    link: "/eventDetail/Anima",
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"
  },
  {
    title: "MicroVenom",
    Date:"09/09/0909",
    Day:
      "Saturday",
    Time:"09:00",
    link: "/eventDetail/Anima",
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"

  },
  {
    title: "Teriasekitesi",
    Date:"09/09/0909",
    Day:
      "Sunday",
    Time:"09:00",
    link: "/eventDetail/Anima",
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"

  },
  {
    title: "Noa",
    Date:"09/09/0909",
    Day:
      "Monday",
    Time:"09:00",
    link: "/eventDetail/Anima",
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"

  },
  {
    title: "NarutoKun",
    Date:"09/09/0909",
    Day:
      "Tuesday",
    Time:"09:00",
    link: "/eventDetail/Anima",
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"

  },
  {
    title: "dattevaya",
    Date:"09/09/0909",
    Day:
      "Wednesday",
    Time:"09:00",
    link: "/eventDetail/Anima",
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026"


  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// deploy check
export const AboutPrevGuestData = [
  {
    title: "Itachi Uchia",
    src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tICdyHKeeKLVcTXI7MJNPQraCYZ5iGjoEO9H",
  },
  {
    title: "Madara Uchiha",
    src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8ZrrVFH7F1OxwUjyTlv03g8bLCGVSYHBiKo4m",
  },
  {
    title: "Levi Ackerman",
    src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8gcTOmQZ55uXiZQTqNIntk9HSYGwbaAfxvLeB",
  },
 
  {
    title: "Radhe Karn",
    src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8X5uH6K7hWnfg8CkBHLr7YPo4jxz6Elt0a5uc",
  },
  {
    title: "Kai Sakamuru",
    src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8FrO3UQ1sOhtfncomTS60MER1JXj9ueN28kI4",
  },
  {
    title: "Gojo Saturo",
    src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8kQgUNYdmeRU37CuzDvwZLP5FgiTOWcaX0JNy",
  },
  {
      title: "Kakashi Hatake",
      src: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86EHQoRymwX9hA86oIV0kMUetRYfrxvLGNiHJ",
    },
];



// export const AboutPrevGuestData = [
//   {
//     title: "Itachi Uchia",
//     src: "/assets/about/prevguest/g1.JPG",
//   },
//   {
//     title: "Madara Uchiha",
//     src: "/assets/about/prevguest/g1.JPG",
//   },
//   {
//     title: "Levi Ackerman",
//     src: "/assets/about/prevguest/g1.JPG",
//   },
 
//   {
//     title: "Radhe Karn",
//     src: "/assets/about/prevguest/g1.JPG",
//   },
//   {
//     title: "Kai Sakamuru",
//     src: "/assets/about/prevguest/g1.JPG",
//   },
//   {
//     title: "Gojo Saturo",
//     src: "/assets/about/prevguest/g1.JPG",
//   },
//   {
//       title: "Kakashi Hatake",
//       src: "/assets/about/prevguest/g1.JPG",
//     },
// ];

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// List of announcements
export const announcements = [
  {
      title: 'More than 500 million copies of the Harry Potter books sold',
      description: 'Twenty years ago, readers around the world first discovered the magical story of Harry Potter, created by J.K. Rowling. We can now reveal that, since that moment, half a billion Harry Potter books have now been sold.',
      day: 'Tuesday',
      date: '14 September, 2023',
      time: '09:00 AM'
  },
  {
      title: 'New AI breakthrough announced',
      description: 'Researchers have made a major breakthrough in artificial intelligence, paving the way for advanced applications in healthcare, robotics, and more. in artificial intelligence, paving the way for advanced applications in healthcare, robotics, and more',
      day: 'Wednesday',
      date: '15 November, 2023',
      time: '12:00 PM',
      image: '/assets/anouncement/nppic/1.jpg'
  },
  {
      title: 'Exodia Tech Conference 2025',
      description: 'Join us for the most exciting tech conference of the year, featuring keynote speeches, panel discussions, and workshops.',
      day: 'Friday',
      date: '17 January, 2025',
      time: '10:30 AM'
  },
  {
      title: 'Launch of Iron Man Suit Prototype',
      description: 'An innovative team has unveiled the first prototype of a fully functional Iron Man suit, marking a milestone in technology and engineering.',
      day: 'Sunday',
      date: '19 March, 2025',
      time: '02:00 PM',
      image: '/assets/anouncement/nppic/2.jpg'
  }
]


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// List of Events for crousal 
// const images: Image[] = [
//   {
//     src: "https://images6.alphacoders.com/304/304604.jpg",
//     title: "Magical Fireworks at Exodia 2024",
//     description: "A stunning view of magical fireworks illuminating the misty night sky at Exodia 2024.",
//   },
//   {
//     src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48264/article_full%403x.jpg",
//     title: "Exodia Skyline",
//     description: "The mesmerizing skyline of IIT Mandi, bathed in a magical glow during Exodia 2024.",
//   },
//   {
//     src: "http://spellshelp.com/upload/medialibrary/e0b/e0b3bd034aaea1136c9de5f97a364d9d.jpg",
//     title: "Magical Campus of IIT Mandi",
//     description: "A captivating view of the IIT Mandi campus surrounded by mystical fog, evoking the spirit of Exodia 2024.",
//   },
//   {
//     src: "https://www.theaureview.com/wp-content/uploads/2020/02/Stranger-Things-is-Coming-to-HHN-2018-1-2048x1173.jpg",
//     title: "Exodia Festivities",
//     description: "An electrifying atmosphere at Exodia 2024, filled with enchanting performances and magical moments.",
//   },
//   {
//     src: "https://images.ctfassets.net/6pezt69ih962/1DyAhWIAnmyzgNjMR8sGdu/8c67663590d07cf31beeee934ed1a9b6/Ticketing_1920x1200.jpg",
//     title: "Exodia's Magical Motorfest",
//     description: "A thrilling display of motor performances, set against the mystical backdrop of Exodia 2024's magical theme.",
//   },
//   {
//     src: "https://wallup.net/wp-content/uploads/2018/09/26/685291-fantasy-mage-wizard-sorcerer-art-artwork-magic-magician.jpg",
//     title: "Magical Sunset at Exodia",
//     description: "A magical sunset casting an otherworldly glow over the Exodia 2024 campus, immersing the festival in mystery.",
//   },
//   {
//     src: "https://multiplayer.net-cdn.it/thumbs/images/2022/03/18/hogwarts-legacy-artwork-_33_jpg_1600x900_crop_q85.jpg",
//     title: "Magical Beach Party",
//     description: "A magical beach party under the moonlight, where the essence of Exodia 2024 comes alive.",
//   },
//   {
//     src: "https://wallpaperaccess.com/full/1430394.jpg",
//     title: "Magical Mountain Adventure",
//     description: "A mystical mountain adventure through enchanted landscapes, symbolizing the spirit of Exodia 2024.",
//   },
// ];



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// List of Events for Home page 

export  const projects = [
  {
    eventType: "Mr. and Mrs. Exodia:",
    events: [
      {
        name: "Mr. and Mrs. Exodia:",
        imageUrl: "/assets/homethird/rock.jpg",
        description: "Get ready to entice the audience with your mystical wits and mesmerizing charisma. So bask in the moonlight and prepare yourselves for the opportunity to immortalize yourself as a Merlinic beauty. ",
      },
    ],
  },
  {
    eventType: "Cosplay",
    events: [
      {
        name: "Cosplay",
        imageUrl: "/assets/homethird/rock.jpg",
        description: "Wave your wand and breathe life into your favorite characters– be it the sorcerer supreme, a green gold-loving goblin, or an occultic creature of the dark, own the stage and allow others to bask under your glory at this polyjuice infused event.",
      },
      {
        name: "Futuristic Visions",
        imageUrl: "/assets/homethird/tree.jpg",
        description: "A dive into the future of art through digital media and experimental techniques.",
      },
      {
        name: "Abstract Realms",
        imageUrl: "/assets/homethird/water.jpg",
        description: "An exploration of abstract art and its impact on human perception.",
      },
    ],
  },
  {
    eventType: "Mushaira",
    events: [
      {
        name: "Mushaira",
        imageUrl: "/assets/homethird/rock.jpg",
        description: "Immerse yourself into a magical night where the Himalayas echo with mystical ghazals and enchant all those who hear it. With talent of the likes of Ustad Nusarat Fateh Ali Khan, let the valley be mesmerized by the ever magical sufi music.",
      },
      {
        name: "Quantum Computing",
        imageUrl: "/assets/homethird/tree.jpg",
        description: "A look at the advancements in quantum technology and its applications.",
      },
      {
        name: "Space Innovations",
        imageUrl: "/assets/homethird/water.jpg",
        description: "How space exploration is pushing the boundaries of technology and engineering.",
      },
    ],
  },
  {
    eventType: "MUNSC",
    events: [
      {
        name: "MUNSC",
        imageUrl: "/assets/homethird/rock.jpg",
        description: "Believe yourself to be a leader? Then sharpen your silver tongues and get ready for the battle of brains and navigate the occultic labyrinth of politics and emerge victorious– oh! And remember: keep your allies close and your foes closer.",
      },
      {
        name: "Quantum Computing",
        imageUrl: "/assets/homethird/tree.jpg",
        description: "A look at the advancements in quantum technology and its applications.",
      },
      {
        name: "Space Innovations",
        imageUrl: "/assets/homethird/water.jpg",
        description: "How space exploration is pushing the boundaries of technology and engineering.",
      },
    ],
  },
];




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // horizontal scroll on scroll list 
export const horiscrollimage = [
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81u15n10dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8H0XkaBWxhybz3vfeqLAQnpcSBWg6d54OMKiH",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8zHdUSN8A1KGoF6Q0ZitnYBmJPl8chHbjdVLR",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8NnBEE7TBnmKsCY0o1ENRbLkZXIgjp3rfh6Vz",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8gBRg155uXiZQTqNIntk9HSYGwbaAfxvLeB27",

"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81u15n10dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8H0XkaBWxhybz3vfeqLAQnpcSBWg6d54OMKiH",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8zHdUSN8A1KGoF6Q0ZitnYBmJPl8chHbjdVLR",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8NnBEE7TBnmKsCY0o1ENRbLkZXIgjp3rfh6Vz",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8gBRg155uXiZQTqNIntk9HSYGwbaAfxvLeB27",

"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81u15n10dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8H0XkaBWxhybz3vfeqLAQnpcSBWg6d54OMKiH",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8zHdUSN8A1KGoF6Q0ZitnYBmJPl8chHbjdVLR",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8NnBEE7TBnmKsCY0o1ENRbLkZXIgjp3rfh6Vz",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8gBRg155uXiZQTqNIntk9HSYGwbaAfxvLeB27",

"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81u15n10dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8H0XkaBWxhybz3vfeqLAQnpcSBWg6d54OMKiH",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8zHdUSN8A1KGoF6Q0ZitnYBmJPl8chHbjdVLR",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8NnBEE7TBnmKsCY0o1ENRbLkZXIgjp3rfh6Vz",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8gBRg155uXiZQTqNIntk9HSYGwbaAfxvLeB27",

"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81u15n10dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8H0XkaBWxhybz3vfeqLAQnpcSBWg6d54OMKiH",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8zHdUSN8A1KGoF6Q0ZitnYBmJPl8chHbjdVLR",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8NnBEE7TBnmKsCY0o1ENRbLkZXIgjp3rfh6Vz",
"https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8gBRg155uXiZQTqNIntk9HSYGwbaAfxvLeB27",
  ];


  
export const HTRimages = [
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8AKpGbcacbtfYk82or9UsZ1RQNXmW0Deh7wqS",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8k8vPjhdmeRU37CuzDvwZLP5FgiTOWcaX0JNy",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg88SZ2Lsf4vby2KhTFrt1qAxpg70QM59SaBCRI",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8yw4zY9vbcnD1Z80MwGei4QNvUP6JjxgdSYHB",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wuDUuOkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
  ];


export  const images = [
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8I707mXJOVUiXjEZo8nPCruRv1xJM02KalYe3",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OzvaoCZAVZirtFvpze2T4jfB9k1RaSXCLubx",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Nu2ALWATBnmKsCY0o1ENRbLkZXIgjp3rfh6V",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8n2DsJgKFvlWGTIAJSubDhEoNp9XPaV5xw4jy",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8myK0B8jXbzNjKiwsf8AWZGL3t6QTYohU9BDg",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XyZ0N1hWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8VqbjfD4TaWOgMFRoCkJPN2dSYzuqDA9f47ci",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80jj3l2O6nPm1We5dZyOsKhfk4grHcBuEtjiq",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8fgX5LuNnaGuQcUEXzIrigDtYvbPpyeAwZH8K",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nzPw094KFvlWGTIAJSubDhEoNp9XPaV5xw4j",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87RXf5OeVgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8CWhqH5rR4iUhtEkXzqNrGjSnf1ul85MDWvBs",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAjgtGvLvuzkRJai146Y2oZCN0Q3DmjflbHw",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83tXH9Az72kmsCXMLPhjzWtoifAyncURqe9d8",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Xf41RshWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hUTBB8hgiPInSsWU8AM03Hk6OVjE5NlYFoqr",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tI4Vqp3eeKLVcTXI7MJNPQraCYZ5iGjoEO9H",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wZ0pJUkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8h2xHhMgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hfWTnsgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8brpqZ0JFTD4RYVkqMGW97ir0uIxeHfXCJ5oO",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA",
    ];
  

export const VERimages = [
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Xf41RshWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8VqbjfD4TaWOgMFRoCkJPN2dSYzuqDA9f47ci", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87RXf5OeVgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hfWTnsgiPInSsWU8AM03Hk6OVjE5NlYFoqrg", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nzPw094KFvlWGTIAJSubDhEoNp9XPaV5xw4j", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tI4Vqp3eeKLVcTXI7MJNPQraCYZ5iGjoEO9H",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wZ0pJUkN93fDJcmlrWoxYu8LRnVCHUMXgaki", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Nu2ALWATBnmKsCY0o1ENRbLkZXIgjp3rfh6V", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80jj3l2O6nPm1We5dZyOsKhfk4grHcBuEtjiq", "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA"
];



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// characters 


export const characters1 = `The biggest college fest in the Himalayas is back to enchant the`;
export const characters2 = `world with its vibrant mystique. The three-day-long fest`;
export const characters3 = `guarantees a magical experience brimming with events that ignite`;
export const characters4 = `zeal, craft, and empyreal artistry and will emblaze the starry night`;
export const characters5 = `in its arcane brilliance.`;
export const characters1s = `The biggest college fest in the Himalayas is`
export const characters2s = `to enchant the world with its vibrant mystique.`
export const characters3s = `The three-day-long fest guarantees a magical`
export const characters4s = `experience brimming with events that ignite zeal,`
export const characters5s =` craft, and empyreal artistry and will emblaze`
export const characters6s = `the starry night in its arcane brilliance.`

export const characters6 = `IIT Mandi, cradled in the Himalayas, blends wisdom with nature's serenity.`;
export const characters7 = `A place where innovation meets tranquility, shaping visions of tomorrow.`;
export const characters8 = `With rivers whispering knowledge, it fosters brilliance in every mind.`;
export const characters9 = `An abode of research, creativity, and dreams soaring beyond the peaks.`;
export const characters10 = `Where intellect and nature converge, crafting a legacy of excellence.`;

export const characters11 = `Exodia is the annual techno-cultural fest of Indian Institute of Technology Mandi. It is a three`;
export const characters12 = `day-long event held every year. The first edition was held in 2012 and since then it has grown `;
export const characters13 = `to be one of the largest student-run college fests of the Himalayas. It is one of the biggest`;
export const characters14 = `events of the Himalayan region and attracts crowds from throughout northern India.`;
export const characters15 = `The fest is a blend of technical and cultural events, workshops, competitions, and performances`;
export const characters16 = `The fest also tries to promote the Himalayan region and showcase its culture and beauty by `;
export const characters17 = `orchestrating some of its events for the same.`;
export const characters11s = `Exodia is the annual techno-cultural fest of Indian`
export const characters12s = `Institute of Technology Mandi. It is a three day-long`
export const characters13s = `event held every year. The first edition was held in`
export const characters14s = `2012 and since then it has grown to be one of the`
export const characters15s = `largest student-run college fests of the Himalayas.`
export const characters16s = `It is one of the biggest events of the Himalayan region `
export const characters17s = `and attracts crowds from throughout northern India.`
export const characters18s = `The fest is a blend of cultural events, workshops,`
export const characters19s = `competitions, and performances. The fest also tries to`
export const characters20s = `promote the Himalayan region and showcase its culture`
export const characters21s = `and beauty by orchestrating its events for the same.`
 