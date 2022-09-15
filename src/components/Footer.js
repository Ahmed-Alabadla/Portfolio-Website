import React from "react";
import {
  // BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer class="p-4 bg-light sm:p-6 dark:bg-black border-t border-gray-200 dark:border-gray-700">
      {/* container mx-auto */}
      <div class=" flex flex-col justify-center sm:flex-row gap-8 sm:justify-between items-center w-full">
        <h1 className="text-4xl md:text-5xl font-signature font-semibold  z-10 text-gray-800 dark:text-gray-50">
          Eng.Ahmed
        </h1>
        <ul className="flex space-x-6  sm:justify-center mb-3 sm:mb-0">
          <li>
            <a
              href="mailto:eng.ahmedalabadla@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <MdEmail className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ahmed-Alabadla"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsGithub className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmed-alabadla-302a7b24b"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsLinkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </li>
          {/* <li>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsFacebook className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </li> */}
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=970597762451"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ahmed._.alabadla/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
