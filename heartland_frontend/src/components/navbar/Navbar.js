import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Navbar as Navs } from "../styled/Navbar.style";

const Navbar = ({ bg, fg }) => {
  const { t } = useTranslation();
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
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                menuHandler();
              }}
            >
              {t("about_us")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ht"
              onClick={() => {
                menuHandler();
              }}
            >
              {t("human_trafficing")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/international"
              onClick={() => {
                menuHandler();
              }}
            >
              {t("international_and_iraqi_law")}
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
              {t("service_map")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              onClick={() => {
                menuHandler();
              }}
            >
              {t("activities")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/guide"
              onClick={() => {
                menuHandler();
              }}
            >
              {t("guide")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                menuHandler();
              }}
            >
              {t("contact_us")}
            </NavLink>
          </li>
        </ul>
      </div>
    </Navs>
  );
};

export default Navbar;
