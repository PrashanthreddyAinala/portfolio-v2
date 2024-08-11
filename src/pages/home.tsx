import React from "react";
import html from "../assets/images/html5.png";
import css from "../assets/images/css3.png";
import js from "../assets/images/js.png";
import tailwind from "../assets/images/tailwindcss.png";
import react from "../assets/images/reactjs.png";
import reactQuery from "../assets/images/reactquery.png";
import next from "../assets/images/nextjs.png";
import git from "../assets/images/git.png";
import typescript from "../assets/images/typescript.png";
import redux from "../assets/images/redux.png";

const Home: React.FC = () => {
  const skills = [
    {
      src: html,
      alt: "html",
      label: "HTML",
    },
    {
      src: css,
      alt: "css",
      label: "CSS",
    },
    {
      src: js,
      alt: "js",
      label: "Javascript",
    },
    {
      src: react,
      alt: "react",
      label: "React",
    },
    {
      src: reactQuery,
      alt: "reactQuery",
      label: "React Query",
    },
    {
      src: tailwind,
      alt: "tailwind",
      label: "Tailwind",
    },
    {
      src: git,
      alt: "git",
      label: "Git",
    },
    {
      src: next,
      alt: "next",
      label: "NextJS",
    },
    {
      src: typescript,
      alt: "typescript",
      label: "Typescript",
    },
    {
      src: redux,
      alt: "redux",
      label: "Redux",
    },
  ];

  return (
    <div className="bg-gray-100 md:bg-gray-50 pt-10 lg:pt-20 -mt-12">
      <div className="p-6 lg:w-1/2 lg:mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl mt-6 font-bold text-gray-900">
            Prashanth Reddy Ainala
          </h1>
          <h4 className="mt-2 text-lg font-medium text-gray-600">
            Turning Ideas into Interactive Realities
          </h4>
          <p className="text-gray-600  mt-4 text-lg">
            As a Frontend Developer, I am passionate about creating impactful
            digital experiences. My journey in web development began with a deep
            curiosity about how things work on the web. Over time, this
            curiosity has transformed into a fulfilling career where I get to
            build amazing things every day.
          </p>
          <div className="flex items-center flex-col">
            <h4 className="mt-12 text-center text-xl font-medium text-gray-600 ">
              My Skills
            </h4>
            <div className="w-full text-gray-600 text-lg flex flex-wrap justify-center gap-y-6 mt-6">
              {skills?.map((skill, index) => (
                <div
                  className="w-1/2 md:w-1/4 flex justify-center flex justify-center"
                  key={index}
                >
                  <div className="w-28 h-28 shadow-md border rounded-lg px-4 pt-4 flex flex-col justify-center items-center">
                    <img src={skill.src} alt={skill.alt} className="w-10" />
                    <p className="mt-2 text-nowrap text-sm">{skill.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
