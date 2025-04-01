import localFont from "next/font/local";
import React, { useState, useEffect } from "react";

const aboutNPfont = localFont({
    src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.ttf',
    display: 'swap',
})

const aboutNPfont2 = localFont({
    src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf',
    display: 'swap',
})

const aboutNPfont3 = localFont({
    src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-BoldItalic.ttf',
    display: 'swap',
})

const aboutNPfont4 = localFont({
    src: '../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf',
    display: 'swap',
})


// Define types for props
type QuestionItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQProps = {
  data: QuestionItem[];
};

type SearchbarProps = {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type QuestionProps = {
  question: string;
  answer: string;
};

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<QuestionItem[]>(data);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const results = data.filter((item) =>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className={`text-2xl  text-black mb-10 ${aboutNPfont2.className}`}>
        How can we help you?
      </h2>
      <Searchbar onSearchChange={handleSearchChange} />
      <section className="faq mt-6">
        {searchResults.map((item) => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

const Searchbar: React.FC<SearchbarProps> = ({ onSearchChange }) => {
  return (
    <form className="flex items-center w-full md:w-1/2 mx-auto bg-black rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 20a10 10 0 1110-10 10 10 0 01-10 10zm0-18a8 8 0 108 8 8 8 0 00-8-8zm10.707 19.293l-3.387-3.387A9.94 9.94 0 0018 16.83l3.387 3.387a1 1 0 11-1.414 1.414z" />
        </svg>
      </div>
      <input
        className={`flex-grow py-3 px-4 text-center  text-white placeholder-white focus:outline-none bg-black ${aboutNPfont4.className}`}
        type="text"
        placeholder="Describe your issue"
        onChange={onSearchChange}
      />
    </form>
  );
};

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="w-full md:w-1/2 mx-auto border-b border-black py-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleActive}>
        <h3 className={`text-lg font-medium text-black ${aboutNPfont3.className}`}>{question}</h3>
        <button className="focus:outline-none">
          <svg
            className={`w-5 h-5 text-black transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 16.585l5.707-5.707a1 1 0 00-1.414-1.414L12 13.757l-4.293-4.293a1 1 0 00-1.414 1.414L12 16.585z" />
          </svg>
        </button>
      </div>
      {isActive && <p className={`text-sm text-black mt-2 ${aboutNPfont4.className}`}>{answer}</p>}
    </div>
  );
};

// Example Data
const questions: QuestionItem[] = [
  {
    id: 1,
    question: "Popular Articles",
    answer: "Details about popular articles.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer: "Details about fixing problems and removals.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer: "Details about browsing the web.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer: "Details about searching on your device.",
  },
];

// export default function App() {
//   return <FAQ data={questions} />;
// }


export default FAQ;