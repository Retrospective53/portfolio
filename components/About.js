import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full wd:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] md:grid grid-cols-3 gap-8 m-auto">
        <div className="col-span-2">
          <p className="uppercase text-cl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello! My name is Harry Pamungkas, and I'm an aspiring web developer
            looking to break into the industry.
          </p>
          <p className="py-2 text-gray-600">
            I've always been fascinated by technology and the internet, and
            recently decided to pursue my passion for web development. Although
            I'm new to the field, I'm enthusiastic about learning and eager to
            gain hands-on experience.
          </p>
          <p className="py-2 text-gray-600">
            I have completed several courses and tutorials on web development,
            including Odin Project, FullStackOpen, and more. Through these
            experiences, I have gained a strong foundation in HTML, CSS, and
            JavaScript, as well as the fundamentals of web design and
            development.
          </p>
          <p className="py-2 text-gray-600">
            In my portfolio, you'll find some of the projects I've built as part
            of my learning journey. While they may not be as polished or
            sophisticated as those of more experienced developers, they
            demonstrate my ability to apply the skills I've learned to
            real-world scenarios.
          </p>
          <p className="py-2 text-gray-600">
            I'm excited to continue learning and growing as a web developer, and
            I'm looking for opportunities to gain more experience and contribute
            to meaningful projects. If you're looking for a motivated and
            dedicated web developer who's eager to learn, I'd love to hear from
            you!
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest project
            </p>
          </Link>
        </div>
        <div>
          <Image
            className="shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300"
            src={aboutImg}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
