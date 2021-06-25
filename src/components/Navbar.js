import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/Flowtech.png";
import {motion} from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav animate={{y:0,opacity:1}} initial={{y:-100,opacity:0}} >
    
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="" width="100%" height="100%" />
        </Link>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-links">
          <Link>Categories</Link>
        </div>
        <div className="nav-links">
          <Link>About</Link>
        </div>
        <div className="nav-links">
          <Link to="/contactus">Contact</Link>
        </div>
      </div>
      <div className="icon-container">
        <div className="mail">
          <i className="far fa-envelope"></i>
        </div>
        <div className="phone">
          <i className="fas fa-phone"></i>
        </div>
        <div
          className="hamburger"
          id="hamburger"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div
            className={isOpen ? "line line-1-active" : "line"}
            id="line-1"
          ></div>
          <div
            className={isOpen ? "line line-2-active" : "line"}
            id="line-2"
          ></div>
          <div
            className={isOpen ? "line line-3-active" : "line"}
            id="line-3"
          ></div>
        </div>
      </div>

      <div
        className={
          isOpen ? "nav-mobile-container active" : "nav-mobile-container"
        }
      >
        <div className="nav-links">
          <Link>Home</Link>
        </div>
        <div className="nav-links">
          <Link>Categories</Link>
        </div>
        <div className="nav-links">
          <Link>About</Link>
        </div>
        <div className="nav-links">
          <Link>Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
