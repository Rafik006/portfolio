import React, { useEffect, useRef, useState } from "react";
import Template from "../../animation/Test.jsx";
import cv from "../../assets/Images/Mhadhbi_Rafik_Resume.pdf";
import Rafik_Image from "../../assets/Images/MhadhbiRafik_image.jpg";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import BIRDS from "vanta/dist/vanta.birds.min";
import Resume from "../../components/ResumePopUp/Resume.jsx";
const About_Me = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
          color1: 0xca3c3c,
          colorMode: "lerp",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section id="about_me" className="flex-1 h-[100vh] mt-[20px] ">
      <div ref={myRef}>
        <div className="flex min-h-screen  w-full">
          <div className="mx-auto">
            <div className="mx-auto mb-[30px] mt-[50px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              <img src={Rafik_Image} alt="" />
            </div>
            <h1 className="max-w-screen-md text-center text-[45px] font-extrabold ">
              <Template
                info={"Full Stack  Developer"}
                type={"heading1"}
              />

              <Template
                className="gradient-text"
                info={"JavaScript Instructor"}
                type={"heading1"}
              />
            </h1>
            <div className="mx-auto mt-[20px] mb-[20px] text-[22px] font-light text-center max-w-lg">
              <Template
                type={"paragraph"}
                info={
                  "Graduated from RebootKamp, learned full-stack development, then became good at making mobile apps with different tools. Now, I teach JavaScript to help others learn and improve their skills."
                }
              />
            </div>
            <SocialMedia />

            <div className="text-center flex justify-evenly">
              <button
                type="button"
                data-modal-target="crypto-modal"
                data-modal-toggle="crypto-modal"
                className="font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                <a href="mailto:rafikmhadhbi01@gmail.com">Get In Touch</a>
              </button>
              <button className="font-[600] bg-black  text-white text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                <a href={cv} target="_blank">
                  Download CV
                </a>
              </button>
              {/* <Resume /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Me;
