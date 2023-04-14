import React from "react";
import HeroImg from "../../assets/Fine.png";
import "./Main.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroColumn">
        <div className="heroCard bgHeroImg">
          <div className="heroLeft">
            <p>Leading AI Proctoring Platform In Africa</p>
            <h1>YOUR EXAM INTEGRITY IS OUR PRIORITY</h1>
            <p>Our goal is to make remote examination work for everyone</p>
            <div className="heroBtn">
              <Link className="btn prm">Btn</Link>
              <Link className="btn sec">Btn</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="heroColumn">
        <div className="heroCard heroHidden">
          <img src={HeroImg} alt="" className="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
