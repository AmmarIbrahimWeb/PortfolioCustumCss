import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css'; // Ensure this file contains relevant styles

const data = [
  {
    id: 0,
    title: "Static Resume Builder",
    desc: "using Html & Css",
    img: "/project1.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 1,
    title: " Dynamic Resume Builder",
    desc: "using Html & Css",
    img: "/project2.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 2,
    title: "Resume Generator",
    desc: "using Html & Css",
    img: "/project3.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 3,
    title: "Generated Resume",
    desc: "using Html & Css",
    img: "/project4.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 4,
    title: "Personal Information",
    desc: "using Html & Css",
    img: "/project5.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 5,
    title: "Personal Profile Card",
    desc: "using Html & Css",
    img: "/project6.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container" data-aos="zoom-in-up">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
