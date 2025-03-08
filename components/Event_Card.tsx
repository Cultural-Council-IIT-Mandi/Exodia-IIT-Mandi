import React, { useState } from 'react';
import './ui/Card.css';  // Import your CSS file
import Link from 'next/link';

interface CardProps {
    imageUrl: string;   // Image URL for the background image
    title: string;      // Title of the card (e.g., card name)
    description: string; // Short description of the card
    location: string;    // Location of the card
    price: string;       // Price of the card (if relevant)
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, location, price }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={`/eventDetail/${title}`} className="event-card">
            <div
                className={`card border-2 border-yellow-300 rounded-3xl transition-transform duration-1000 ease-in-out ${isHovered ? 'rotateY-180' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setTimeout(() => setIsHovered(false), 1000)} // Ensures full animation before reversing
            >
                <div className="card-img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="card-body">
                    <span className="bg"></span>
                    <span className="bg"></span>
                    <span className="bg"></span>
                    <div className="content flex flex-col justify-center items-center">
                        <h2 className="title">{title}</h2>  {/* Title */}
                        <p className="short-description">{description}</p>  {/* Short description */}
                        <p className="location">Loc: {location}</p>  {/* Location */}
                        <p className="price">Price: {price}</p>  {/* Price */}
                        <button className="register-button">Register Now</button>  {/* Register button */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
