import React from "react";
import Card from "./Event_Card";

const cardData = [
  {
    day: "Day 1",
    cards: [
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
        title: "StandUps",
        description: "A Fun night with Friends.",
        location: "IIT Mandi, Auditorium",
        price: "600₹",
      },
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
        title: "Pro-Night",
        description: "Experience DJ with you friends",
        location: "Hockey Ground North Campus",
        price: "500₹",
      },
      {
        imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
        title: "Dancer Hits",
        description: "Prize pool 3K||1.5K||0.7K",
        location: "North Campus,Auiditorium",
        price: "100₹",
      },
      {
        imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
        title: "Gaming Mania",
        description: "Relax and play with us.",
        location: "SCEE A13-1B North Campus",
        price: "400₹",
      },
      {
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
        title: "MusicWins !",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
      },
      {
        imageUrl: "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
        title: "De Oasis",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
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
      },
      {
        imageUrl: "https://i.pinimg.com/originals/71/23/f8/7123f8b689af3c6765abb4f2fef53768.png",
        title: "Pubg Pro",
        description: "Experience tranquility with mountain views.",
        location: "IIT Mandi, A10",
        price: "300₹",
      },
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
        title: "Pro-Night",
        description: "Experience DJ with you friends",
        location: "Hockey Ground North Campus",
        price: "500₹",
      },
      {
        imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
        title: "Dancer Hits",
        description: "Prize pool 3K||1.5K||0.7K",
        location: "North Campus,Auiditorium",
        price: "100₹",
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
      },
      {
        imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
        title: "Gaming Mania",
        description: "Relax and play with us.",
        location: "SCEE A13-1B North Campus",
        price: "400₹",
      },
    ],
  },
];

function AllCards() {
  return (
    <div className="space-y-8 px-5 ml-28 custom-lg:ml-60">
    {cardData.map((dayData, index) => (
      <div key={index} className="space-y-4">
        {/* Day Title */}
        <h2 className="text-2xl font-semibold" style={{color:"gold"}}>{dayData.day}</h2>
  
        {/* Card Container */}
        <div className="flex flex-wrap gap-4">
          {dayData.cards.map((card, idx) => (
            <div
              key={idx}
              className="w-2/3  sm:w-1/3 md:w-1/4 lg:w-1/4  xl:w-1/5 xs:scale-[0.4] sm:scale-[0.7] lg:scale-100 transition-transform"
            >
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                location={card.location}
                price={card.price}
              />
            </div>
          ))}
        </div>
  
        {/* Horizontal line to separate days */}
        {index !== cardData.length - 1 && (
          <hr className="border-gray-300 my-4" />
        )}
      </div>
    ))}<br/><br/><br/>
  </div>
  );
}

export default AllCards;
