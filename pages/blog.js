import Image from "next/image";
import React from "react";
import blogImg from "../public/assets/projects/blog.jpg";
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
          src={blogImg}
          alt="/"
        />
        <div className="text-white z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Blog Application</h2>
          <h3>React JS / Node JS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            The blog app project is a web application built using ReactJS with
            React Query, and NodeJS with Express. The app is hosted on Cyclic,
            and uses MongoDB as its database. User authentication is implemented
            using JSON Web Token (JWT), requiring registration and login to
            access the app.
          </p>
          <p className="py-2">
            The app displays a list of blog posts sorted by the number of likes,
            and allows users to click on a post to view a detailed view of the
            post. Users can comment on the blog, and are able to delete their
            own blogs.
          </p>
          <a
            href="https://busy-gray-jackrabbit-fez.cyclic.app/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Retrospective53/blog-app"
            rel="noreferrer noopener"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javasciprt
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-query
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
