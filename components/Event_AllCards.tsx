import React from "react";
import Card from "./Event_Card";
import { cardData } from "@/lib/utils";



function AllCards() {
  return (
    <div className="space-y-8 px-5 w-[90%] mx-auto">
    {cardData.map((dayData, index) => (
      <div key={index} className="space-y-4 flex flex-col justify-center items-center gap-4">
        {/* Day Title */}
        <h2 className="text-[5rem] harry-text" style={{color:"gold"}}>{dayData.day}</h2>
  
        {/* Card Container */}
        <div className="flex flex-wrap gap-8 w-full justify-center items-center">
          {dayData.cards.map((card, idx) => (
            <div
              key={idx}
              className="max-sm:w-full  transition-transform p-8 hover:border-2 border-yellow-300 rounded-3xl"
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
