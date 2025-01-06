"use client";

import React from "react";
import "./ui/Home_Events.css";
import Home_EventsSlide from "./Home_EventsSlide";

const Home_EventsSection = () => {
  const cards = [
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

  return (
    <div className="Mkd">
      <div className="gallery-container">
        <div className="box34">
          <div className="center-text" style={{
            backgroundImage: "linear-gradient(to right, rgb(255, 136, 0), rgb(255, 0, 255))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "H3",
          }}>Events</div>
          <div className="animate">
            {cards.map((card, index) => (
              <span
                key={index}
                style={{
                  "--i": index + 6,
                } as React.CSSProperties}
              >
                <img src={card.imageUrl} alt={card.title} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <Home_EventsSlide />
      <hr
        style={{
          height: "2px",
          backgroundColor: "gold",
          border: "2px white",
        }}
      />
    </div>
  );
};

export default Home_EventsSection;


