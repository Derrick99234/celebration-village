"use client";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";

// --- PACKAGE DATA (Simulating the menu structure) ---

const PACKAGES = {
  bronze: {
    name: "Bronze Package",
    price: "Starting at $55/person",
    description:
      "Our foundational package, offering elegant essentials for a beautiful event. Perfect for intimate gatherings and seamless service.",
    color: "bg-amber-800", // Deep Bronze
    text: "text-amber-100",
    accent: "border-amber-400",
    details: [
      {
        category: "Appetizers (Select One)",
        items: [
          "Aloo Finger",
          "Chili Paneer",
          "Hakka Noodle’s",
          "Manchurian",
          "Chicken Tikka",
          "Fish Pakora",
        ],
      },
      {
        category: "Main Course (Select One Veg & One Protein)",
        items: [
          "Channa Masala",
          "Chili Paneer",
          "Daal Makhani (Yellow Lentil)",
          "Butter Chicken",
          "Tandoori Chicken",
          "Chicken Curry",
        ],
      },
      {
        category: "Dessert (Select One)",
        items: [
          "Mango Fruit Cream",
          "Gulab Jamun Hot",
          "Gajar Ka Halwa",
          "Sooji Ka Halwa",
        ],
      },
      {
        category: "Sides & Bread Options",
        items: [
          "Mix Raita, Plain Dahi",
          "Green Salad, Caesar Salad",
          "Butter Naans",
          "Assorted Sodas & Juices",
        ],
      },
    ],
  },
  silver: {
    name: "Silver Package",
    price: "Starting at $75/person",
    description:
      "A premium selection with added gourmet options and extended service hours. Ideal for standard weddings and corporate events that demand variety.",
    color: "bg-neutral-600", // Polished Silver/Grey
    text: "text-neutral-50",
    accent: "border-neutral-200",
    details: [
      {
        category: "Appetizers (Select Two)",
        items: [
          "Paneer Pakora",
          "Pani Puri",
          "Spring Rolls",
          "Tandoori Chicken (Leg and Thigh)",
          "Veg. Pakora",
          "Mushroom Manchurian",
        ],
      },
      {
        category: "Main Course (Select Two Veg & One Protein)",
        items: [
          "Palak Paneer",
          "Shahi Paneer",
          "Vegetable Korma",
          "Rogan Josh",
          "Palao Chicken (Bone-in)",
          "Goat Curry",
        ],
      },
      {
        category: "Dessert (Select Two)",
        items: [
          "All Bronze Desserts",
          "Rasgulla",
          "Kheer (Rice Pudding)",
          "Ice Cream Bar",
        ],
      },
      {
        category: "Sides & Bread Options",
        items: [
          "All Bronze Options",
          "Greek Salad, Pasta Salad",
          "Garlic Naans, Tandoori Roti",
          "Specialty Tea & Coffee Station",
        ],
      },
    ],
  },
  gold: {
    name: "Gold Package",
    price: "Starting at $99/person",
    description:
      "The ultimate luxury experience, featuring top-tier menu choices, specialty bar service, and dedicated event coordination for a truly spectacular affair.",
    color: "bg-yellow-600", // Rich Gold
    text: "text-neutral-900",
    accent: "border-yellow-200",
    details: [
      {
        category: "Appetizers (Select Three)",
        items: [
          "Spinach Pakora",
          "Seekh Kebab",
          "Chili Shrimp",
          "Mini Samosas",
          "Loaded Bruschetta",
          "Gourmet Chaat Station",
        ],
      },
      {
        category: "Main Course (Select Two Veg & Two Protein)",
        items: [
          "All Silver Options",
          "Malai Kofta",
          "Daal Tadka",
          "Prawn Curry",
          "Lamb Vindaloo",
        ],
      },
      {
        category: "Dessert (Select Three)",
        items: [
          "All Silver Desserts",
          "Raspberry Cheesecake",
          "Chocolate Lava Cake",
          "Custom Cake Service",
        ],
      },
      {
        category: "Sides & Bread Options",
        items: [
          "All Silver Options",
          "Arugula & Pear Salad",
          "Specialty Bread Basket",
          "Premium Beverage Bar (Non-Alcoholic)",
        ],
      },
    ],
  },
};

