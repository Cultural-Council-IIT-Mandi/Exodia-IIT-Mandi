import React from 'react';
import './ui/Sponsors.css'

// Define the types for the props
interface SponsorCardProps {
  name: string;
  logo: string;
  link: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, logo, link }) => {
  return (
    <div className="p-4 shadow-lg border-4 border-black rounded-lg text-center transform card-pulse-hover card-rotate-hover">
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} website`}>
        <img
          src={`/images/${logo}`}
          alt={name}
          className="mx-auto mb-4 rounded-full border-2 border-black lazyload"
          loading="lazy"
        />
        <h3 className="text-lg font-semibold text-gold font-serif">{name}</h3>
      </a>
    </div>
  );
};

export default SponsorCard;