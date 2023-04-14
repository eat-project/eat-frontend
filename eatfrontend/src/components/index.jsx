import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./authCard/Login";
import Signup from "./authCard/Signup";
import Main from "./mainCard/Main";

const EatProject = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="AboutUs" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default EatProject;
