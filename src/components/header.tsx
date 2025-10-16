"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineLocalPhone, MdClose } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { HiMenu } from "react-icons/hi"; // Icon for hamburger menu

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      <li
        className="hover:text-gray-300 transition duration-150"
        onClick={toggleMenu}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className="hover:text-gray-300 transition duration-150"
        onClick={toggleMenu}
      >
        <Link href="/about">About Us</Link>
      </li>
      <li
        className="hover:text-gray-300 transition duration-150"
        onClick={toggleMenu}
      >
        <Link href="/services">Services</Link>
      </li>
      <li
        className="hover:text-gray-300 transition duration-150"
        onClick={toggleMenu}
      >
        <Link href="/menu">Our Menu</Link>
      </li>
      {/* <li className="hover:text-gray-300 transition duration-150">
        <Link href="/packages" className="font-semibold text-white">
          Packages
        </Link>
      </li> */}
      <li
        className="hover:text-gray-300 transition duration-150"
        onClick={toggleMenu}
      >
        <Link href="/book-event">Book Event</Link>
      </li>
      <li
        className="hover:text-gray-300 transition duration-150"
        onClick={toggleMenu}
      >
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 w-full z-50 shadow-lg">
      {/* --- 1. Top Contact Bar (Hidden on Mobile) --- */}
      <div className="hidden sm:flex bg-white p-3 justify-around items-center border-b border-gray-100">
        <div className="flex text-sm gap-6">
          <address className="flex gap-2 items-center text-gray-700">
            <SlLocationPin className="text-amber-600" />
            <span className="hidden lg:inline">
              4826 11 Street Ne, Calgary, Alberta T2E 2W7, Canada
            </span>
            <span className="lg:hidden">4826 11 St Ne, Calgary, AB</span>
          </address>
          <span className="flex gap-2 items-center text-gray-700 font-medium">
            <MdOutlineLocalPhone className="text-amber-600" />
            +1 (587) 968 5657
          </span>
        </div>
        {/* Social Icons - Always visible on desktop */}
        <div className="flex gap-4 text-xl text-gray-600">
          <RiFacebookFill className="cursor-pointer hover:text-yellow-800 transition" />
          <IoLogoInstagram className="cursor-pointer hover:text-yellow-800 transition" />
        </div>
      </div>

      {/* --- 2. Main Navigation Bar --- */}
      <nav className="bg-black text-white flex justify-between lg:justify-center items-center p-3 lg:p-4">
        {/* Logo (Adjusted position and size for better flow) */}
        <div className="h-10 w-[100px] sm:w-[120px] ml-4 lg:ml-0 z-100">
          <Image
            src="/celebration_village_logo.png"
            alt="Celebration Village Logo"
            className="absolute left-4 top-0"
            width={110}
            height={72}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">{navLinks}</ul>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="lg:hidden p-2 mr-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <MdClose /> : <HiMenu />}
        </button>
      </nav>

      {/* --- 3. Mobile Dropdown Menu --- */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] w-full bg-black transition-all duration-300">
          <ul className="flex flex-col gap-2 p-4 pt-16 text-white text-lg font-medium">
            {navLinks}
            <li className="pt-2 mt-2 border-t border-amber-500">
              <address className="flex gap-2 items-center text-sm font-normal text-amber-100">
                <SlLocationPin /> 4826 11 St Ne, Calgary, AB
              </address>
            </li>
            <li>
              <span className="flex gap-2 items-center text-sm font-normal text-amber-100">
                <MdOutlineLocalPhone /> +1 (587) 968 5657
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
