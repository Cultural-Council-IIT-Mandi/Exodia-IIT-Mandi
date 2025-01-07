"use client";
import React from 'react';
import Image from 'next/image';
import { Lens } from './ui/lens';

const Home_GallerySection = () => {
  return (
    <div className=" gallery max-w-[80%] grid grid-cols-1 gap-[20px] relative max-xl:grid-cols-2 max-xl:row-span-1">
      {/* Top-left item (spans 2 rows, 2 columns) */}
      <div className=" row-span-2 col-span-1 relative flex items-center justify-center max-xl:col-span-2">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1aaaa.jpg"
            alt="tree"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={400}
            objectPosition='bottom'
            className='px-auto mx-auto rounded-3xl border-2 border-gray-500 ' 
          />
        {/* </Lens> */}
      </div>
      <div className=" row-span-2 col-span-1 relative flex items-center justify-center max-xl:hidden">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1aaaa.jpg"
            alt="tree"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={400}
            objectPosition='bottom'
            className='px-auto mx-auto rounded-3xl border-2 border-gray-500 ' 
          />
        {/* </Lens> */}
      </div>

      {/* Top-right vertical item (spans 4 rows) */}
      <div className=" col-span-1 row-span-4 relative flex items-center justify-center max-xl:row-span-2">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1bbbb.JPG"
            alt="mountain"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={200}
            className='border-2 border-gray-500 rounded-3xl ml-14'
          />
        {/* </Lens> */}
      </div>

      {/* Middle-left vertical item (spans 4 rows) */}
      <div className=" row-span-4 col-span-1 relative flex items-center justify-center max-xl:row-span-2">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1cccc.jpg"
            alt="forest"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={200}
            className='border-2 border-gray-500 rounded-3xl ml-4 mt-5'
          />
        {/* </Lens> */}
      </div>

      {/* Middle square item (spans 2 rows) */}
      {/* <div className=" row-span-2 col-span-1 relative">
        // <Lens lensSize={140}>
          <Image
            src="/assets/home-gallery-images/g1dddd.JPG"
            alt="sunset"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={300}
            className='border-2 border-gray-500 rounded-3xl mt-3'
          />
        // </Lens>
      </div> */}
      <div className=" row-span-2 col-span-1 relative flex items-center justify-center max-xl:hidden">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1aaaa.jpg"
            alt="tree"
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={400}
            objectPosition='bottom'
            className='px-auto mx-auto rounded-3xl border-2 border-gray-500 ' 
          />
        {/* </Lens> */}
      </div>
      

      {/* Bottom-wide item (spans 2 rows, 2 columns) */}
      <div className=" col-span-1 row-span-2 relative flex items-center justify-center max-xl:hidden">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1eeee.jpg"
            alt="nature"
            // layout="fill"
            // objectFit="cover"
            height={200}
            width={400}
            className='px-auto mt-14 mx-auto border-2 border-gray-500 rounded-3xl'
          />
        {/* </Lens> */}
      </div>
      <div className=" col-span-1 row-span-2 relative flex items-center justify-center max-xl:col-span-2 max-xl:row-span-1">
        {/* <Lens lensSize={140}> */}
          <Image
            src="/assets/home-gallery-images/g1eeee.jpg"
            alt="nature"
            // layout="fill"
            // objectFit="cover"
            height={200}
            width={400}
            className='px-auto mt-14 mx-auto border-2 border-gray-500 rounded-3xl'
          />
        {/* </Lens> */}
      </div>
    </div>
  );
};

export default Home_GallerySection;
