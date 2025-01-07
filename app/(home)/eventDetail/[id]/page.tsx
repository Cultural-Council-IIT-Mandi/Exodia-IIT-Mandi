import React from 'react';
import { ScrollText, Calendar, MapPin, User, Wand } from 'lucide-react';


// Types
interface Params {
  id: string;
}
interface EventDetail {
  id_: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  spellCategory: string;
  maxParticipants: number;
  currentParticipants: number;
  imageUrl: string;
}

// Reusable Components
const EventInfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-3 text-amber-700">
    <Icon size={20} />
    <span className="font-semibold">{label}:</span>
    <span className="text-amber-900">{value}</span>
  </div>
);

const ParticipantCounter = ({ current, max }: { current: number, max: number }) => (
  <div className="flex items-center gap-2 mt-4">
    <div className="w-full bg-amber-200 rounded-full h-4">
      <div 
        className="bg-amber-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${(current/max) * 100}%` }}
      />
    </div>
    <span className="text-amber-900 font-bold">
      {current}/{max}
    </span>
  </div>
);

const RegisterButton = () => (
  <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
    Join this Magical Event
  </button>
);

// Mock data (to be replaced with actual API call)
const getEventDetails = (id: string): EventDetail => ({
  id_:id,
  title: "Pro Night",
  description: "Experience DJ with you friends",
  date: "3 April, 2025",
  location: "Hockey Ground North Campus",
  organizer: "Artist Name",
  spellCategory: "Defense",
  maxParticipants: 100,
  currentParticipants: 15,
  imageUrl: "/api/placeholder/800/400"
});

// Main Component
const EventDetailsPage = ({ params }: { params: Params }) => {
  const id_ = params?.id; // Correctly access 'id' from params
  console.log("Event ID:", id_); // Debugging line to check if 'id' is passed correctly
  const event = getEventDetails(id_);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
          <header>
            <h1 className="text-3xl font-serif text-amber-900">
              {event.title}+{id_}
            </h1>
          </header>
          <div>
            <div className="space-y-8">
              {/* Event Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
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
              <div className="grid gap-4">
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
                  icon={Wand}
                  label="Spell Category"
                  value={event.spellCategory}
                />
              </div>

              {/* Description */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ScrollText size={20} className="text-amber-700" />
                  <h3 className="font-bold text-amber-900">Event Description</h3>
                </div>
                <p className="text-amber-800 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Participants Counter */}
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Available Spots</h3>
                <ParticipantCounter 
                  current={event.currentParticipants}
                  max={event.maxParticipants}
                />
              </div>

              {/* Register Button */}
              <RegisterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;