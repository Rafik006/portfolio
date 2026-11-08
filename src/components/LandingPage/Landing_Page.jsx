import React, { useEffect, useRef, useState } from "react";
import Template from "../../animation/Test.jsx";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import BIRDS from "vanta/dist/vanta.birds.min";

const Landing_Page = ({ onStartClick, className }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      console.log("test");
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf0d22,
          size: 1.9,
          backgroundColor: 0xffffff,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    // bg-gradient-to-r from-purple-600 to-blue-600

    <div
      className={`landing-page relative  h-screen text-white overflow-hidden ${className}  `}
      ref={myRef}
    >
     
      <div className="absolute inset-0">
        <img src="" />
        <div className="absolute inset-0 bg-white "></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight  text-black mb-4">
          <Template info={"WELCOME TO MY DIGITAL SPACE"} type={"paragraph"} />
        </h1>
        <div className="text-2xl text-black mb-8 font-semibold">
          <Template
            info={" FULL-STACK DEVELOPER COMES ALIVE WITH EVERY SCROLL "}
            type={"paragraph"}
          />
        </div>
        {/* <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a> */}
        <button
          className="font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl bg-black hover:bg-white hover:text-black  hover:p-[10px] transition-all duration-300 ease-in-out"
          onClick={onStartClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing_Page;