// Component for displaying individual menu sections with consistent styling
const MenuSection: React.FC<{
  detail: { category: string; items: string[] };
  accentColor: string;
}> = ({ detail, accentColor }) => (
  <div className="p-5 md:p-6 bg-black/10 rounded-xl shadow-inner backdrop-blur-sm border-2 border-transparent hover:border-white/20 transition duration-300">
    <h3
      className={`text-xl md:text-2xl font-extrabold mb-3 pb-2 border-b ${accentColor} tracking-wide`}
    >
      {detail.category}
    </h3>
    <ul className="space-y-2 text-base md:text-lg font-light">
      {detail.items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span
            className={`mr-3 text-xl ${accentColor.replace(
              "border",
              "text"
            )} font-black`}
          >
            &raquo;
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Component for the navigation pills
const PackagePill: React.FC<{
  name: string;
  active: boolean;
  onClick: () => void;
}> = ({ name, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 mx-2 rounded-full font-bold text-lg transition duration-300 shadow-xl transform hover:scale-[1.05] 
            ${
              active
                ? "bg-amber-600 text-white shadow-amber-900/50 ring-4 ring-amber-300"
                : "bg-white text-neutral-800 hover:bg-neutral-200 shadow-neutral-400/50"
            }`}
  >
    {name}
  </button>
);

// Component for the main package display block
const PackageDetailBlock: React.FC<{ packageData: typeof PACKAGES.bronze }> = ({
  packageData,
}) => {
  const router = useRouter();
  return (
    <div
      className={`p-6 sm:p-8 md:p-12 ${packageData.color} ${packageData.text} rounded-3xl shadow-2xl transition duration-500 transform hover:shadow-4xl`}
    >
      {/* Header Block */}
      <div className={`text-center mb-8 pb-4 border-b-2 ${packageData.accent}`}>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wider mb-2">
          {packageData.name}
        </h2>
        <p className="text-2xl sm:text-3xl font-light italic">
          {packageData.price}
        </p>
      </div>

      <p className="text-lg md:text-xl mb-10 font-medium text-center max-w-4xl mx-auto opacity-90">
        {packageData.description}
      </p>

      {/* Dynamic Detailed Menu Layout: Two main columns for organization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {/* COLUMN 1: Appetizers & Desserts */}
        <div className="space-y-8">
          {/* Appetizers */}
          <MenuSection
            detail={packageData.details[0]}
            accentColor={packageData.accent}
          />
          {/* Desserts */}
          <MenuSection
            detail={packageData.details[2]}
            accentColor={packageData.accent}
          />
        </div>

        {/* COLUMN 2: Main Course & Sides */}
        <div className="space-y-8">
          {/* Main Course */}
          <MenuSection
            detail={packageData.details[1]}
            accentColor={packageData.accent}
          />
          {/* Sides & Bread */}
          <MenuSection
            detail={packageData.details[3]}
            accentColor={packageData.accent}
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          className={`px-10 py-4 font-extrabold text-lg md:text-xl uppercase rounded-full transition duration-300 
                bg-white text-neutral-900 shadow-lg transform hover:scale-[1.05] hover:ring-8 ring-white/50`}
          onClick={() => router.push("/book-event")}
        >
          Book This Package Now
        </button>
      </div>
    </div>
  );
};

const PackagesPage: React.FC = () => {
  // State to manage which package is currently displayed
  const [activePackageKey, setActivePackageKey] = useState("bronze");

  // Get the data for the currently active package

  const activePackageData = useMemo(
    () => PACKAGES[activePackageKey as keyof typeof PACKAGES],
    [activePackageKey]
  );
  return (
    <div className="min-h-screen bg-neutral-100 font-sans p-4">
      <main className="container mx-auto py-16 md:py-24 max-w-7xl">
        {/* --- HEADER --- */}
        <section className="text-center mb-16">
          <h1 className="text-6xl sm:text-7xl font-black text-neutral-900 tracking-tighter mb-4">
            Elegant{" "}
            <span className="text-amber-600 border-b-4 border-amber-600 pb-1">
              Event Packages
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto">
            Select from our signature Bronze, Silver, and Gold tiers, designed
            to turn your event vision into a timeless reality with flawless
            execution.
          </p>
        </section>

        {/* --- NAVIGATION/PILLS --- */}
        <section className="flex justify-center flex-wrap mb-16 sticky top-0 bg-neutral-100 py-4 z-10 shadow-lg rounded-xl">
          {Object.keys(PACKAGES).map((key) => (
            <PackagePill
              key={key}
              name={PACKAGES[key as keyof typeof PACKAGES].name}
              active={activePackageKey === key}
              onClick={() => setActivePackageKey(key)}
            />
          ))}
        </section>

        {/* --- DYNAMIC PACKAGE DETAILS --- */}
        <section
          id="package-details"
          className="min-h-[800px] flex items-start"
        >
          <PackageDetailBlock packageData={activePackageData} />
        </section>
      </main>
    </div>
  );
};

export default PackagesPage;
