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
import linkdin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";

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
    <div className="lg:-mt-20 relative">
      <div className="p-6 lg:w-2/3 lg:mx-auto ">
        <div>
          <div className="md:flex lg:h-screen items-center justify-center ">
            <div className="md:w-1/2">
              <h1 className="text-7xl lg:text-[280px] lg:-ml-4 lg:-mt-10 lg:-mb-20 font-black text-gray-300 whitespace-nowrap ">
                HELLO
              </h1>
              <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 whitespace-nowrap lg:mt-16">
                I'm
              </h1>
              <h1 className="text-3xl lg:text-6xl font-bold text-primary-600 mb-4 whitespace-nowrap underline underline-offset-8">
                Prashanth Reddy
              </h1>
              <h4 className="mt-2 text-xl font-medium text-gray-600">
                Turning Ideas into Interactive Realities
              </h4>
              <a
                download
                href="https://drive.google.com/file/d/1vuTlCwwxfUyJF3g6rYcCVhQNT4ZklLkn/view?usp=drivesdk"
                className="w-36 flex items-center border-2 gap-1 border-gray-600 mt-4 px-6 py-2 rounded-md"
              >
                Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
            <div className="lg:mt-20 hidden md:block">
              <img src="profile.png" alt="prashanth" />
            </div>
            <div className="flex md:flex-col gap-4 absolute -mt-10 md:mt-0 right-16 md:right-2 lg:right-32 lg:mt-10">
              <hr className="rotate-90 border-black border mb-4 hidden md:block" />
              <hr className="rotate-90 border-black border mb-4 hidden md:block" />
              <hr className="rotate-90 border-black border mb-4 hidden md:block" />
              <a
                href="https://www.linkedin.com/in/prashanth-reddy-7143831a4/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkdin}
                  alt="linkdin"
                  className="border-2 border-gray-700 p-1 rounded-full cursor-pointers"
                />
              </a>
              <a
                href="https://github.com/PrashanthreddyAinala"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="border-2 border-gray-700 p-1 rounded-full cursor-pointer"
                />
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <h4 className="mt-12 text-center text-4xl font-bold text-gray-600 whitespace-nowrap">
              About Me
            </h4>
            <p className="text-gray-600  mt-4 text-lg text-center">
              As a Frontend Developer, I am passionate about creating impactful
              digital experiences. My journey in web development began with a
              deep curiosity about how things work on the web. Over time, this
              curiosity has transformed into a fulfilling career where I get to
              build amazing things every day.
            </p>
          </div> */}
          <div className="flex flex-col">
            <h4 className="mt-12 text-center text-4xl font-bold text-gray-600 whitespace-nowrap">
              Tech Stack
            </h4>
            <div className="w-full text-gray-600 text-lg flex flex-wrap justify-center gap-y-6 mt-6">
              {skills?.map((skill, index) => (
                <div
                  className="w-1/2 md:w-1/4 flex justify-center flex justify-center"
                  key={index}
                >
                  <div className="w-36 md:w-40 h-36 shadow-md border rounded-lg px-4 pt-4 flex flex-col justify-center items-center bg-white">
                    <img src={skill.src} alt={skill.alt} className="w-12" />
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
