"use client";
import Image from "next/image";
import React, { useState } from "react";

// Define the component for the visual monitor display
const VenueMonitorDisplay: React.FC = () => {
  // This component acts as the visual element on the left side,
  // showcasing the venue setup, mimicking the image provided.
  return (
    <div className="flex justify-center items-center p-8 lg:p-0">
      <div className="relative w-full max-w-lg lg:max-w-xl">
        {/* Simplified Monitor Stand/Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gray-700/50 rounded-b-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] z-0 transform translate-y-1/2"></div>

        {/* Monitor Screen Frame */}
        <div className="relative border-[10px] border-neutral-700 bg-black rounded-lg shadow-2xl z-10 aspect-video overflow-hidden">
          {/* Placeholder for the main venue image */}
          {/* Note: In a real Next.js app, you would use the <Image> component here */}
          <Image
            src="https://cdn.pixabay.com/photo/2020/04/07/18/33/cups-5014444_1280.png"
            width={400}
            height={400}
            alt="Venue setup preview on a monitor"
            className="w-full h-full object-cover opacity-80"
            // Using a simple CSS overlay for the monitor effect
            style={{ filter: "grayscale(20%) brightness(120%)" }}
          />

          {/* Simple Date Overlay for the image effect */}
          <div className="absolute bottom-4 left-4 text-white text-3xl font-serif font-bold tracking-widest">
            June 12, 2023
          </div>
        </div>

        {/* Monitor Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-3 bg-neutral-600 rounded-b-xl z-20"></div>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-1/12 h-6 bg-neutral-700 rounded-b-lg z-10"></div>
      </div>
    </div>
  );
};

// Main Contact Form Component
const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guestCount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/book-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Booking Data Submitted:", data);

        const messageBox = document.getElementById("form-message");
        if (messageBox) {
          messageBox.textContent =
            "✅ Thank you! Your event has been booked successfully. A confirmation email has been sent.";
          messageBox.classList.remove("hidden");
          messageBox.classList.add("opacity-100");
          setTimeout(() => {
            messageBox.classList.add("hidden");
            messageBox.classList.remove("opacity-100");
          }, 4000);
        }

        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          date: "",
          guestCount: "",
          message: "",
        });
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("❌ Something went wrong while submitting your booking.");
    }
  };
  return (
    <div className="bg-white font-sans" id="book">
      <Image
        src="https://cdn.pixabay.com/photo/2019/05/05/17/32/stadium-4181150_1280.jpg"
        alt="Logo"
        width={1000}
        className="w-full h-96 object-cover brightness-50"
        height={400}
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section: Monitor Display */}
          <div className="order-2 lg:order-1">
            <VenueMonitorDisplay />
          </div>

          {/* Right Section: Booking Form */}
          <div className="order-1 lg:order-2">
            {/* Form Header */}
            <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">
              Book <span className="text-amber-600">Event</span>
            </h2>

            <div
              id="form-message"
              className="hidden mb-4 p-3 bg-amber-100 border border-amber-400 text-amber-800 rounded-lg transition-opacity duration-300 opacity-0"
              role="alert"
            >
              Thank you for your inquiry!
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm"
                  required
                />
              </div>

              {/* Row 2: Phone and Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm"
                  required
                />
                <input
                  type="text"
                  name="eventType"
                  placeholder="Event Type"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm"
                  required
                />
              </div>

              {/* Row 3: Date and Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="date" // Using type="date" for native calendar UI
                    name="date"
                    placeholder="mm/dd/yyyy"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm appearance-none"
                    required
                  />
                  {/* Icon placeholder for date input, as seen in the image (removed the default calendar icon) */}
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="number"
                  name="guestCount"
                  placeholder="Desired Guest Count"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm"
                  required
                  min="1"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm resize-y"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="cursor-pointer w-full py-3 mt-6 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition duration-200 transform hover:scale-[1.01]"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
