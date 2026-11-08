import React from "react";
import "./Card.css";
const Cards = ({ img_src, project_name, source }) => {
  return (
    <div className="card p-8 rounded-xl text-gray-100 bg-center bg-cover w-2/5 transform duration-500 hover:-translate-y-1 cursor-pointer  ">
      <img src={img_src} width="100%" />
      <div className="card__content ">
        <p className="card__title gradient-text">{project_name} </p>
        <p className="card__description mx-auto mt-[20px] mb-[20px] text-[22px] font-light  max-w-lg"></p>
        {/* <button className="font-[600] bg-black  text-white text-base border-solid border-2 border-primaryColor p-3   mt-3  rounded-xl  hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <a href="#" target="_blank">
            Visite website
          </a>
        </button> */}
        <button className="font-[600] bg-black ml-4  text-white text-base border-solid border-2 border-primaryColor p-3   mt-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <a href={source} target="_blank">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cards;
