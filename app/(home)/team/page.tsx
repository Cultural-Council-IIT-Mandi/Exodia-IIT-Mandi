"use client";
import Footer from '@/components/Footer';
// import Scrollbar from '@/components/Team_scrollbar';
// import Sidebar from '@/components/Team_sidebar';
// import React from 'react';


// const page: React.FC = () => {
//   const handleTeamClick = (teamId: string) => {
//     const teamBox = document.getElementById(teamId);
//     if (teamBox) {
//       window.scrollTo({
//         top: teamBox.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="container flex">
//       {/* <Sidebar onTeamClick={handleTeamClick} /> */}
//       <Sidebar />
//       <Scrollbar />
//     </div>
//   );
// };

// export default page;



import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FocusCards } from '@/components/ui/focus-cards';
import { aboutNPfont, aboutNPfont11, aboutNPfont4 } from '@/lib/font.utils';
import { navItems, teamsList } from '@/lib/utils';
import React from 'react';


const cards = [
  {
    title: "Forest Adventure",
    src: "/assets/background.jpg",
  },
  {
    title: "Valley of life",
    src: "/assets/background.jpg",
  },
];


const Page = () => {
  return (
    <>
      <Navbar />

      <FloatingNav  namex="P" className="max-md:hidden" />

      <div className="p-8 mt-8 font-sans">

        <h1 className={`text-center text-[6rem] max-2xl:text-[6rem] max-xl:text-[5rem] max-lg:text-[5rem] max-md:text-[4rem] max-sm:text-[3rem] text-white font-bold mb-12 ${aboutNPfont11.className}`}>Organizing Team</h1>
        {teamsList.map((team) => (
          <div key={team.id} className="mb-[5rem] " id={team.id}>
            <h2 className={`text-[2rem] max-sm:text-[1.4rem] text-white font-semibold mb-6 ${aboutNPfont11.className}`}>{team.name}</h2>
           
            <FocusCards cards={team.members} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Page;

