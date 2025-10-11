import Image from "next/image";
import React from "react";

function page() {
  const ABOUT_IMAGES = {
    // Team collaborating/discussing - Represents "Our Village"
    about_hero:
      "https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_1280.jpg",
    // Designer sketch/detail focus - Represents "Every Detail Creates a Memory"
    about_values:
      "https://cdn.pixabay.com/photo/2015/05/31/11/16/dinner-791142_1280.jpg",
    // Elegant clock/time concept - Represents "Timeless" Vision
    about_vision:
      "https://cdn.pixabay.com/photo/2016/08/03/10/19/mark-place-1566270_1280.jpg",
  };

  // --- Data Content from User Request ---

  const PHILOSOPHY =
    "We believe every celebration should be meaningful, elegant, and memorable. Our village is your comprehensive one-stop destination for event planning, coordination, and execution. We take the stress out of planning so you can truly enjoy every moment. With creativity and flawless execution, we craft celebrations that honour significance, embrace elegance and joy, and leave you with unforgettable memories.";

  const CORE_VALUES = [
    "Every Detail Creates a Memory",
    "Masterpieces of Lasting Connection",
    "Timeless, Elegant, Memorable Celebrations",
    "Your Event, Our Expertise",
  ];

  const VISION =
    "Designing Timeless, Elegant, and Memorable Celebrations. To be the premier village of timeless celebrations, where innovation, elegance, and heartfelt design come together to create unforgettable experiences that bring people closer, celebrate life’s milestones, and leave lasting memories for generations.";

  const MISSION =
    "Turning details into timeless stories. We provide innovative, personalized, and elegantly executed event experiences, guiding every celebration with creativity, care, and a collaborative approach. Our mission is to ensure each moment is meaningful, stress-free, enjoyable, and memorable.";

  const DELIVERABLES =
    "We provide innovative, personalized, and elegantly executed event experiences, guiding every celebration with creativity, care, and a collaborative approach. Our mission is to ensure each moment is meaningful, stress-free, enjoyable, and memorable.";

  return (
    <>
      <Image
        src="https://cdn.pixabay.com/photo/2020/03/26/20/54/table-4971787_1280.jpg"
        alt="Logo"
        width={1000}
        className="w-full h-96 object-cover brightness-50"
        height={400}
      />
      {/* <About /> */}
      <div className="min-h-screen bg-white text-neutral-800 font-sans">
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
          {/* --- HERO SECTION: Title and Philosophy --- */}
          <section className="text-center mb-16 md:mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-800 tracking-tight mb-6">
              The Story of <span className="text-amber-600">Our Village</span>
            </h1>
            <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl mb-8">
              <Image
                width={500}
                height={320}
                src={ABOUT_IMAGES.about_hero}
                alt="Professional event planning team collaborating"
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto text-neutral-600">
              {PHILOSOPHY}
            </p>
          </section>

          {/* --- CORE VALUES --- */}
          <section className="bg-neutral-50 p-8 md:p-12 rounded-xl shadow-lg mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <Image
                    width={500}
                    height={320}
                    src={ABOUT_IMAGES.about_values}
                    alt="Designer focusing on detail"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-neutral-800 mb-6 border-b-2 border-amber-500 pb-2">
                  Our Core Values
                </h2>
                <ul className="space-y-4">
                  {CORE_VALUES.map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center text-xl font-semibold text-neutral-700"
                    >
                      <span className="text-amber-500 text-3xl mr-3">❖</span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* --- VISION & MISSION --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {/* Vision Block */}
            <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-amber-500">
              <div className="overflow-hidden rounded-lg shadow-md mb-6">
                <Image
                  width={500}
                  height={320}
                  src={ABOUT_IMAGES.about_vision}
                  alt="Elegant clock representing timelessness"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-amber-600 mb-3">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-700 font-medium">{VISION}</p>
            </div>

            {/* Mission Block */}
            <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-amber-500">
              <h2 className="text-3xl font-bold text-amber-600 mb-3">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 font-medium">{MISSION}</p>
              <h3 className="text-2xl font-bold text-neutral-800 mt-8 mb-3 border-t pt-4">
                Our Deliverables
              </h3>
              <p className="text-lg text-neutral-700 font-medium">
                {DELIVERABLES}
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default page;
