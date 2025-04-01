'use client';
import { cardData } from '@/lib/utils';
import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ScheduleSectionPihu = () => {
    const [selectedDay, setSelectedDay] = useState(cardData[0].day); // Default to first day

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Day Selection Tabs */}
            <div className="flex gap-4 justify-center mb-6 mt-[10rem]">
                {cardData.map((dayItem) => (
                    <button
                        key={dayItem.day}
                        onClick={() => setSelectedDay(dayItem.day)}
                        className={`px-4 py-2 rounded-2xl border-2 border-white/[0.2] text-lg font-semibold transition  ${
                            selectedDay === dayItem.day
                                ? 'bg-gray-200 text-gray-700'
                                : 'bg-white/[0.2] text-white hover:bg-gray-300 hover:text-gray-700  '
                        }`}
                    >
                        {dayItem.day}
                    </button>
                ))}
            </div>

            {/* Timeline for the selected day */}
            <VerticalTimeline>
                {cardData
                    .find((dayItem) => dayItem.day === selectedDay)
                    ?.cards.map((card, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work "
                            contentStyle={{ 
                                background: 'rgba(255, 255, 255, 0.05)', 
                                backdropFilter: 'blur(12px)', 
                                border: '2px solid rgba(255, 255, 255, 0.1)', 
                                borderRadius: '2rem', 
                                // color: '#fff' 
                            }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                            date={card.time} // Event timing as the date
                            iconStyle={{ background: 'rgb(256,256,256)', color: '#fff' }}
                        >
                            <div className=" p-2 flex flex-col gap-6 ">
                               <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="glass border-2 w-[20rem] border-white/[0.2] rounded-3xl object-cover"
                                />  
                                <div className='glass border-2 border-white/[0.2] rounded-3xl p-2'>
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                    <p className="text-gray-600">{card.description}</p>
                                    <p className="text-sm text-gray-500">{card.location}</p>
                                    <p className="font-bold text-blue-600">{card.price}</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    ))}
            </VerticalTimeline>
        </div>
    );
};

export default ScheduleSectionPihu;
