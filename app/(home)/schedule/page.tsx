"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/lib/utils';
import Footer from '@/components/Footer';
import ScheduleSectionPihu from '@/components/ScheduleSectionPihu';



const Page: React.FC = () => {

  return (

    <div>
      <Navbar />

      <FloatingNav  namex="P" className="max-md:hidden" />
      <main>
      <ScheduleSectionPihu />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
