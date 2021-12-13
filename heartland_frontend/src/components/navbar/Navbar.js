import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Navbar as Navs } from "../styled/Navbar.style";

const Navbar = ({ bg, fg }) => {
  const [open, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen(!open);
  };

  return (
    <Navs bg={bg} fg={fg}>
      <div className="nav_container">
        <div
          className={`hamburger ${open ? "open " : ""}`}
          onClick={() => {
            menuHandler();
          }}
        >
          <div className={`line top ${open ? "open " : ""}`}></div>
          <div className={`line middle ${open ? "open " : ""}`}></div>
          <div className={`line bottom ${open ? "open " : ""}`}></div>
        </div>
        <ul className={open ? "open " : ""}>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                menuHandler();
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                menuHandler();
              }}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ht"
              onClick={() => {
                menuHandler();
              }}
            >
              Human traffiking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/international"
              onClick={() => {
                menuHandler();
              }}
            >
              International &#38; Iraq law
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                menuHandler();
              }}
            >
              HEARTLAND <br /> <span style={{ color: "#02a89e" }}>ALLI</span>
              ANCE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicemap"
              onClick={() => {
                menuHandler();
              }}
            >
              Service Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              onClick={() => {
                menuHandler();
              }}
            >
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/guide"
              onClick={() => {
                menuHandler();
              }}
            >
              Guide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                menuHandler();
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </Navs>
  );
};

export default Navbar;
