import React from "react";
import blogImg from "../public/assets/projects/blog.jpg";
import propertyImg from "../public/assets/projects/property.jpg";
import dungeonImg from "../public/assets/projects/dungeon.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Blog Application"
            backgroundImg={blogImg}
            projectUrl="/blog"
            info="React JS"
          />
          <ProjectItem
            title="Dungeon Crawler"
            backgroundImg={dungeonImg}
            projectUrl="/dungeon"
            info="Javascript"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
