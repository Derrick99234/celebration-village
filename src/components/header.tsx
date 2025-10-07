import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

function Header() {
  return (
    <header>
      <div className="bg-white flex p-3 justify-around items-center">
        <div className="flex text-sm gap-6">
          <address className="cursor-pointer flex gap-2 items-center">
            <SlLocationPin className="text-yellow-800" /> 4826 11 Street Ne,
            Calgary, Alberta T2E 2W7, Canada
          </address>
          <span className="cursor-pointer flex gap-2 items-center">
            <MdOutlineLocalPhone className="text-yellow-800" /> +1 (555)
            123-4567
          </span>
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <RiFacebookFill />
          <IoLogoInstagram />
        </div>
      </div>
      <nav className="bg-yellow-600 text-white flex justify-center gap-8 p-4">
        <Image
          src="/globe.svg"
          alt="Logo"
          width={120}
          height={60}
          className="absolute left-4 top-4 z-50"
        />

        <ul className="flex gap-8">
          <li className="hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/menu">Our Menu</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/book-event">Book Event</Link>
          </li>
          {/* <li className="hover:text-gray-300">
            <Link href="/gallery">Gallery</Link>
          </li> */}
          <li className="hover:text-gray-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
