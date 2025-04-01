import React from 'react';
import './style.css'

interface TeamCardsProps {
  name: string;
  src: string;
  instagram: string;
  email: string;
  linkedin: string;
}

const TeamCards: React.FC<TeamCardsProps> = (props) => {
  return (
    <div className='card-container'>
      <div className="name">{props.name}</div>
      <div className="image">
        <img src={props.src} alt={props.name} />
      </div>
      <div className="buttons">
        <button className="instagram">
          <a href={props.instagram} target="_blank" rel="noopener noreferrer">
            <img src="/icons/socialmedia2/instagram.png" alt="Instagram" />
          </a>
        </button>
        <button className="email">
          <a href={`mailto:${props.email}`}>
            <img src="/icons/socialmedia2/email.png" alt="Email" />
          </a>
        </button>
        <button className="linkedin">
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/icons/socialmedia2/linkedin.png" alt="LinkedIn" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default TeamCards;
