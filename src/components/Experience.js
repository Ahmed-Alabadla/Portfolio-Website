import React, { useEffect, useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.svg";
import github from "../assets/github.png";
import githubLight from "../assets/github-light.png";
import { useSelector } from "react-redux";
import { BarLoader } from "react-spinners";

const Experience = () => {
  const { mode } = useSelector((state) => state.mode);
  const [imgDarkMode, setImgDarkMode] = useState(false);
  useEffect(() => {
    if (mode === "dark") {
      setImgDarkMode(true);
    } else if (mode === "light") {
      setImgDarkMode(false);
    }
  }, [mode]);

  const techs = [
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
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-600",
    },
    {
      id: 6,
      src: react,
      title: "React JS",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-light dark:bg-gradient-to-b dark:from-black dark:to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full dark:text-white">
        <div className="pt-4">
          <p className="text-4xl font-bold flex flex-col w-full">
            Experience
            <span className="mt-1">
              <BarLoader color="#06b6d4" width={179} loading={true} size={30} />
            </span>
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}

          <div
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400`}
          >
            {imgDarkMode ? (
              <img src={github} alt="" className="w-20 mx-auto" />
            ) : (
              <img src={githubLight} alt="" className="w-20 mx-auto" />
            )}

            <p className="mt-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
