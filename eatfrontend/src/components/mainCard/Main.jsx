import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../navbarCard/Navbar";
import Footer from "../footerCard/Footer";
import Home from "./Home";
import AboutUs from "../aboutUs/AboutUs";

const Main = () => {
  return (
    <>
      <div>
        <Navbar />
        <br />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
