"use client";

import React from "react";
import "./ui/Home_Events.css";
import Home_EventsSlide from "./Home_EventsSlide";
import { eventcards } from "@/lib/utils";

const Home_EventsSection = () => {

  return (
    <>
    <div className="Mkd">
    <div className="gallery-container">
  <div className="box34">
    <div
      className="center-text responsive-scale"
      style={{
        backgroundImage: "linear-gradient(to right, gold, gold)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "H3",
      }}
    >
            Events
          </div>
          <div className="animate">
            {eventcards.map((card, index) => (
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
          marginTop:"-10px"
        }}/>
    </div>
    </>
  );
};

export default Home_EventsSection;


