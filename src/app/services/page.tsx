"use client";
import About from "@/components/home-page/aboutPage";
import Image from "next/image";
import React, { useState } from "react";

// --- Data Structures ---

// Placeholder Images (Replace these URLs with your actual celebration photos!)
const IMAGES = {
  hero: "https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_1280.jpg",
  gallery: [
    {
      src: "https://cdn.pixabay.com/photo/2020/12/09/12/38/glasses-5817359_1280.jpg",
      alt: "Intimate dinner setting",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/12/04/02/12/cake-4671540_1280.jpg",
      alt: "Grand gala floral decor",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/12/09/12/38/glasses-5817359_1280.jpg",
      alt: "Professional event setup",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/10/28/03/42/ai-generated-9154854_1280.jpg",
      alt: "Milestone celebration cake",
    },
  ],
  divider:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",
  // New placeholders for service items or focus areas
  focus_elegance:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",
  focus_service:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",
  focus_traditions:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",
  focus_innovation:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",
  focus_memorable:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",
  focus_timeless:
    "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg",

  atmosphere_style:
    "https://cdn.pixabay.com/photo/2017/08/06/07/16/wedding-2589803_1280.jpg",
  entertainment_experience:
    "https://cdn.pixabay.com/photo/2017/08/06/07/16/wedding-2589803_1280.jpg",
  planning_execution:
    "https://cdn.pixabay.com/photo/2017/08/06/07/16/wedding-2589803_1280.jpg",
  partnerships_personalization:
    "https://cdn.pixabay.com/photo/2017/08/06/07/16/wedding-2589803_1280.jpg",
};

// Key Focus Areas (Pillars) - Replaced Emojis with elegant Unicode symbols
const FOCUS_AREAS = [
  {
    icon: "⟡",
    title: "Elegance & Style",
    description:
      "Crafting sophisticated, timeless, and beautifully detailed experiences.",
    image: IMAGES.focus_elegance,
  },
  {
    icon: "★",
    title: "Exceptional Service",
    description:
      "Delivering thoughtful, personalized, and flawless event experiences.",
    image: IMAGES.focus_service,
  },
  {
    icon: "⏣",
    title: "Honouring Traditions",
    description: "Respecting cultural richness and cherished milestones.",
    image: IMAGES.focus_traditions,
  },
  {
    icon: "✧",
    title: "Innovation & Creativity",
    description:
      "Transforming ideas into unique, magical, and inspired celebrations.",
    image: IMAGES.focus_innovation,
  },
  {
    icon: "⬦",
    title: "Memorable Experiences",
    description: "Ensuring every celebration leaves a lasting impression.",
    image: IMAGES.focus_memorable,
  },
  {
    icon: "⩗",
    title: "Timeless Elegance",
    description: "Blending sophistication with lasting beauty.",
    image: IMAGES.focus_timeless,
  },
];

// Event Categories - Updated to use an elegant icon property and cleaned up titles
const CELEBRATION_CATEGORIES = [
  {
    key: "intimate",
    icon: "◊", // Rhombus for intimate
    title: "Intimate Celebrations",
    events: [
      "Weddings – Small, personal ceremonies",
      "Engagements & Anniversaries – Milestone moments with close family & friends",
      "Baby Showers & Gender Reveals – Joyful beginnings with loved ones",
      "Bridal or Couples’ Dinners – Elegant pre-wedding gatherings",
      "Private Dinners & Intimate Parties – Celebrations for a close circle",
      "Elopements – Personal and meaningful destination events",
    ],
  },
  {
    key: "grand",
    icon: "◴", // Circle with arrow for grand/momentum
    title: "Grand Celebrations",
    events: [
      "Weddings – Large, luxurious ceremonies",
      "Birthdays & Sweet Sixteens – Celebrations with flair and style",
      "Holiday & Seasonal Events – Festive and themed occasions",
      "Themed Galas & Balls – Elegant, large-scale parties",
      "Anniversary Milestones – Silver, Gold, or special celebrations",
      "Award Nights & Red-Carpet Events – Glamorous, high-impact experiences",
    ],
  },
  {
    key: "social",
    icon: "◩", // Square with diagonal fill for community
    title: "Social Celebrations",
    events: [
      "Community & Social Gatherings – Bringing people together meaningfully",
      "Cultural & Heritage Celebrations – Honouring traditions and cultural richness",
      "Family Reunions – Creating memories across generations",
      "Charity & Fundraising Events – Elegant and impactful social gatherings",
      "Festivals & Pop-Up Celebrations – Engaging local communities",
      "Religious or Spiritual Ceremonies – Celebrations with cultural and spiritual significance",
    ],
  },
  {
    key: "corporate",
    icon: "▱", // Parallelogram for structure/business
    title: "Corporate Celebrations",
    events: [
      "Corporate Events & Galas – Professional, elegant, and memorable gatherings",
      "Graduations & Achievements – Celebrating accomplishments in style",
      "Product Launches & Openings – Innovative and brand-forward experiences",
      "Team Building & Retreats – Stylish and creative corporate bonding events",
      "Award Ceremonies & Recognition Nights – Honouring excellence in the workplace",
      "Networking & Client Appreciation Events – Memorable, high-end professional gatherings",
    ],
  },
];

