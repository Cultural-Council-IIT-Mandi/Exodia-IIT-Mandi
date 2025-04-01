import React from 'react';
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
    return (
       <Link href={`/eventDetail/${title}`}>
         <div className='event-card'>
            <div className="card border-[2.5px] border-white/[0.2] rounded-3xl">
                <div className="card-img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="card-body border-2 border-white/[0.2] glass">
                    <span className="bg"></span>
                    <span className="bg"></span>
                    <span className="bg"></span>
                    <div className="content flex flex-col justify-center items-center">
                        <h2 className="title">{title}</h2>  {/* Title */}
                        <p className="short-description">{description}</p>  {/* Short description */}
                        <p className="location">Loc : {location}</p>  {/* Location */}
                        <p className="price">price : {price}</p>  {/* Price */}
                        <button className="register-button bg-white">Register Now</button>  {/* Register button */}
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Card;

