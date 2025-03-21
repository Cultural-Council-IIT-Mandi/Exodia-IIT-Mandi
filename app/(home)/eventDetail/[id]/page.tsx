"use client";

import { motion } from "framer-motion";
import React, { use } from 'react';
import { ScrollText, Calendar, MapPin, User, Wand, BadgeIndianRupee } from 'lucide-react';
import { eventDetails } from '@/lib/utils';
import { BackgroundBeams } from "@/components/ui/Card-background";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";

// Types
type Params = {
  id: string;
}
interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  spellCategory: string;
  Fee: string;
  maxParticipants: number;
  currentParticipants: number;
  imageUrl: string;
}

// Reusable Components
const EventInfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-3 text-gold">
    <Icon size={20} />
    <span className="font-semibold">{label}:</span>
    <span className="text-white">{value}</span>
  </div>
);

const ParticipantCounter = ({ current, max }: { current: number, max: number }) => (
  <div className="flex items-center gap-2 mt-4">
    <div className="w-full bg-amber-200 rounded-full h-4">
      <div
        className="bg-amber-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${(current / max) * 100}%` }}
      />
    </div>
    <span className="text-white font-bold">
      {current}/{max}
    </span>
  </div>
);

const RegisterButton = () => (
  <button className=" bg-white hover:bg-amber-700 text-black font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
    Join this Magical Event
  </button>
);

// Function to get event details by ID
const getEventDetails = (id: string): EventDetail | undefined => {
  const event = eventDetails.find(event => event.title === id);

  if (event) {
    return event;
  }

  //Handle error
  return undefined;
}


// Main Component
const EventDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // const id_ = params!.id;
  const { id } = use(params);// DEPLOYMENT FIX
  const event = getEventDetails(id);

  if (!event) {
    return <div>Event not found</div>;  //show a custom 404 page or a loading spinner
  }

  return (
    <>

      <Navbar />

      <FloatingNav namex="P" className="max-md:hidden" />

      <motion.div
        className="mx-auto z-10 shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 50 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }} // Animation timing 
      >
        {/* <div className="w-full min-h-screen bg-neutral-900 relative flex flex-col items-center justify-center antialiased py-12"> */}
        <div className="min-h-screen flex justify-center items-center">
          <div className=" w-[60%] flex flex-col justify-center items-center gap-10 glass border-white/[0.2] z-10 rounded-lg">
            <div className="text-5xl font-serif text-white p-2">
              {event.title}
            </div>
            <div className="flex justify-center items-center gap-10 w-full">
              {/* Event Image */}
              <div className="relative h-64 rounded-lg overflow-hidden w-1/2 flex justify-center items-center p-2">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h2 className="text-white text-xl font-bold">{event.title}</h2>
                </div>
              </div>

              {/* Event Information */}
              <div className="w-1/2 flex flex-col justify-center items-center gap-10">
                <div className="grid gap-4 glass p-10">
                  <EventInfoItem
                    icon={Calendar}
                    label="Date"
                    value={event.date}
                  />
                  <EventInfoItem
                    icon={MapPin}
                    label="Location"
                    value={event.location}
                  />
                  <EventInfoItem
                    icon={User}
                    label="Organizer"
                    value={event.organizer}
                  />
                  <EventInfoItem
                    icon={BadgeIndianRupee}
                    label="Fee"
                    value={event.Fee}
                  />
                </div>

                {/* Description */}
                <div className="glass p-10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ScrollText size={20} className="text-gold" />
                    <h3 className="font-bold text-white">Event Description</h3>
                  </div>
                  <p className="text-gold leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Participants Counter */}
                {/* <div>
                    <h3 className="font-bold text-white mb-2">Available Spots</h3>
                    <ParticipantCounter
                      current={event.currentParticipants}
                      max={event.maxParticipants}
                    />
                  </div> */}

                {/* Register Button */}
                <RegisterButton />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default EventDetailsPage;