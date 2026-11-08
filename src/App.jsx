import { useState, useRef, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Layout from "./layout/Layout.jsx";
import Landing_Page from "./components/LandingPage/Landing_Page";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [ContactMe,setContactMe]=useState(false)
  const getStart = () => {
    setAnimateOut(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
    }, 500);
  };
 
  const landingPageClass = `landing-page ${animateOut ? "zoom-out" : ""}`;
  return (
    <div>
      <NavBar ContactMe={ContactMe}  onStartClick={getStart} />
      {isLoading ? (
        <Landing_Page onStartClick={getStart} className={landingPageClass} />
      ) : (
        <div>
          <Layout setContactMe={setContactMe} />
        </div>
      )}
    </div>
  );
}