// Partnered Services - Added image properties
const PARTNERED_SERVICES = [
  {
    title: "Atmosphere & Style",
    subtitle: "We set the tone with beauty, poise, and elegance.",
    items: [
      "Balloon Arrangements, Bouquets, Hamper arrangements, & Floral Artistry – Bespoke arrangements & magical installations",
      "Décor & Styling Expertise – Elegant transformations with creative detail",
      "Seamstress & Custom Attire – Tailored looks that reflect your style",
    ],
    image: IMAGES.atmosphere_style,
  },
  {
    title: "Entertainment & Experience",
    subtitle:
      "We keep the celebration alive with rhythm, joy, and unforgettable moments.",
    items: [
      "DJ & Live Entertainment – Music, drummers, bands, and dynamic vibes",
      "Heartfelt Hosts & MCs – Guiding your celebration with charisma & grace",
    ],
    image: IMAGES.entertainment_experience,
  },
  {
    title: "Planning & Execution",
    subtitle: "We handle every detail so you can enjoy every moment.",
    items: [
      "Design Consulting & Management – Professional guidance, flawless delivery",
      "Innovative & Solution-Oriented Concepts – Unique ideas tailored to you",
      "Event Rentals & Setups – Complete furnishings, décor, and staging solutions",
    ],
    image: IMAGES.planning_execution,
  },
  {
    title: "Partnerships & Personalization",
    subtitle:
      "We collaborate with trusted local vendors to bring your vision to life.",
    items: [
      "Local Graphic Artists & Printers – Personalized, creative event designs",
      "Trusted Local Vendors & Partners – Florists, caterers, artisans, & more",
    ],
    image: IMAGES.partnerships_personalization,
  },
];

// --- Sub-Components ---

// Tab Selector for Celebration Types
const CelebrationTabs: React.FC<{
  activeTab: string;
  setActiveTab: (key: string) => void;
}> = ({ activeTab, setActiveTab }) => (
  <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
    {CELEBRATION_CATEGORIES.map((category) => (
      <button
        key={category.key}
        onClick={() => setActiveTab(category.key)}
        className={`px-5 py-3 text-sm md:text-base font-semibold rounded-lg transition duration-300 transform hover:scale-[1.03] shadow-md ${
          activeTab === category.key
            ? "bg-amber-600 text-white shadow-amber-500/50"
            : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100"
        }`}
      >
        <span className="mr-2 text-lg">{category.icon}</span>
        {category.title.split(" ")[0]}
      </button>
    ))}
  </div>
);

