import React from "react";
import Hero from "../Sections/__Hero/Hero.jsx";
import About_Me from "../Sections/__About_me/About_Me.jsx";
import Skills from "../Sections/__Skills/Skills.jsx";
import ExperienceSection from "../Sections/__Experiences/Experiences.jsx";
import Stories from "../Sections/__Stories/Stories.jsx";
import Projects from "../Sections/__Projects/Projects.jsx";
import Contact from "../Sections/__Contact/Contact.jsx";
import Footer from "../Sections/__Footer/Footer.jsx";

const Layout = () => (
  <>
    <main>
      <Hero />
      <About_Me />
      <Skills />
      <ExperienceSection />
      <Stories />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Layout;
