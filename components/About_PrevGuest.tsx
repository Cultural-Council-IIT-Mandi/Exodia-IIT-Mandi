import React from 'react'
import { Card, Carousel } from './ui/apple-cards-carousel';
import { AboutPrevGuestData } from '@/lib/utils';
import { aboutNPfont, aboutNPfont11 } from '@/lib/font.utils';




const About_PrevGuest = () => {
    const cards = AboutPrevGuestData.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
      ));
     
      return (
        <div className="w-full h-full py-2 pb-10">
          <h2 className={`max-w-7xl pl-4 mx-auto text-[5rem] md:text-[5rem] max-sm:text-[2.5rem] text-gold ${aboutNPfont11.className}`}>
            Previous Guests
          </h2>
          <Carousel items={cards} />
        </div>
      );
}

export default About_PrevGuest