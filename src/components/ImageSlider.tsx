"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Content = {
  image: string;
  h1: string;
  text: string;
};

interface ImageSliderProps {
  content: Content[]; // Array of image URLs to be displayed
}

const ImageSlider: React.FC<ImageSliderProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the current slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 8000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [content.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {content.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            {/* Image */}
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover"
              layout="responsive"
              width={700}
              height={475}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 h-screen flex-col flex pt-28">
              <div className="max-w-4xl pl-10">
                <h2 className="text-white text-7xl font-semibold mb-7">
                  {slide.h1}
                </h2>
                <p className="mt-2 text-sm text-white">{slide.text}</p>
                <button className="mt-8 px-6 py-2 bg-yellow-700 text-white cursor-pointer">
                  Explore your needs
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
