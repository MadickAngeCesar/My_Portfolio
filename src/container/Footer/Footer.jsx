/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  
  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:madickangecesar59@gmail.com" className="p-text">
            madickangecesar59@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="https://wa.me/695391883" target="_blank" className="p-text">
            (+237) 695391883
          </a>
        </div>
      </div>
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "app__whitebg"
);
