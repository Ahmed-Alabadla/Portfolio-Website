import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import htmlCss from "../assets/portfolio/htmlCss.png";
import tanweel from "../assets/portfolio/tanweel.png";
import aljode from "../assets/portfolio/aljode.png";
import weather from "../assets/portfolio/weather.png";
import todo from "../assets/portfolio/todo.png";
import { MdClose } from "react-icons/md";

import BarLoader from "react-spinners/BarLoader";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "HTML And CSS Template",
      src: htmlCss,
      description:
        "It is an application of what you have learned in HTML and CSS.",
      url: "https://ahmed-alabadla.github.io/Template/",
      code: "https://github.com/Ahmed-Alabadla/Template.git",
    },
    {
      id: 2,
      title: "Tanweel",
      src: tanweel,
      description: "It is an application of what you learned in Bootstrap.",
      url: "https://ahmed-alabadla.github.io/tanweel/",
      code: "https://github.com/Ahmed-Alabadla/tanweel.git",
    },
    {
      id: 3,
      title: "Aljode",
      src: aljode,
      description: "It is an application of what you learned in Tailwind CSS.",
      url: "https://ahmed-alabadla.github.io/aljode/",
      code: "https://github.com/Ahmed-Alabadla/aljode.git",
    },
    {
      id: 4,
      title: "Weather App",
      src: weather,
      description:
        "It is an application of what you learned in React JS and how to work with api using REST-API.",
      url: "https://ahmed-alabadla.github.io/weather-app/",
      code: "https://github.com/Ahmed-Alabadla/weather-app.git",
    },
    {
      id: 5,
      title: "ToDo list App",
      src: todo,
      description:
        "It is an application of what you learned in ( Tailwind CSS , React JS and Redux) and how to work with api using REST-API.",
      url: "https://todo-list-tasks-app.000webhostapp.com/",
      code: "https://github.com/Ahmed-Alabadla/ToDo-List-App.git",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-light dark:bg-gradient-to-b dark:from-gray-800 dark:to-black w-full md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full dark:text-white ">
        <div className="pb-8">
          <p className="text-4xl font-bold flex flex-col w-full">
            Portfolio
            <span className="mt-1">
              <BarLoader color="#06b6d4" width={143} loading={true} size={30} />
            </span>
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-9  px-12 sm:px-0 pb-10 sm:pb-0">
          {/* cards */}
          {projects.map((item) => (
            <>
              <div
                key={item.id}
                className="relative shadow-md shadow-gray-300 dark:shadow-gray-500 rounded-lg mb-10 sm:mb-0  group duration-300 hover:scale-105 h-52"
              >
                <div
                  className="flex items-center justify-center bg-cyan-500 absolute rounded-lg w-full h-full top-1/2 left-1/2 opacity-0 -z-0 -translate-x-1/2 -translate-y-1/2 group-hover:animate-show"
                  style={{ animationFillMode: "both" }}
                >
                  <button
                    className="py-4 "
                    onClick={() => {
                      setShow(true);
                      setId(item.id);
                    }}
                  >
                    <AiFillEye size={40} />
                  </button>
                </div>
                <img
                  src={item.src}
                  alt=""
                  className="rounded-md w-full h-full"
                />
              </div>

              {/* Modal */}

              {show && id === item.id && (
                <div className="absolute z-10 ">
                  <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div
                      className="fixed inset-0 bg-gray-600 bg-opacity-70 transition-opacity"
                      onClick={() => setShow(false)}
                    ></div>

                    <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
                      <div className="relative bg-white dark:bg-slate-800  rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                        <div className="p-4 flex justify-between">
                          <h3 className="text-xl font-medium">{item.title}</h3>
                          <button onClick={() => setShow(false)}>
                            <MdClose size={25} className="text-red-500" />
                          </button>
                        </div>
                        <hr className="dark:border-gray-500" />
                        <img
                          src={item.src}
                          alt=""
                          className="p-5 w-[550px] h-80"
                        />
                        <p className="px-4 pb-4 text-center text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                        <hr className="dark:border-gray-500" />
                        <div className="bg-gray-50 dark:bg-slate-800 p-4  flex justify-center gap-5">
                          <a
                            href={item.code}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white font-medium bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  flex items-center justify-center rounded-md  duration-300 hover:scale-105"
                          >
                            Code
                          </a>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white font-medium bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  flex items-center justify-center rounded-md  duration-300 hover:scale-105"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}

          {/* --------------- */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
