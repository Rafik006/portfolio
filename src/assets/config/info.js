import Rbk_website from "../Images/Rbk_website.png";
import ecommerce from "../Images/E-commerce.png";
import travelMind from "../Images/TravelMind.png";
import shoes_Store from "../Images/shoesStore.png";
import doctorapp from "../Images/doctor_app.png";

export const Experience = [
  {
    company: "E-Tafakna",
    date: "September 2023 - Present",
    discription: [
      "Experience in the development of a mobile app for digital contract signing",
      " specializing in authentication using JWT, email, and mobile verification",
      " Proficient in utilizing React Native, SQL, and Express.js with various libraries to ensure seamless functionality",
    ],
    link: "https://www.e-tafakna.com/",
    tag: "E-Tafakna",
    post: "Full Stack Web And Mobile Developer",
  },
  {
    company: "RebootKamp",
    date: "Juin 2022 - Present",
    discription: [
      "I teach and guide individuals to master JavaScript and its frameworks",
      "paving the way for their success in web development.",
      "Forward my skills to other students and help them creating a realtime project",
    ],
    link: "https://www.rbktunisia.com/",
    tag: "RebootKamp",
    post: "JavaScript Instructor",
  },
];
const projects = [
  {
    projectName: "RebootKamp Website",
    imgSrc: Rbk_website,
    sourceCode: "https://github.com/Thesis-Project01/RBK",
  },
  {
    projectName: "E-commerce Website",
    imgSrc: ecommerce,
    sourceCode: "https://github.com/farachet/E-commerce-Next-js",
  }, 
  {
    projectName: "Travel Mind",
    imgSrc: travelMind,
    sourceCode: "https://github.com/Rafik006/TravelMind",
  },
{
    projectName: "Shoes Store",
    imgSrc: shoes_Store,
    sourceCode: "https://github.com/Rafik006/tanitown-shoe-store",
  },
  {
    projectName: "Doctor App ",
    imgSrc: doctorapp,
    sourceCode: "https://github.com/Rafik006/The-Doctor",
  },

];
export default projects;
