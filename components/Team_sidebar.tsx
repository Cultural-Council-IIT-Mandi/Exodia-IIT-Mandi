import React from 'react';

interface SidebarProps {
  onTeamClick: (teamId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onTeamClick }) => {
  const teams = [
    { id: 'team1', name: 'Publicity and Media' },
    { id: 'team2', name: 'Sponsorship' },
    { id: 'team3', name: 'Decor' },
    { id: 'team4', name: 'Content' },
    { id: 'team5', name: 'Security' },
    { id: 'team6', name: 'Web-dev' },
    { id: 'team7', name: 'Event management' },
    { id: 'team8', name: 'Hospitality' },
  ];

  return (
    <div className="side-bar bg-black text-cadetblue flex flex-col items-start justify-center h-400px w-30vw shadow-lg fixed mr-60px rounded-lg bottom-60px">
      {teams.map((team) => (
        <div
          key={team.id}
          className="team-name cursor-pointer"
          onClick={() => onTeamClick(team.id)}
        >
          {team.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;