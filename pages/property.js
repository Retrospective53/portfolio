import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[35vh] lg:h-[45vh] relative">
        <div className="absolute top-0 left-0 w-full h-[35vh] lg:h-[45vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={propertyImg}
          alt="/"
        />
        <div className="text-white z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / LOLWUT</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <p>Overview</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            aspernatur praesentium molestiae perferendis nam natus expedita
            nobis aperiam architecto veritatis reprehenderit, sed adipisci porro
            facere vel nostrum quas voluptatem unde.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javasciprt
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">← Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
