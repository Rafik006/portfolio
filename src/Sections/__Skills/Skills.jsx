import React from "react";
import "./skills.css";
import Template from "../../animation/Test.jsx"
const Skills = () => {
  return (
    <section id="skills" className="containerr">
      <div className="skill-box">
        <span className="title"> <Template info={"HTML"} type={"paragraph"}/> </span>

        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title"><Template info={"CSS"} type={"paragraph"}/></span>

        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">100%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title"><Template info={"javascript"} type={"paragraph"}/> </span>

        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      
      <div className="skill-box">
        <span className="title"><Template info={"React"} type={"paragraph"}/></span>

        <div className="skill-bar">
          <span className="skill-per React">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title"><Template info={"React Native"} type={"paragraph"}/></span>

        <div className="skill-bar">
          <span className="skill-per React">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title"> <Template info={"Node Js"} type={"paragraph"}/></span>

        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title"><Template info={"MYSQL"} type={"paragraph"}/></span>

        <div className="skill-bar">
          <span className="skill-per Mysql">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
    </section>
   
  );
};

export default Skills;




