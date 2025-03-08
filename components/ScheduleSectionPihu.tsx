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
                        className={`px-4 py-2 rounded-md text-sm font-semibold transition hover:bg-blue-600 ${
                            selectedDay === dayItem.day
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                            date={card.price} // Event timing as the date
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <div className="bg-white shadow-lg rounded-lg p-4 flex gap-4">
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div>
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
