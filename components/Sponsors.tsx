import React from 'react';
import SponsorCard from './SponsorCard';
import './ui/Sponsors.css';

// Define the type for the sponsor objects
interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

const sponsors: Sponsor[] = [
  { name: 'Sponsor 1', logo: 'logo1.png', link: 'https://sponsor1.com' },
  { name: 'Sponsor 2', logo: 'logo2.png', link: 'https://sponsor2.com' },
  { name: 'Sponsor 3', logo: 'logo3.png', link: 'https://sponsor3.com' },
];

const Sponsors: React.FC = () => {
  return (
    <div className="py-8">
      <h1
        className="text-center mb-6"
        style={{
          fontFamily: 'HarryP',
          fontSize: '6rem',
          color: '#B22222',
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9), -1px -1px 10px rgba(139, 0, 0, 0.8)',
          animation: 'titleAnimation 1s ease-in-out',
        }}
      >
        Our Sponsors
      </h1>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="card-slide-in"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <SponsorCard name={sponsor.name} logo={sponsor.logo} link={sponsor.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;