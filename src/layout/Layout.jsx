import React, { useEffect, useState } from "react";
import About_Me from "../Sections/__About_me/About_Me";
import ExprienceSection from "../Sections/__Experiences/Experiences.jsx";
import "animate.css/animate.min.css";
import Template from "../animation/Test.jsx";
import Skills from "../Sections/__Skills/Skills";
import Projects from "../Sections/__Projects/Projects";
import Footer from "../Sections/__Footer/Footer";

const Body = ({ setContactMe }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
    setContactMe(true);
  }, []);
  const bodyClass = `body-container ${animateIn ? "zoom-in" : ""}`;
  return (
    <article className={`h-auto flex flex-col  ${bodyClass}`}>
      <About_Me />

      <section className="bg-black h-auto w-screen flex flex-col justify-center items-center  ">
        <h1 className="text-white text-3xl font-bold my-4 ">
          <Template info={"Skills"} type={"heading1"} />
        </h1>
        <Skills />
      </section>

      <ExprienceSection />
      <Projects />
      <Footer />
    </article>
  );
};

export default Body;