// Tab Content Display
const CelebrationContent: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const category = CELEBRATION_CATEGORIES.find((c) => c.key === activeTab);
  if (!category) return null;

  return (
    <div className="p-6 md:p-10 bg-neutral-50 rounded-xl shadow-lg border-t-4 border-amber-500/50">
      <h4 className="text-2xl font-bold text-amber-600 mb-4">
        <span className="mr-3 text-2xl">{category.icon}</span>
        {category.title}
      </h4>
      <ul className="space-y-3">
        {category.events.map((event, index) => (
          <li key={index} className="flex items-start text-neutral-700">
            <span className="text-amber-500 mr-3 mt-1 text-lg font-bold">
              —
            </span>
            <p className="flex-1 text-lg">{event}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Component ---

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CELEBRATION_CATEGORIES[0].key);

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <main className="py-16 md:py-24">
        {/* --- 1. HERO SECTION: Title, Mission, and Image --- */}
        <Image
          src="https://cdn.pixabay.com/photo/2016/08/03/10/18/petit-fours-1566257_1280.jpg"
          alt="Logo"
          width={1000}
          className="w-full h-96 object-cover brightness-50"
          height={400}
        />
        <section className="text-center mt-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-800 tracking-tight mb-4">
            Your <span className="text-amber-600">One-Stop Village</span> for
            Timeless Celebrations
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto text-neutral-600 mb-10">
            From the quiet intimacy of an elopement to the grand spectacle of a
            red-carpet gala, we manage every detail with **elegance, innovation,
            and flawless execution**.
          </p>
          {/* <div className="w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl">
            <Image
              width={600}
              height={400}
              src={IMAGES.hero}
              alt="Elegant event setting with warm lighting"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1200x500/E9D5A0/44403C?text=Elegant+Wedding+Venue";
              }}
            />
          </div> */}
        </section>

        <About />

        {/* --- 2. KEY FOCUS AREAS (PILLARS) --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">
            Our Core Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FOCUS_AREAS.map((focus, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-amber-500 transition duration-300 transform hover:shadow-xl hover:scale-[1.02] border group" // Added 'group' for hover effect
              >
                <div className="overflow-hidden rounded-lg mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={600}
                    height={400}
                    src={focus.image}
                    alt={focus.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3 text-amber-600">
                    {focus.icon}
                  </span>
                  <h3 className="text-xl font-bold text-amber-600">
                    {focus.title}
                  </h3>
                </div>
                <p className="text-neutral-600">{focus.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- IMAGE GALLERY DIVIDER --- */}
        <section className="my-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {IMAGES.gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg aspect-square"
              >
                <Image
                  width={600}
                  height={400}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. CELEBRATIONS WE CATER TO (INTERACTIVE TABS) --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">
            Celebrations We Cater To
          </h2>
          <div className="max-w-5xl mx-auto">
            <CelebrationTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <CelebrationContent activeTab={activeTab} />
          </div>
        </section>

        {/* --- IMAGE DIVIDER --- */}
        <div className="w-full max-w-7xl mx-auto my-20 overflow-hidden rounded-xl shadow-2xl">
          <Image
            width={600}
            height={400}
            src={IMAGES.divider}
            alt="Flawless execution detail of an event setup"
            className="w-full h-auto max-h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://cdn.pixabay.com/photo/2020/12/09/12/37/bouquet-5817353_1280.jpg";
            }}
          />
        </div>

        {/* --- 4. FULL SERVICE OFFERING (PARTNERED SERVICES) --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">
            Full Service Offerings
          </h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-neutral-600">
            By partnering with trusted local vendors, we offer a cohesive range
            of services managed entirely by our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {PARTNERED_SERVICES.map((serviceGroup, index) => (
              <div
                key={index}
                className="p-8 bg-neutral-50 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:shadow-amber-500/10 border border-neutral-200"
              >
                <div className="overflow-hidden rounded-lg mb-5 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={600}
                    height={400}
                    src={serviceGroup.image}
                    alt={serviceGroup.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-600 mb-2">
                  {serviceGroup.title}
                </h3>
                <p className="text-neutral-500 italic mb-4 border-b border-neutral-300 pb-3">
                  {serviceGroup.subtitle}
                </p>
                <ul className="space-y-3">
                  {serviceGroup.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-neutral-700 text-base"
                    >
                      <span className="text-amber-500 mr-2 mt-1 text-lg">
                        —
                      </span>
                      <p className="flex-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
