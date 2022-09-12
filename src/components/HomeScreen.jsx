import React from "react";
import myimage from "../assets/myimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const HomeScreen = () => {
  return (
    <div
      name="home"
      className="pt-20 h-screen w-full bg bg-gradient-to-b from-black via-black to-slate-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl customSize font-bold text-gray-700">
            I'm
            <span>
              <Typewriter
                words={[" Jahid Ali.", " A Coder.", " Full Stack Developer."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love to work on web application using technologies like Html, Css,
            JavaScript, React, NodeJs, MongoDB, Tailwind, Bootstrap.
          </p>

          <div>
            <Link to="project" smooth={true} duration={500}>
              <button className="group btn_shadow text-white px-6 py-3 my-4 flex items-center rounded-tl-[12px] rounded-br-[12px] duration-300">
                Project
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={myimage}
            alt="my profile"
            className="rounded-2xl ml-auto mr-auto w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
