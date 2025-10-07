import About from "@/components/home-page/aboutPage";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <Image
        src="https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg"
        alt="Logo"
        width={1000}
        className="w-full h-96 object-cover brightness-50"
        height={400}
      />
      <About />
    </>
  );
}

export default page;
