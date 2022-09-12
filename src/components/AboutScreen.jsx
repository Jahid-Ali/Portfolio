import React from "react";

const AboutScreen = () => {
  return (
    <div
      name="about"
      className="bg w-full py-40 sm:py-60 text-gray-800 bg-gradient-to-t from-black via-black to-slate-800 md:border-t-4 border-b-4 border-gray-500"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-center leading-8 tracking-wide">
          Recent computer science graduate from Shri Shankaracharya Institute of
          Professional Management and Technology Raipur, with a passion for
          developing scalable web application and working across the full stack.
          Seeking for an oppurtunity to grow my skill sets in the area of Web
          development.
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
