// "use client";
// import Footer from '@/components/Footer';
// // import Scrollbar from '@/components/Team_scrollbar';
// // import Sidebar from '@/components/Team_sidebar';
// // import React from 'react';


// // const page: React.FC = () => {
// //   const handleTeamClick = (teamId: string) => {
// //     const teamBox = document.getElementById(teamId);
// //     if (teamBox) {
// //       window.scrollTo({
// //         top: teamBox.offsetTop,
// //         behavior: 'smooth',
// //       });
// //     }
// //   };

// //   return (
// //     <div className="container flex">
// //       {/* <Sidebar onTeamClick={handleTeamClick} /> */}
// //       <Sidebar />
// //       <Scrollbar />
// //     </div>
// //   );
// // };

// // export default page;



// import Navbar from '@/components/Navbar';
// import { FloatingNav } from '@/components/ui/floating-navbar';
// import { FocusCards } from '@/components/ui/focus-cards';
// import { aboutNPfont, aboutNPfont11, aboutNPfont4 } from '@/lib/font.utils';
// import { navItems, teamsList } from '@/lib/utils';
// import React from 'react';


// const cards = [
//   {
//     title: "Forest Adventure",
//     src: "/assets/background.jpg",
//   },
//   {
//     title: "Valley of life",
//     src: "/assets/background.jpg",
//   },
// ];


// const Page = () => {
//   return (
//     <>
//       <Navbar />

//       <FloatingNav  namex="P" className="max-md:hidden" />

//       <div className="p-8 mt-8 font-sans">

//         <h1 className={`text-center text-[4rem] max-sm:text-[2rem] text-gold font-bold mb-12 ${aboutNPfont11.className}`}>Organizing Team</h1>
//         {teamsList.map((team) => (
//           <div key={team.id} className="mb-[5rem] " id={team.id}>
//             <h2 className={`text-[2rem] max-sm:text-[1.4rem] text-gold font-semibold mb-6 ${aboutNPfont11.className}`}>{team.name}</h2>
//             {/* <div className="flex flex-row flex-wrap justify-center items-center gap-10"> */}
//               {/* {team.members.map((member, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-lg shadow-md p-4 text-center bg-white"
//                 >
//                   <img
//                     src={member.photo}
//                     alt={member.name}
//                     className="w-full h-40 object-cover rounded-lg mb-4"
//                   />
//                   <h3 className="text-xl font-medium mb-2">{member.name}</h3>
//                 </div>
//               ))} */}
//             <FocusCards cards={team.members} />
//             {/* </div> */}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;


// deploy check

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
