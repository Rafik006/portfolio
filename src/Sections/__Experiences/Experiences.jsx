import React, { useState } from "react";
import { Experience } from "../../assets/config/info";
import Template from "../../animation/Test.jsx";

function ExprienceSection() {
  const [selectedCompany, setSelectedCompany] = useState(Experience[0].tag);

  return (
    <section id="experience" className="flex flex-col items-center w-screen">
      <div id="experience" className=" mx-auto w-11/12 ">
        <header>
          <h1 className="text-3xl font-bold my-4 "> My Experience</h1>
          <hr className="my-4" />
          {/* Desktop Version */}
          <div className="hidden md:flex text-center">
            <div className="flex flex-col space-y-2">
              {Experience.map((item, index) => (
                <button
                  key={index}
                  className={`${
                    selectedCompany === item.tag
                      ? "bg-black text-white"
                      : "text-black"
                  } font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out`}
                  onClick={() => setSelectedCompany(item.tag)}
                >
                  {item.company}
                </button>
              ))}
            </div>
            <div className="flex-grow ml-4">
              {Experience.map((item, key) => (
                <div
                  key={key}
                  className={`${
                    selectedCompany === item.tag ? "block" : "hidden"
                  } tab-pane fade show active`}
                  id={`nav-${item.tag}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${item.tag}-tab`}
                >
                  <h1 className="text-2xl font-bold mb-2">
                    {item.post} <span>@ {item.company}</span>
                  </h1>
                  <h3 className="text-gray-600">{item.date}</h3>
                  <ul>
                    {item.discription.map((desc, index) => (
                      <li key={index} className="text-xl  mb-1 font-light ">
                        <Template info={desc} type="paragraph" />
                        {/* {desc} */}
                      </li>
                    ))}
                  </ul>
                  {item.link && (
                    <button className="font-[600] bg-black  text-white text-base border-solid border-2 border-primaryColor p-3   mt-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                      <a href={item.link} target="_blank">
                        Visite website
                      </a>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Version */}
          <div className="md:hidden">
            <nav>
              <div className="flex space-x-2">
                {Experience.map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      selectedCompany === item.tag
                        ? "bg-black text-white"
                        : "text-black"
                    } flex-grow py-2 px-4 rounded-md`}
                    onClick={() => setSelectedCompany(item.tag)}
                  >
                    {item.company}
                  </button>
                ))}
              </div>
            </nav>
            <div className="mt-4 text-center">
              {Experience.map((item, key) => (
                <div
                  key={key}
                  className={`${
                    selectedCompany === item.tag ? "block" : "hidden"
                  } tab-pane fade show active`}
                  id={`nav-${item.tag}-1`}
                  role="tabpanel"
                  aria-labelledby={`nav-${item.tag}-tab-1`}
                >
                  <h1 className="text-2xl font-bold mb-2">
                    {item.post} <span>@ {item.company}</span>
                  </h1>
                  <h3 className="text-gray-600">{item.date}</h3>
                  <ul>
                    {item.discription.map((desc, index) => (
                      <li key={index} className="text-sm mb-1">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  {item.link && (
                    <button className="font-[600] bg-black  text-white text-base border-solid border-2 border-primaryColor p-3   mt-3  rounded-xl  hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                      <a href={item.link} target="_blank">
                        Visite website
                      </a>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default ExprienceSection;
