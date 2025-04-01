// "use client"; // Uncomment if you're using Next.js 13+ with App directory

// import React, { useEffect, useRef, useState } from "react";
// import Head from "next/head";
// // Import Swiper's CSS
// import 'swiper/css';
// import 'swiper/css/effect-coverflow'; // Add this to include the effect's CSS
// import "./ui/EventsSwiper.css";  // Adjust the path to your actual file if needed
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import necessary modules for effect and autoplay
// import { EffectCoverflow, Autoplay } from "swiper";

// const images = [
//   {
//     src: "https://images6.alphacoders.com/304/304604.jpg",
//     title: "Magical Fireworks at Exodia 2024",
//     description: "A stunning view of magical fireworks illuminating the misty night sky at Exodia 2024.",
//   },
//   {
//     src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48264/article_full%403x.jpg",
//     title: "Exodia Skyline",
//     description: "The mesmerizing skyline of IIT Mandi, bathed in a magical glow during Exodia 2024.",
//   },
//   {
//     src: "http://spellshelp.com/upload/medialibrary/e0b/e0b3bd034aaea1136c9de5f97a364d9d.jpg",
//     title: "Magical Campus of IIT Mandi",
//     description: "A captivating view of the IIT Mandi campus surrounded by mystical fog, evoking the spirit of Exodia 2024.",
//   },
//   {
//     src: "https://www.theaureview.com/wp-content/uploads/2020/02/Stranger-Things-is-Coming-to-HHN-2018-1-2048x1173.jpg",
//     title: "Exodia Festivities",
//     description: "An electrifying atmosphere at Exodia 2024, filled with enchanting performances and magical moments.",
//   },
//   {
//     src: "https://images.ctfassets.net/6pezt69ih962/1DyAhWIAnmyzgNjMR8sGdu/8c67663590d07cf31beeee934ed1a9b6/Ticketing_1920x1200.jpg",
//     title: "Exodia's Magical Motorfest",
//     description: "A thrilling display of motor performances, set against the mystical backdrop of Exodia 2024's magical theme.",
//   },
//   {
//     src: "https://wallup.net/wp-content/uploads/2018/09/26/685291-fantasy-mage-wizard-sorcerer-art-artwork-magic-magician.jpg",
//     title: "Magical Sunset at Exodia",
//     description: "A magical sunset casting an otherworldly glow over the Exodia 2024 campus, immersing the festival in mystery.",
//   },
//   {
//     src: "https://multiplayer.net-cdn.it/thumbs/images/2022/03/18/hogwarts-legacy-artwork-_33_jpg_1600x900_crop_q85.jpg",
//     title: "Magical Beach Party",
//     description: "A magical beach party under the moonlight, where the essence of Exodia 2024 comes alive.",
//   },
//   {
//     src: "https://wallpaperaccess.com/full/1430394.jpg",
//     title: "Magical Mountain Adventure",
//     description: "A mystical mountain adventure through enchanted landscapes, symbolizing the spirit of Exodia 2024.",
//   },
// ];

// const SwiperComponent = () => {
//   const [count, setCount] = useState(1);
//   const [delay, setDelay] = useState(500);
//   const swiperRef = useRef(null);

//   // Triggering custom styles on active slide change
//   useEffect(() => {
//     const swiperInstance = swiperRef.current.swiper;
//     swiperInstance.on('slideChange', () => {
//       // Remove scale from all slides
//       const slides = document.querySelectorAll('.swiper-slide img');
//       slides.forEach(slide => {
//         slide.style.transform = 'scale(1)';
//       });
  
//       // Scale the active slide
//       const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
//       const activeImage = activeSlide.querySelector('img');
//       if (activeImage) {
//         activeImage.style.transform = 'scale(1.7) ';  // Scale the active slide
//       }
  
//       // Get all text overlays and apply fade-in/fade-out based on active index
//       const textOverlays = document.querySelectorAll('.text-overlay');
//       textOverlays.forEach((overlay, index) => {
//         if (index === swiperInstance.activeIndex) {
//           overlay.classList.add('fade-in');  // Add fade-in class to active slide
//           overlay.classList.remove('fade-out');  // Remove fade-out class from active slide
//         } else {
//           overlay.classList.add('fade-out');  // Add fade-out class to inactive slides
//           overlay.classList.remove('fade-in');  // Remove fade-in class from inactive slides
//         }
//       });
//     });

//     if (count < 4) {
//       setTimeout(() => setCount(count + 1), delay);
//     } else if (count === 4) {
//       setDelay(1000);
//       setCount(count + 1);
//     }
//   }, [count, delay]);

//   return (
//     <div className="jjk">
//       <Head>
//         <title>Swiper Component</title>
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
//         />
//       </Head>

