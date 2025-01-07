import React, { JSX, useEffect, useRef, useState } from 'react';
import './ui/Home_EventsSlide.css';
import Image from 'next/image';

function Home_EventsSlide(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for the scroll container
  const [startAnimation, setStartAnimation] = useState<boolean>(false); // State to track animation start

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let position = 0;
    const scrollSpeed = 5; // Adjust scrolling speed (pixels per frame)

    const initializePosition = () => {
      const containerWidth = scrollContainer.offsetWidth;
      const contentWidth = scrollContainer.scrollWidth / 2;
      position = -(contentWidth / 2 - containerWidth / 2); // Center the first image
      scrollContainer.style.transform = `translateX(${position}px)`;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 150) {
        setStartAnimation(true);
      }
    };

    const scroll = () => {
      if (startAnimation) {
        position -= scrollSpeed;
        scrollContainer.style.transform = `translateX(${position}px)`;

        const scrollWidth = scrollContainer.scrollWidth / 2;

        // Reset position when the first set of images is fully out of view
        if (Math.abs(position) >= scrollWidth) {
          position = 0;
        }
      }

      requestAnimationFrame(scroll);
    };

    // Initialize the starting position
    initializePosition();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Start animation loop
    scroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startAnimation]);

  return (
    <div className="scroll-container">
      <div className="scroll-content" ref={scrollRef}>
        {/* Original Images */}
        <Image src="/assets/background/U4.png" alt="image1" width={800} height={600} />
        <Image src="/assets/background/U1.png" alt="image2" width={300} height={300} />
        <Image src="/assets/background/U4.png" alt="image5" width={300} height={300} />
        <Image src="/assets/background/U6.png" alt="image4" width={300} height={300} />
        <Image src="/assets/background/U4.png" alt="image5" width={300} height={300} />
        <Image src="/assets/background/U5.png" alt="image3" width={300} height={300} />
        <Image src="/assets/background/Head.png" alt="image4" width={300} height={300} />
        <Image src="/assets/background/U7.png" alt="image5" width={300} height={300} />
        {/* Duplicate Images */}
        <Image src="/assets/background/U4.png" alt="image1" width={800} height={600} />
        <Image src="/assets/background/U1.png" alt="image2" width={300} height={300} />
        <Image src="/assets/background/U4.png" alt="image5" width={300} height={300} />
        <Image src="/assets/background/U6.png" alt="image4" width={300} height={300} />
        <Image src="/assets/background/U4.png" alt="image5" width={300} height={300} />
        <Image src="/assets/background/U5.png" alt="image3" width={300} height={300} />
        <Image src="/assets/background/Head.png" alt="image4" width={300} height={300} />
        <Image src="/assets/background/U7.png" alt="image5" width={300} height={300} />
      </div>
    </div>
  );
}

export default Home_EventsSlide;
