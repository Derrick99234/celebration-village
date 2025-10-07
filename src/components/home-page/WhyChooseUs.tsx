"use client";
import Image from "next/image";
import { BiHappy } from "react-icons/bi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-gold">
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto mb-16">
        {/* Item 1: Satisfaction */}
        <div className="flex flex-col items-center hover:-translate-y-10 cursor-pointer transition-transform duration-300">
          <div className="bg-yellow-800 rounded-full flex items-center justify-center">
            <Image
              src="https://cdn.pixabay.com/photo/2019/03/23/17/44/drink-4075806_1280.jpg"
              alt="Good Food"
              width={400}
              height={400}
              className="h-48 object-cover"
            />
          </div>
          <h3 className="font-semibold bg-yellow-800 text-xl w-full py-4">
            SATISFACTION
          </h3>
        </div>
        {/* Item 2: Good Services */}
        <div className="flex flex-col items-center hover:-translate-y-10 cursor-pointer transition-transform duration-300">
          <div className="bg-yellow-800 rounded-full flex items-center justify-center">
            <Image
              src="https://cdn.pixabay.com/photo/2015/12/30/11/53/birthday-1114056_1280.jpg"
              alt="Good Food"
              width={400}
              height={400}
              className="h-48 object-cover"
            />
          </div>
          <h3 className="font-semibold bg-yellow-800 text-xl w-full py-4">
            GOOD SERVICES
          </h3>
        </div>
        {/* Item 3: Friendly Staffs */}
        <div className="flex flex-col items-center hover:-translate-y-10 cursor-pointer transition-transform duration-300">
          <div className="bg-yellow-800 rounded-full flex items-center justify-center">
            <Image
              src="https://cdn.pixabay.com/photo/2024/08/06/10/43/wine-8949009_1280.jpg"
              alt="Good Food"
              width={400}
              className="h-48 object-cover"
              height={400}
            />
          </div>
          <h3 className="font-semibold bg-yellow-800 text-xl w-full py-4">
            FRIENDLY STAFFS
          </h3>
        </div>
        {/* Item 4: GOOD FOOD */}
        <div className="flex flex-col items-center hover:-translate-y-10 cursor-pointer transition-transform duration-300">
          <div className="bg-yellow-800 rounded-full flex items-center justify-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg"
              alt="Good Food"
              width={400}
              height={400}
              className="h-48 object-cover"
            />
          </div>
          <h3 className="font-semibold bg-yellow-800 text-xl w-full py-4">
            GOOD FOOD
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        {/* Item 1: Satisfaction */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-800 rounded-full flex items-center justify-center mb-4">
            <BiHappy size={60} />
          </div>
          <h3 className="font-semibold text-lg">SATISFACTION</h3>
          <p className="text-xl">94%</p>
          <p className="text-sm">Happy Customers</p>
        </div>

        {/* Item 2: Good Services */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-800 rounded-full flex items-center justify-center mb-4">
            <TbTruckReturn size={60} />
          </div>
          <h3 className="font-semibold text-lg">GOOD SERVICES</h3>
          <p className="text-xl">65%</p>
          <p className="text-sm">Return Customers</p>
        </div>

        {/* Item 3: Friendly Staffs */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-800 rounded-full flex items-center justify-center mb-4">
            <TfiStatsUp size={60} />
          </div>
          <h3 className="font-semibold text-lg">FRIENDLY STAFFS</h3>
          <p className="text-xl">40%</p>
          <p className="text-sm">Referrals</p>
        </div>

        {/* Item 4: Good Food */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-800 rounded-full flex items-center justify-center mb-4">
            <LiaHandHoldingUsdSolid size={60} />
          </div>
          <h3 className="font-semibold text-lg">GOOD FOOD</h3>
          <p className="text-xl">15</p>
          <p className="text-sm">Years Of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
