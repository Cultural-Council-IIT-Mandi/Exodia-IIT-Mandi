import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// HOME PAGE UTILS 

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Schedule",
    link: "/schedule",
  },
  {
    name: "Sponsors",
    link: "/sponsors",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];


export  const links = [
  {
    title: "Whatsapp",
    icon: "📱",
    href: "#",
  },

  {
    title: "Instagram",
    icon: "📦",
    href: "#",
  },
  {
    title: "Twitter",
    icon:"🧩",
    href: "#",
  },
  {
    title: "Youtube",
    icon: "🔄",
    href: "#",
  },

  {
    title: "LinkedIn",
    icon: "🐦",
    href: "#",
  },
  {
    title: "Facebook",
    icon: "🐙",
    href: "#",
  },
];


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