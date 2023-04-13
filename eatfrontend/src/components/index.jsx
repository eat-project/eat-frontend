import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./navbarCard/Navbar";
import Footer from "./footerCard/Footer";
import Main from "./mainCard/Main";
import AboutUs from "./aboutUs/AboutUs";

const EatProject = () => {
  return (
   <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="AboutUs" element={<AboutUs />} />

      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default EatProject;
