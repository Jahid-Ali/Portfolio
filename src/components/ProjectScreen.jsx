import React, { useState } from "react";

import advMovies from "../assets/portfolio/Screenshot1.png";
import foodies from "../assets/portfolio/Screenshot2.png";
import taskManager1 from "../assets/portfolio/Screenshot3.png";
import basicMovies from "../assets/portfolio/Screenshot4.png";
import taskManager2 from "../assets/portfolio/Screenshot5.png";
import trendygram from "../assets/portfolio/trendygram.png";

import Popup from "./Popup";

const ProjectScreen = () => {
  const projectLinks = [
    {
      id: 1,
      src: advMovies,
      title: "Movies Hub",
      desc: "Movies Hub is a WebApp made for Movies lover. Here you will get all the Movies, Series, Tv shows details and also you can Search and much more things. Here I am using nice loading and carousel effect",
      demo: "https://flixmovies001.netlify.app/",
      code: "https://github.com/Jahid-Ali/Advance-movie-app",
      tech: "REACTJS, CSS, API, FETCH Function",
    },
    {
      id: 2,
      src: trendygram,
      title: "Trendygram",
      desc: "Trendygram is a WebApp. Here you can post pictures, like, unlike, comment, follow, unfollow, search user and much more things.",
      demo: "https://trendygram.herokuapp.com/signin",
      code: "https://github.com/Jahid-Ali/TrendyGram",
      tech: "REACTJS, NODEJS, MONGODB, MONGOOSE, EXPRESSJS, FETCH, CSS",
    },
    {
      id: 3,
      src: foodies,
      title: "Foodies",
      desc: "Foodies is a WebApp made for Food lover. Here you will get all the differents food with there ingredients and also you can Search whatever food you want to cook and you will get list of differents foods with there ingredients.",
      demo: "https://foodies24x7.netlify.app/",
      code: "https://github.com/Jahid-Ali/Recipes",
      tech: "REACTJS, CSS, API, AXIOS",
    },
    {
      id: 4,
      src: taskManager2,
      title: "TODO-APP",
      desc: "Todo-App is a baisc todo webapp, Here you can add your daily tasks and also you can Update and Delete it. In this instead of using axios.delete and axios.update, I am using axios.post for delete and update...",
      demo: "https://todo-app-1002.herokuapp.com/",
      code: "https://github.com/Jahid-Ali/Todo-App-002",
      tech: "REACTJS, NODEJS, MONGODB, MONGOOSE, EXPRESSJS, AXIOS, CSS",
    },
    {
      id: 5,
      src: basicMovies,
      title: "MoviesApp",
      desc: "MoviesApp is a basic WebApp made for movies lover. Here you can Search whatever movies you want to, and get details of it.. ",
      demo: "https://movieshub24x7.netlify.app/",
      code: "https://github.com/Jahid-Ali/MoviesHub",
      tech: "REACTJS, CSS, API, AXIOS",
    },
    {
      id: 6,
      src: taskManager1,
      title: "Project Title",
      desc: "Todo-App is a baisc todo webapp, Here you can add your daily tasks and also you can Update and Delete it. In this instead of using axios.delete and axios.update, I am using axios.post for delete and update...",
      demo: "https://todo-app-1001.herokuapp.com/",
      code: "https://github.com/Jahid-Ali/todo-app",
      tech: "REACTJS, NODEJS, MONGODB, MONGOOSE, EXPRESSJS, AXIOS, CSS",
    },
  ];

  const [showPopUp, setShowPopUp] = useState(false);
  const [getImage, setGetImage] = useState();
  const [getTitle, setGetTitle] = useState();
  const [getDesc, setGetDesc] = useState();
  const [getTech, setGetTech] = useState();

  const getImgSrcAndShowPopup = (src, title, desc, tech) => {
    setShowPopUp(true);
    setGetImage(src);
    setGetTitle(title);
    setGetDesc(desc);
    setGetTech(tech);
  };

  const closePopup = () => {
    setShowPopUp(false);
  };

  return (
    <div
      name="project"
      className="bg py-40 sm:pt-60 mb-20 w-full text-gray-800 pb-20 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-10">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectLinks.map(({ id, src, title, desc, demo, code, tech }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project_img"
                onClick={() => getImgSrcAndShowPopup(src, title, desc, tech)}
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <button className="demo_btn_shadow rounded w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-cyan-500 shadow-lg shadow-cyan-500/50">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="code_btn_shadow rounded w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-orange-500 shadow-md shadow-orange-500/50">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
              <Popup
                visible={showPopUp}
                onClose={closePopup}
                imgSrc={getImage}
                title={getTitle}
                desc={getDesc}
                tech={getTech}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
