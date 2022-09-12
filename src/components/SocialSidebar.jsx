import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { HiMail } from "react-icons/hi";

const SocialSidebar = () => {
  const sidebarLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={28} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md shadow-sky-600",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={28} />
        </>
      ),
      href: "https://github.com",
      style: "shadow-gray-900",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiMail size={30} />
        </>
      ),
      href: "mailto:aliofficial6265@gmail.com",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaUserCircle size={27} />
        </>
      ),
      href: "https://www.google.com/",
      style: "rounded-br-md shadow-green-700",
      download: true,
    },
  ];

  return (
    <div className="hidden socialCustom flex-col top-[34.8%] left-0 fixed">
      <ul>
        {sidebarLinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`shadow-md skillsbg flex justify-between items-center w-40 h-14 px-2 ml-[-120px] hover:ml-[-4px] hover:rounded-md duration-300  ${style}`}
          >
            <a
              href={href}
              className="flex ml-2 justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSidebar;
