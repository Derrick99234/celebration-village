"use client";
import Image from "next/image";
import React, { useState } from "react";

// Define the component for the visual monitor display (Replaced with Location/Hours)
const ContactInfoPanel: React.FC = () => {
  // Mock data for open hours, slightly expanded for the new layout
  const openHours = [
    { day: "Mon", time: "11:00 AM - 5:45 PM" },
    { day: "Tue", time: "11:00 AM - 5:45 PM" },
    { day: "Wed", time: "11:00 AM - 5:45 PM" },
    { day: "Thu", time: "11:00 AM - 5:45 PM" },
    { day: "Fri", time: "11:00 AM - 5:45 PM" },
    { day: "Sat", time: "10:30 AM - 5:45 PM" },
    { day: "Sun", time: "11:00 AM - 5:45 PM" },
  ];

  const IconWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <div className="text-amber-600 mr-3 mt-1 flex-shrink-0">{children}</div>
  );

  return (
    <div className="text-neutral-900 space-y-8 p-4 lg:p-0">
      {/* Location */}
      <div className="flex items-start">
        <IconWrapper>
          {/* Location Pin Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </IconWrapper>
        <div>
          <h3 className="text-xl font-semibold mb-1">Location:</h3>
          <p className="text-neutral-700">
            4826 11 Street NE, Calgary, Alberta T2E 2W7, Canada
          </p>
        </div>
      </div>

      {/* Open Hours */}
      <div className="flex items-start">
        <IconWrapper>
          {/* Clock Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm-.5-14H13v6.5l4.5 2.7-.8.7-4.2-2.5V6z" />
          </svg>
        </IconWrapper>
        <div>
          <h3 className="text-xl font-semibold mb-3">Open Hours:</h3>
          <ul className="text-sm">
            {openHours.map((hour, index) => (
              <li
                key={index}
                className={`flex justify-between py-1 border-b border-neutral-200 last:border-b-0`}
              >
                <span className="font-medium text-neutral-800">{hour.day}</span>
                <span className="text-amber-600 font-medium">{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start">
        <IconWrapper>
          {/* Email Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </IconWrapper>
        <div>
          <h3 className="text-xl font-semibold mb-1">Email Us:</h3>
          <p className="text-neutral-700">info@empirebanquet.ca</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start">
        <IconWrapper>
          {/* Phone Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 15.5c-1.25 0-2.45-.21-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.24-1.02C8.71 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
          </svg>
        </IconWrapper>
        <div>
          <h3 className="text-xl font-semibold mb-1">Phone:</h3>
          <p className="text-neutral-700">403-390-3000</p>
        </div>
      </div>
    </div>
  );
};

// Main Contact Form Component
const ContactSection: React.FC = () => {
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
        src="https://cdn.pixabay.com/photo/2018/07/30/11/20/lunar-eclipse-3572336_1280.jpg"
        alt="Logo"
        width={1000}
        className="w-full h-96 object-cover brightness-50"
        height={400}
      />
      <div className="container mx-auto px-20 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start">
          {/* Left Section: Contact Info Panel */}
          <div className="order-2 lg:order-1">
            <ContactInfoPanel />
          </div>

          {/* Right Section: Booking Form */}
          <div className="order-1 lg:order-2">
            {/* Form Header */}
            <h2 className="text-4xl font-extrabold text-neutral-900 mb-8">
              Get In <span className="text-amber-600">Touch</span>
            </h2>

            {/* Submission Message Box */}
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
                    type="date"
                    name="date"
                    placeholder="mm/dd/yyyy"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 shadow-sm appearance-none"
                    required
                  />
                  {/* Calendar Icon */}
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

              {/* reCAPTCHA Placeholder and Submit Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2">
                {/* reCAPTCHA Placeholder */}
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center space-x-2 border border-neutral-300 p-2 rounded-lg bg-gray-50">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                    />
                    <label className="text-sm text-neutral-700">
                      I&apos;m not a robot
                    </label>
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-1">
                    reCAPTCHA is changing to terms of service.{" "}
                    <a href="#" className="underline hover:text-amber-600">
                      Take action.
                    </a>
                    <br />
                    <span className="text-neutral-400">Privacy - Terms</span>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="py-3 px-10 bg-black text-white font-semibold cursor-pointer rounded-lg shadow-md hover:bg-neutral-800 transition duration-200"
                  style={{ boxShadow: "0 4px 15px rgba(234, 179, 8, 0.4)" }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
