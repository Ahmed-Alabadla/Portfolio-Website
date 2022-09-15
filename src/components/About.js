import React from "react";
import BarLoader from "react-spinners/BarLoader";

const About = () => {
  return (
    <div
      id="about"
      className="bg-light dark:bg-gradient-to-b dark:from-black dark:to-gray-800 w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full dark:text-white ">
        <div className="pb-8">
          <p className="text-4xl font-bold  flex flex-col w-full">
            About
            <span className="mt-1">
              <BarLoader color="#06b6d4" loading={true} size={30} />
            </span>
          </p>
        </div>

        {/* <p className="text-gray-500 py-4 max-w-2xl mx-3 text-xl leading-8">
          I have 2 years of experience building and designing software. I can
          convert the design file into web page. I create responsive website
          that are displayed on all devices desktops and smartphones by CSS and
          CSS frameworks (Bootstrap, Tailwind). Currently, I love to work on web
          application using technologies like React, Bootstrap and Tailwind CSS.
        </p> */}
        <p className="text-gray-500 py-4 max-w-2xl mx-3 text-xl leading-8">
          Experienced Web Developer adept in all stages of advanced web
          development and building. Knowledgeable in user interface, testing,
          and debugging processes. Able to effectively self-manage during
          independent projects, as well as collaborate as part of a productive
          team. I can convert the design file into web page. I create responsive
          website that are displayed on all devices desktops and smartphones by
          CSS and CSS frameworks (Bootstrap, Tailwind). Currently, I love to
          work on web application using technologies like React, Bootstrap and
          Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default About;
