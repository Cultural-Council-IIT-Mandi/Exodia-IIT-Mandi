"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WizardCarousel = () => {
  // Sample images
  const images = [
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-500x500.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="text-4xl text-white text-center p-10 font-sans"> Page {currentIndex+1} of {images.length}</div>
      <div className="max-w-4xl mx-auto">
        {/* Main Image Container */}
        <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden bg-gray-800 shadow-xl">
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              isAnimating
                ? direction === 'right'
                  ? '-translate-x-full'
                  : 'translate-x-full'
                : 'translate-x-0'
            }`}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-500/80 hover:bg-amber-600 text-white p-2 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-500/80 hover:bg-amber-600 text-white p-2 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="relative">
          <div className="flex space-x-2 overflow-x-auto py-2 px-4 bg-gray-800 rounded-lg scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-700">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`flex-shrink-0 transition-all duration-300 ${
                  idx === currentIndex
                    ? 'ring-2 ring-amber-500 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-20 w-32 object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardCarousel;
