"use client";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div className="flex max-[974px]:flex-wrap items-center justify-between gap-16 max-w-7xl mx-auto min-h-screen px-6">
      {/* Left Section: Image */}
      <div className="w-1/2 max-[974px]:w-full">
        <div className="relative border-r-4 border-yellow-700 p-6 overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114_1280.jpg" // Place the image in the public folder
            alt="Empire Banquet Hall"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Right Section: Text Content */}
      <div className="w-1/2 max-[974px]:w-full max-[974px]:mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          <span className="text-yellow-800">Celebration Village</span>
        </h1>
        <p className="text-gray-700 mb-6">
          Celebration Village is more than just a venue—it’s a place where
          cherished moments come to life through celebration, passion, and
          laughter. With years of experience in the event industry, Celebration
          Village stands out as Calgary’s premier destination for hosting
          unforgettable occasions.
        </p>
        <p className="text-gray-700 mb-6">
          From intimate gatherings to grand celebrations, social events to
          corporate functions, our dedicated team treats every occasion with the
          utmost care and attention. We pride ourselves on delivering
          exceptional service and creating memories that last a lifetime. Ready
          to plan your next event? Contact us today or visit our stunning venue
          to learn more.
        </p>
        <Link
          href="/about"
          className="bg-yellow-700 text-white py-2 px-8 rounded-lg font-semibold inline-flex items-center gap-2"
        >
          About Us <GoArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default About;
