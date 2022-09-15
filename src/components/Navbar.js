import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../redux/modeSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
      href: "#home",
    },
    {
      id: 2,
      link: "About",
      href: "#about",
    },
    {
      id: 3,
      link: "Portfolio",
      href: "#portfolio",
    },
    {
      id: 4,
      link: "Experience",
      href: "#experience",
    },
    {
      id: 5,
      link: "Contact",
      href: "#contact",
    },
  ];

  const { mode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (mode === "dark") {
      dispatch(lightMode());
      localStorage.setItem("mode", "light");
    }
    if (mode === "light") {
      dispatch(darkMode());
      localStorage.setItem("mode", "dark");
    }
  };

  let option = window.localStorage.getItem("mode");
  if (option !== null) {
    if (option === "dark") {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  }

  return (
    <nav className="bg-light dark:text-white dark:bg-black px-6 ">
      {/* container mx-auto */}
      <div className="flex justify-between items-center w-full h-20 ">
        <h1 className="text-4xl md:text-5xl font-signature font-semibold  z-10">
          Eng.Ahmed
        </h1>

        <ul className="hidden md:flex ">
          {links.map(({ link, id, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium dark:text-gray-400 hover:scale-105 duration-200 text-slate-700"
            >
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Button Dark/Light mode */}

        <button
          id="switcher"
          className="relative inline-flex items-center z-10 py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600 dark:bg-slate-700 dark:text-slate-400 dark:focus-visible:ring-slate-500"
          onClick={handleClick}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="transform transition-transform scale-0 dark:scale-100 duration-500 dark:duration-300"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            className="ml-3.5 transform transition-transform scale-100 dark:scale-0 duration-300 dark:duration-500"
          >
            <path
              d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform dark:translate-x-[2.625rem]">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="flex-none transition duration-500 transform text-cyan-500 opacity-100 dark:opacity-0 scale-100 dark:scale-0"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 dark:opacity-100 scale-0 dark:scale-100"
            >
              <path
                d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>

        {/* Burger Icon */}
        <div
          className="cursor-pointer z-30 text-gray-600 dark:text-gray-400 block md:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? (
            <FaTimes className="text-red-500" size={25} />
          ) : (
            <FaBars size={25} />
          )}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-light dark:from-black dark:to-gray-800 text-slate-700 dark:text-gray-400 z-20">
            {links.map(({ link, id, href }) => (
              <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
                <a href={href} className="p-3" onClick={() => setNav(!nav)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
