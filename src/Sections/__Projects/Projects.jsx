import React from 'react';
import Template from '../../animation/Test.jsx';
import Cards from '../../components/project_card/Cards.jsx';
import projects from "../../assets/config/info.js"
const Projects = () => {
  return (
    <section id="projects" className="container mx-auto">
      <Template info={'My Projects'} className={'text-3xl font-bold mb-7'} type="paragraph" />
      <div className="container flex flex-wrap gap-6 justify-center items-center md:py-10 md:px-0 md:max-[500px]:flex-col projects">
      {projects.map((project,index)=><Cards 
      key={index}
         img_src={project.imgSrc}
         project_name={project.projectName} 
          // className="w-full md:w-auto"
         source={project.sourceCode}
      />)}
        
      </div>
    </section>
  );
};

export default Projects;
