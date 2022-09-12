import React from "react";

const { EMAIL } = require("../prod");

const ContactScreen = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-10 text-xl">Interested in working together?</p>
          <p className="text-center">
            Send the Mail and get in touch with me, I will get back to you as
            soon as I can, Please allow a couple days for me to respond
          </p>
        </div>

        <div className="text-center">
          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-300">
            <a href={`mailto:${EMAIL}`}>Contact Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
