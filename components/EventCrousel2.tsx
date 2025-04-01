import React, { useEffect } from 'react';
import './ui/slider.css';

function EventCrousel2() {
  useEffect(() => {
    const spans = ["#slider-span1", "#slider-span2", "#slider-span3", "#slider-span4", "#slider-span5"];
    let currentIndex = 0;
    

    const interval = setInterval(() => {
     if(typeof window != undefined)
     {
      const scrollPosition = window.scrollY; // Store the current scroll position
      currentIndex = (currentIndex + 1) % spans.length; // Cycle through the span IDs
      window.location.hash = spans[currentIndex]; // Update the hash to the next span
      window.scrollTo(0, scrollPosition); // Update the hash to the next span
     }
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div className="slide-container">
        <span className="slider-span" id="slider-span1"></span>
        <span className="slider-span" id="slider-span2"></span>
        <span className="slider-span" id="slider-span3"></span>
        <span className="slider-span" id="slider-span4"></span>
        <span className="slider-span" id="slider-span5"></span>

        <div className="image-slider">
          <div className="slides-div" id="slide-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItDwbXWQwutfNFatAc0hP78RwDj4pdYSsWQ&s" alt="" className="img" id="img1" />
            <a href="#slider-span1" className="button" id="button-1"></a>
          </div>
          <div className="slides-div" id="slide-2">
            <img src="https://library.iitmandi.ac.in/gallery/_data/i/upload/2023/04/15/20230415115638-17032356-me.jpg" alt="" className="img" id="img2" />
            <a href="#slider-span2" className="button" id="button-2"></a>
          </div>
          <div className="slides-div" id="slide-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmuyw3dWRRE9aX6x4AD4PH9w1s_4osH9HVQ&s" alt="" className="img" id="img3" />
            <a href="#slider-span3" className="button" id="button-3"></a>
          </div>
          <div className="slides-div" id="slide-4">
            <img src="https://i.ytimg.com/vi/TD2qFFAoaZk/maxresdefault.jpg" alt="" className="img" id="img4" />
            <a href="#slider-span4" className="button" id="button-4"></a>
          </div>
          <div className="slides-div" id="slide-5">
            <img src="https://i.ytimg.com/vi/OA-E8I677CE/maxresdefault.jpg" alt="" className="img" id="img5" />
            <a href="#slider-span5" className="button" id="button-5"></a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default EventCrousel2;
