import React from "react";
import Card from "./Event_Card";
import { cardData } from "@/lib/utils";
import { aboutNPfont, aboutNPfont11, aboutNPfont2 } from "@/lib/font.utils";



function AllCards() {
  return (
    <div className="space-y-8 px-5 w-[90%] mx-auto ">
    {cardData.map((dayData, index) => (
      <div key={index} className=" space-y-4 flex flex-col justify-center items-center gap-4">
        {/* Day Title */}
        <h2 className={`text-[3rem] ${aboutNPfont11.className}`} style={{color:"white"}}>{dayData.day}</h2>
  
        {/* Card Container */}
        <div className="flex flex-wrap gap-8  justify-center items-center glass p-10 rounded-3xl">
          {dayData.cards.map((card, idx) => (
            <div
              key={idx}
              className="max-sm:w-full  transition-transform p-8  rounded-3xl glass"
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
        {/* {index !== cardData.length - 1 && (
          <hr className="border-gray-300 my-4" />
        )} */}
      </div>
    ))}<br/><br/><br/>
  </div>
  );
}

export default AllCards;
