"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

// Define the structure for a single testimonial
interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

// Mock data for the testimonials
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Excellent location, easy to access, ample amount of car parking, apart from the location the customer service they provide is extraordinary. Last but not least the food is extremely delicious. Amazing pricing. KEEP UP THE GOOD WORK EMPIRE BANQUET HALL TEAM.",
    author: "Mandeep Singh",
  },
  {
    id: 2,
    quote:
      "Empire Banquet Hall is one of the best halls in Calgary. Excellent customer service, food is amazing and staff is easy to deal with. Worth every Penny.",
    author: "Gurpreet Sekhon",
  },
  {
    id: 3,
    quote:
      "Empire banquet hall is best hall, they have the most amazing food. The most incredible staff, the management is honestly so professional and easy to deal with. My friends wedding I went to was perfectly organized management ensured that it was it was thank you so much, and I highly recommend having your wedding, or any event here. 👍👍👍",
    author: "Rajneesh Khehra",
  },
  // Add more testimonials here for demonstration
  {
    id: 4,
    quote:
      "The service exceeded all expectations. Everything from the setup to the cleanup was seamless. The team handled every detail perfectly, making our event completely stress-free.",
    author: "Sara Williams",
  },
];

// Component for a single testimonial card
const TestimonialCard: React.FC<Testimonial> = ({ quote, author }) => {
  return (
    // Increased the margin on the sides for better drag/snap visibility
    <div className="flex-shrink-0 w-full sm:w-[400px] lg:w-[450px] p-6 mx-2 bg-neutral-800 rounded-lg shadow-xl snap-center">
      <blockquote className="text-white relative">
        {/* Large stylized quote marks */}
        <span className="text-6xl font-serif absolute -top-10 -left-4 text-orange-600 opacity-70">
          “
        </span>

        {/* Quote text */}
        <p className="text-base sm:text-lg mb-6 leading-relaxed relative z-10">
          {quote}
        </p>

        {/* Author */}
        <footer className="mt-4 pt-4 border-t border-neutral-700">
          <p className="text-base font-semibold text-orange-500">{author}</p>
        </footer>
      </blockquote>
    </div>
  );
};

// Main Testimonial Section Component
const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Function to determine the currently centered card index
  const updateActiveIndex = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft: currentScroll, clientWidth } = scrollRef.current;
      // Get the width of the first card element, including margins (if set)
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 8 : clientWidth; // 8 = 2 * mx-2

      // Calculate the index based on scroll position and card width
      // We use Math.round to snap to the nearest index
      const newIndex = Math.round(currentScroll / cardWidth);
      setActiveIndex(newIndex);
    }
  }, []);

  // Use Intersection Observer for more reliable index tracking on scroll stop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the intersecting element
            const elementId = entry.target.getAttribute("data-id");
            const index = testimonialsData.findIndex(
              (t) => t.id === Number(elementId)
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.8, // Trigger when 80% of the item is visible
      }
    );

    if (scrollRef.current) {
      Array.from(scrollRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, [scrollRef]);

  // --- Dragging Handlers ---

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    scrollRef.current.style.cursor = "grabbing";
    // Record the starting position and current scroll
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      // Recalculate and snap after drag ends
      // The CSS snap-x takes care of final positioning,
      // but we update the index here for the dots.
      setTimeout(updateActiveIndex, 100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiplier for faster drag response
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    // Delay to let the native snap finish before updating index
    setTimeout(updateActiveIndex, 100);
  };

  // Function to navigate to a specific card via pagination dot click
  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      // Calculate scroll position based on card width + margin (8px = mx-2 * 2)
      const cardWidth = firstChild ? firstChild.offsetWidth + 8 : 0;

      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-neutral-900 py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center tracking-tight select-none">
          What Customer Say&apos;s
        </h2>

        {/* Testimonials Carousel Container */}
        <div
          ref={scrollRef}
          // Draggable setup
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          // Added select-none to prevent text selection during drag
          className="flex overflow-x-scroll no-scrollbar p-4 snap-x snap-mandatory cursor-grab justify-start select-none"
          style={{
            scrollPadding: "0 20px",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              data-id={testimonial.id} // Added data-id for Intersection Observer
              {...testimonial}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-orange-500" // Active dot
                  : "w-2 bg-neutral-700 hover:bg-neutral-600" // Inactive dot
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
