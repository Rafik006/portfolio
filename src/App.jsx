import React from "react";
import "./App.css";
import ScrollProgress from "./components/motion/ScrollProgress.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";
import Layout from "./layout/Layout.jsx";

export default function App() {
  return (
    <>
      <a href="#about_me" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-night focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <ScrollProgress />
      <NavBar />
      <Layout />
    </>
  );
}
