import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full wd:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] md:grid grid-cols-3 gap-8 m-auto">
        <div className="col-span-2">
          <p className="uppercase text-cl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am a normal developer lol</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dignissimos id illum iure fugiat tempore eveniet reiciendis culpa
            vitae nesciunt! Quidem, laboriosam? Praesentium dignissimos
            provident voluptate! Ab nihil veniam sunt.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolor incidunt dolores nobis dicta laborum ipsam totam animi,
            suscipit repellendus doloribus vero ipsum consequuntur ducimus quam
            voluptate rerum necessitatibus! Tempora!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest project
          </p>
        </div>
        <div className="relative">
          <Image
            className="shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300"
            src="/../public/assets/about.jpg"
            alt="about"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default About;
