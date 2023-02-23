import Image from "next/image";
import React from "react";
import dungeonImg from "../public/assets/projects/dungeon.jpg";
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
          src={dungeonImg}
          alt="/"
        />
        <div className="text-white z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Dungeon Crawler</h2>
          <h3>Javascript and CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2">
            This is a dungeon crawler game made with JavaScript and CSS. Use the
            arrow keys to move the player character and engage in battles with
            enemies by moving into them. The game features a randomly generated
            terrain, pickupable items, and enemies with random stats.
          </p>
          <p className="py-2">
            The goal of the game is to defeat all enemies in the dungeon by
            engaging in battles with them. Navigate through the maze-like
            terrain to find and defeat each enemy.
          </p>
          <a
            href="https://retrospective53.github.io/dungeon-crawler//"
            rel="noreferrer noopener"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Retrospective53/dungeon-crawler"
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
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
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
