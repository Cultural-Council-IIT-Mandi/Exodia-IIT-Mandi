"use client";
import React, { useEffect } from 'react';

interface TeamInfo {
  id: string;
  name: string;
  members: {
    name: string;
    photo: string;
    linkedin: string;
    instagram: string;
    github: string;
  }[];
}

const teams: TeamInfo[] = [
  {
    id: 'team1',
    name: 'Publicity and Media',
    members: [
      {
        name: 'Member 1',
        photo: '/path/to/photo1.jpg',
        linkedin: 'https://linkedin.com/in/member1',
        instagram: 'https://instagram.com/member1',
        github: 'https://github.com/member1',
      },
      // more members
    ],
  },
  {
    id: 'team2',
    name: 'Sponsorship',
    members: [
      {
        name: 'Member 1',
        photo: '/path/to/photo1.jpg',
        linkedin: 'https://linkedin.com/in/member1',
        instagram: 'https://instagram.com/member1',
        github: 'https://github.com/member1',
      },
      // more members
    ],
  },
  // more teams
];

const Scrollbar: React.FC = () => {
  useEffect(() => {
    // DEPLOYMENT FIX
    // const checkBoxes = () => {
    //   const triggerBottom = window.innerHeight / 5 * 4;
    //   const boxes = document.querySelectorAll<HTMLDivElement>('.box');

    //   boxes.forEach(box => {
    //     const boxTop = box.getBoundingClientRect().top;

    //     if (boxTop < triggerBottom) {
    //       box.classList.add('show');
    //     } else {
    //       box.classList.remove('show');
    //     }
    //   });
    // };

    // window.addEventListener('scroll', checkBoxes);
    // checkBoxes();

    // return () => {
    //   window.removeEventListener('scroll', checkBoxes);
    // };

    if (typeof window !== 'undefined') {
      const checkBoxes = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const boxes = document.querySelectorAll<HTMLDivElement>('.box');

        boxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top;

          if (boxTop < triggerBottom) {
            box.classList.add('show');
          } else {
            box.classList.remove('show');
          }
        });
      };

      window.addEventListener('scroll', checkBoxes);
      checkBoxes();

      return () => {
        window.removeEventListener('scroll', checkBoxes);
      };
    }
  }, []);

  return (
    <div className="scroll-bar overflow-y-auto ml-35vw">
      {teams.map((team) => (
        <div key={team.id} className="box" id={team.id}>
          <h3>{team.name}</h3>
          <div className="pic-container">
            <div className="pic-holder">
              {team.members.map((member, index) => (
                <div key={index} className="pic">
                  <img src={member.photo} className="member-photo" />
                </div>
              ))}
            </div>
            <div className="content-holder">
              {team.members.map((member, index) => (
                <div key={index} className="content">
                  <h5>{member.name}</h5>
                  <div className="app-icons">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scrollbar;
