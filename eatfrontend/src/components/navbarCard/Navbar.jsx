import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleNavIcon, setToggleNavIcon] = useState("ci:hamburger-md");
  const [toggleNavLogo, setToggleNavLogo] = useState("navLogoBig");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNavBtn = () => {
    setToggleNav(!toggleNav);
    if (toggleNav) {
      setToggleNavIcon("ci:hamburger-md");
      setToggleNavLogo("navLogoBig");
    } else {
      setToggleNavIcon("material-symbols:close");
      setToggleNavLogo("hidden");
    }
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <div>
        <img src="./logo192.png" alt="" className="navLogo" />
      </div>
      {(toggleNav || screenWidth > 700) && (
        <ul className="navList">
          <li className="navItems">
            <img src="./logo192.png" alt="" className={toggleNavLogo} />
          </li>
          <li className="navItems">
            <Link to="/" onClick={toggleNavBtn}>
              Home
            </Link>{" "}
          </li>
          <li className="navItems">
            {" "}
            <Link to="AboutUs" onClick={toggleNavBtn}>
              About
            </Link>{" "}
          </li>
          <li className="navItems">
            {" "}
            <Link to="Contact" onClick={toggleNavBtn}>
              Contact
            </Link>
          </li>
          <li className="navItems">
            <Link to="Pricing" onClick={toggleNavBtn}>
              Pricing
            </Link>{" "}
          </li>
          <li className="navItems">
            {" "}
            <Link to="Login" className ="btn sec" onClick={toggleNavBtn}>
              Login
            </Link>
          </li>
        </ul>
      )}

      <Icon icon={toggleNavIcon} onClick={toggleNavBtn} className="navBtn" />
    </nav>
  );
};

export default Navbar;
