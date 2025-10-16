"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// NOTE: Since the file must be self-contained, the Next.js 'Image' component
// has been replaced with a standard responsive 'img' tag.

type Content = {
  image: string;
  h1: string;
  text: string;
  ctaLink: string;
};

interface ImageSliderProps {
  content: Content[]; // Array of slides (image, h1, text)
}

// Example content structure (for preview purposes, assuming data is passed via props)
// const DEFAULT_CONTENT: Content[] = [
//   {
//     image:
//       "https://placehold.co/1920x1080/461F46/FFFFFF?text=Celebration+Village+Slide+1",
//     h1: "Your Perfect Event Starts Here",
//     text: "From intimate gatherings to grand celebrations, we provide the perfect setting and professional service to make your vision a reality. Let us handle the details while you enjoy the moment.",
//   },
//   {
//     image:
//       "https://placehold.co/1920x1080/1F4646/FFFFFF?text=Gourmet+Catering+Slide+2",
//     h1: "Exquisite Cuisine, Unforgettable Flavors",
//     text: "Our dedicated culinary team crafts custom menus using the freshest ingredients. Explore our diverse options designed to delight every guest at your special occasion.",
//   },
//   {
//     image:
//       "https://placehold.co/1920x1080/46461F/FFFFFF?text=Versatile+Venues+Slide+3",
//     h1: "Versatile Venues for Any Occasion",
//     text: "Offering flexible spaces that adapt to weddings, corporate functions, and community events. Discover the variety of our beautiful, customizable halls and outdoor areas.",
//   },
// ];

const ImageSlider: React.FC<ImageSliderProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the current slide every 8 seconds (kept from your original code)
  useEffect(() => {
    if (content.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 8000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [content.length]);

  // Handlers for manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  if (content.length === 0) return null;

  return (
    // Ensured container spans full height of the viewport
    <div className="relative w-full overflow-hidden h-screen">
      {/* Slider Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {content.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            {/* Image (Responsive Background) */}
            <Image
              width={1920}
              height={1080}
              src={slide.image}
              alt={`Slide ${index}: ${slide.h1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1920x1080/374151/FFFFFF?text=Image+Loading+Error";
              }}
            />

            {/* Overlay and Content Container: Aligned top-left with fixed spacing */}
            <div className="absolute inset-0 bg-black/60 h-screen flex-col flex pt-36">
              {/* Padding and Max Width reverted to fixed values */}
              <div className="max-w-4xl pl-10 pr-4 w-full">
                {/* Heading: Reverted to fixed 7xl font size and original style */}
                <h1 className="text-white md:text-7xl text-4xl font-semibold mb-7 animate-slide-in text-left">
                  {slide.h1}
                </h1>

                {/* Text: Reverted to fixed sm font size */}
                <p
                  className="mt-2 text-sm text-white max-w-xl text-left opacity-90 leading-relaxed font-light animate-slide-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  {slide.text}
                </p>

                {/* CTA Button - REVERTED TO ORIGINAL STYLE */}
                <Link
                  href={slide.ctaLink}
                  className="mt-8 px-6 py-2 bg-black text-white cursor-pointer inline-block"
                >
                  Explore your needs
                </Link>
              </div>
            </div>

            {/* Simple CSS for content animation */}
            <style>{`
                @keyframes slide-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                /* NOTE: The animate-slide-in class is still applied to the H1 and P tags 
                   for a smooth entrance, but the button itself no longer has the animation. */
                .animate-slide-in { animation: slide-in 0.8s ease-out forwards; }
             `}</style>
          </div>
        ))}
      </div>

      {/* Navigation Dots (Mobile friendly) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-1 h-1 rounded-full transition-colors duration-300 ${
              currentIndex === index
                ? "bg-white scale-125 shadow-md"
                : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons (Hidden on small screens, shown on medium/desktop) */}
      {/* <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition duration-300 hidden md:block z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition duration-300 hidden md:block z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default ImageSlider;
