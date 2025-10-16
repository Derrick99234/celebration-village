import React from "react";

// This component displays a full-screen loading spinner centered on the page.
// It uses the primary brand color (yellow-800) for the visual element.

/**
 * @param {object} props
 * @param {string} [props.message] - Optional message to display below the spinner.
 */
const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    // Full-screen container to center the spinner
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50/70 backdrop-blur-sm z-[100]">
      {/* Container for the spinner and message */}
      <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl shadow-2xl">
        {/* Spinner Element */}
        <div
          className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-yellow-800 animate-spin"
          role="status"
          aria-live="polite"
        >
          {/* Invisible content for accessibility tools */}
          <span className="sr-only">Loading...</span>
        </div>

        {/* Loading Message */}
        <p className="mt-4 text-lg font-medium text-yellow-800">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
