"use client";
import Image from "next/image";
import React from "react";

// Define data structures for clarity
interface LinkItem {
  href: string;
  label: string;
}

interface Hour {
  day: string;
  time: string;
}

// Mock Data
const quickLinks: LinkItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#menu", label: "Menu" },
  { href: "#book", label: "Book Event" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
];

const openHours: Hour[] = [
  { day: "Mon - Fri", time: "11:00 AM - 5:45 PM" },
  { day: "Sat", time: "10:30 AM - 5:45 PM" },
  { day: "Sun", time: "11:00 AM - 5:45 PM" },
];

const FooterSection: React.FC = () => {
  // Simple scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Top Section: Logo, Description, Links, Hours */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* 1. Logo and Description */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Image
                src="/celebration_village_logo.png"
                alt="Celebration Village Logo"
                className=""
                width={110}
                height={72}
              />
              <div className="text-lg font-semibold uppercase text-white">
                Celebration village
              </div>
            </div>

            <p className="text-sm text-neutral-300 max-w-sm mb-6 leading-relaxed">
              &ldquo;Empire Banquet is not just a venue but Grand Venue for
              Gracious Occasions&ldquo;. With one large we can accommodate with
              either one large gathering or two gatherings.
            </p>

            {/* Social Icons (using simple buttons/icons) */}
            <div className="flex space-x-3 mt-4">
              <button className="w-10 h-10 rounded-full bg-amber-600 text-black flex items-center justify-center hover:bg-amber-500 transition-colors">
                {/* Facebook Icon Placeholder */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2V12h2V9.5c0-2.06 1.26-3.21 3.1-3.21.88 0 1.63.09 1.85.13v2.16h-1.21c-1.05 0-1.26.5-1.26 1.24V12h2.56l-.41 3H13v6.79c4.56-.93 8-4.96 8-9.8V12z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-amber-600 text-black flex items-center justify-center hover:bg-amber-500 transition-colors">
                {/* Instagram Icon Placeholder */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2.7c-2.3 0-4.1 1.8-4.1 4.1v7.6c0 2.3 1.8 4.1 4.1 4.1h7.6c2.3 0 4.1-1.8 4.1-4.1V8.7c0-2.3-1.8-4.1-4.1-4.1H7.6zm8.7 1.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-amber-600 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-300 text-sm hover:text-amber-500 transition-colors"
                  >
                    - {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Open Hours */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-amber-600 inline-block pb-1">
              Open Hours
            </h3>
            <div className="bg-neutral-800 p-6 rounded-lg shadow-inner">
              <ul className="space-y-4">
                {openHours.map((hour, index) => (
                  <li
                    key={index}
                    className={`flex justify-between text-sm ${
                      index < openHours.length - 1
                        ? "border-b border-neutral-700 pb-4"
                        : ""
                    }`}
                  >
                    <span className="text-neutral-200">{hour.day}</span>
                    <span className="text-amber-500 font-medium">
                      {hour.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar Section */}
      <div className="bg-neutral-800 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-300">
            {/* Address */}
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <span className="font-semibold text-white block">Address</span>
                4826 11 Street NE, Calgary, Alberta T2E 2W7, Canada
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 15.5c-1.25 0-2.45-.21-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.24-1.02C8.71 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
              <div>
                <span className="font-semibold text-white block">Call Us</span>
                403-390-3000
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div>
                <span className="font-semibold text-white block">Email Us</span>
                info@empirebanquet.ca
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-neutral-900 py-4 border-t border-neutral-800 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p className="mb-2 md:mb-0">
            © Copyright 2022{" "}
            <span className="text-amber-500">Empire Banquet Hall</span> All
            Rights Reserved.
          </p>
          <p>
            Designed By <span className="text-amber-500">TasTechnologies</span>
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 md:right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-amber-600 text-black flex items-center justify-center shadow-lg hover:bg-amber-500 transition-colors z-20"
          aria-label="Scroll to top"
        >
          {/* Up Arrow Icon */}
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
