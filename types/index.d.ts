// all types will be declared here 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Home Page Types 



interface ColumnProps {
  images: string[];
  y: any;
}

interface CardProps {
  card: {
    imageUrl: string;
    title: string;
    description: string;
    location: string;
    price: string;
  };
}

export interface Event  {
  name: string;
  imageUrl: string;
};



export interface CardStackedProps  {
  scrollYProgress: any;
};





// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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