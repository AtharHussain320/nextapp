"use client"
import Image from "next/image";
import { useState } from "react";

export default function Slide(){
  // Array of image URLs
  const images = [
    "/c.jpg",
    "/del.jpg",
    "/hp.jpg",
    "/hk.jpg",
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image (optional)
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[100%] h-[400px] bg-white flex flex-col justify-around items-center md:hidden  ">
      <div className="image-container">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width = {300}
          height = {200}
          className="rounded-full"
        />
      </div>
      <div className="w-[100%] flex justify-center items-center gap-20">
        <button onClick={handlePrevious} className="py-4 px-8 bg-amber-500 rounded-full text-black md:hidden">Previous</button>
        <button onClick={handleNext} className="py-4 px-12 bg-amber-500 rounded-full text-black md:hidden">Next</button>
      </div>
    </div>
  );
};



