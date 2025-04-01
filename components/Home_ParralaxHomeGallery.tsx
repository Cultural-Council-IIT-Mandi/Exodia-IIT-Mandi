// components/AnimatedComponent.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imgs: string[] = [
  'https://images.unsplash.com/photo-1586985289071-36f62f55ce44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM0MTh8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1593424718424-cf4d83f3def1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM2MDh8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1475855841503-917d97ca77b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM0MTh8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM0MTh8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM1NjN8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1560180474-e8563fd75bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM1NzV8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM1NzV8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM2ODR8&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM3NTM3MDZ8&ixlib=rb-4.0.3&q=80&w=400',
];

const colCount = 5;
const imgCount = 3;
const distance = 100;

const AnimatedComponent: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define scroll-based animation configuration for each column.
    const getScrollConfig = (from: number, to: number): [{ y: number }, { y: number; scrollTrigger: ScrollTrigger.Vars }] => {
      return [
        { y: from },
        {
          y: to,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          },
        },
      ];
    };

    // Animate each image column.
    const cols = gsap.utils.toArray('.col');
    cols.forEach((col, i) => {
      const val = (i % 2 ? 1 : -1) * distance;
      gsap.fromTo(col as Element, ...getScrollConfig(-val, val));
    });

   
  }, []);

  return (
    <div
      className="min-h-screen text-[#d4a373] font-sans" >
      {/* Intro Section */}
     
      

      {/* Image Grid */}
      <div
        ref={wrapperRef}
        className="img-wrapper w-[80vw] max-w-full h-[80vh] mx-auto my-4 rounded-[0.3rem] overflow-hidden"
      >
        <div className="inner h-full flex items-center justify-center gap-[0.3rem] transform rotate-[-15deg]">
          {Array.from({ length: colCount }).map((_, i) => (
            <div key={i} className="col flex-1 flex flex-col gap-[0.3rem]">
              {Array.from({ length: imgCount }).map((_, j) => {
                const src = imgs[(i * imgCount + j) % imgs.length];
                return (
                  <img
                    key={j}
                    src={src}
                    alt={`Image ${i * imgCount + j}`}
                    className="block w-full aspect-[3/4] object-cover rounded-[0.16rem] cursor-crosshair"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AnimatedComponent;
