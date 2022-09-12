import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import node from "../assets/nodejs.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import cpp from "../assets/c++.png";
import c from "../assets/c.png";
import tailwind from "../assets/tailwind.png";

const SkillsScreen = () => {
  const skillsScreen = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: express,
      title: "Express-js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node-js",
      style: "shadow-lime-500",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: cpp,
      title: "C++",
      style: "shadow-sky-900",
    },
    {
      id: 11,
      src: c,
      title: "C",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="skill" className="bg w-full h-full pb-20">
      <div className="max-w-screen-lg mx-auto px-4 pt-20 flex flex-col justify-center w-full h-full text-gray-800">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-10">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillsScreen.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md skillsbg hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsScreen;