//       <Swiper
//         ref={swiperRef} // Reference to the Swiper component
//         modules={[EffectCoverflow, Autoplay]} // Ensure the Autoplay module is added here
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 15,
//           stretch: 0,
//           depth: 300,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         loop={true}
//         autoplay={{
//           delay, // 3 seconds
//           disableOnInteraction: false, // Keeps autoplay active even after interaction
//           pauseOnMouseEnter: true, // Pause autoplay when mouse enters the swiper
//         }}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide-content border-2 border-yellow-300">
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 style={{
//                   width: '100%',
//                   height: '160px',
//                   objectFit: 'cover',
//                   transition: 'transform 0.3s ease',
//                 }}
//               />
//               <div
//                 className={`text-overlay ${index === swiperRef.current?.swiper.activeIndex ? 'fade-in' : 'fade-out'}`}
//               >
//                <h2 style={{color:"gold"}}>{image.title}</h2>
//                 <p style={{color:"gold"}}>{image.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperComponent; // DEPLOYMENT FIX



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/autoplay";// Custom CSS for animations
// import { EffectCoverflow, Autoplay } from "swiper/modules";

// interface Image {
//   src: string;
//   title: string;
//   description: string;
// }

// const images: Image[] = [
//   {
//     src: "https://images6.alphacoders.com/304/304604.jpg",
//     title: "Magical Fireworks at Exodia 2024",
//     description: "A stunning view of magical fireworks illuminating the misty night sky at Exodia 2024.",
//   },
//   {
//     src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48264/article_full%403x.jpg",
//     title: "Exodia Skyline",
//     description: "The mesmerizing skyline of IIT Mandi, bathed in a magical glow during Exodia 2024.",
//   },
//   {
//     src: "http://spellshelp.com/upload/medialibrary/e0b/e0b3bd034aaea1136c9de5f97a364d9d.jpg",
//     title: "Magical Campus of IIT Mandi",
//     description: "A captivating view of the IIT Mandi campus surrounded by mystical fog, evoking the spirit of Exodia 2024.",
//   },
//   {
//     src: "https://www.theaureview.com/wp-content/uploads/2020/02/Stranger-Things-is-Coming-to-HHN-2018-1-2048x1173.jpg",
//     title: "Exodia Festivities",
//     description: "An electrifying atmosphere at Exodia 2024, filled with enchanting performances and magical moments.",
//   },
//   {
//     src: "https://images.ctfassets.net/6pezt69ih962/1DyAhWIAnmyzgNjMR8sGdu/8c67663590d07cf31beeee934ed1a9b6/Ticketing_1920x1200.jpg",
//     title: "Exodia's Magical Motorfest",
//     description: "A thrilling display of motor performances, set against the mystical backdrop of Exodia 2024's magical theme.",
//   },
//   {
//     src: "https://wallup.net/wp-content/uploads/2018/09/26/685291-fantasy-mage-wizard-sorcerer-art-artwork-magic-magician.jpg",
//     title: "Magical Sunset at Exodia",
//     description: "A magical sunset casting an otherworldly glow over the Exodia 2024 campus, immersing the festival in mystery.",
//   },
//   {
//     src: "https://multiplayer.net-cdn.it/thumbs/images/2022/03/18/hogwarts-legacy-artwork-_33_jpg_1600x900_crop_q85.jpg",
//     title: "Magical Beach Party",
//     description: "A magical beach party under the moonlight, where the essence of Exodia 2024 comes alive.",
//   },
//   {
//     src: "https://wallpaperaccess.com/full/1430394.jpg",
//     title: "Magical Mountain Adventure",
//     description: "A mystical mountain adventure through enchanted landscapes, symbolizing the spirit of Exodia 2024.",
//   },
// ];


// const SwiperComponent: React.FC = () => {
//   return (
//     <div
//   className="responsive-scale-container"
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "1200px",
//     overflowY: "visible",
//     background: "linear-gradient(to bottom, #0F0C2900, #302B6300, #24243E00)",
//   }}
// >
//       <Swiper
//         modules={[EffectCoverflow, Autoplay]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={5}
//         spaceBetween={-50}
//         coverflowEffect={{
//           rotate: 20,
//           stretch: 0,
//           depth: 150,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         style={{ width: "90%", height: "400px" }}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div
//               className="slide-content"
//               style={{
//                 position: "relative",
//                 overflow: "hidden",
//                 borderRadius: "10px",
//                 boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//                 width: "300px",
//                 height: "200px",
//               }}
//             >
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//               <div
//                 className="slide-text"
//                 style={{
//                   position: "absolute",
//                   bottom: "5%",
//                   left: "5%",
//                   right: "5%",
//                   background: "rgba(0, 0, 0, 0.6)",
//                   color: "white",
//                   padding: "10px",
//                   borderRadius: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 <h2 style={{ fontSize: "16px", margin: "0 0 5px 0" ,color:"gold"}}>{image.title}</h2>
//                 <p style={{ fontSize: "12px", margin: 0 ,color:"gold"}}>{image.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperComponent;

