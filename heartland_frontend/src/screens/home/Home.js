import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { changeBackgroundToBlack } from "../../actions/rootActions";

import { CreateMargin, HomeContainer, SideMenuContainer } from "./Home.styles";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
  }, []);

  return (
    <Fragment>
      <SideMenuContainer>
        <div>
          <h1 className="side_menu_first">EN - KU</h1>
        </div>
        <div>
          <h1>
            HERTLAND <span style={{ color: "#02a89e" }}>ALL</span>IANCE
          </h1>
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} className="style-fa-search" />
        </div>
      </SideMenuContainer>
      <CreateMargin />
      <HomeContainer>
        <div className="circle">
          <div className="menu">
            <a
              href="/"
              className="main_menu_link main_menu_link_top main_menu_link_active"
            >
              Home
            </a>
          </div>
          <div className="menu">
            <Link to="/ht" className="main_menu_link main_menu_link_top">
              Human Trafficking
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/servicemap"
              className="main_menu_link main_menu_link_top"
            >
              Service Map
            </Link>
          </div>
          <div className="menu">
            <Link to="/guide" className="main_menu_link main_menu_link_top">
              Guide
            </Link>
          </div>
          <div className="menu">
            <Link to="/about" className="main_menu_link main_menu_link_bottom">
              About US
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/international"
              className="main_menu_link main_menu_link_bottom"
            >
              International &#38; Iraq law
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/activities"
              className="main_menu_link main_menu_link_bottom"
            >
              Activities
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/contact"
              className="main_menu_link main_menu_link_bottom"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </HomeContainer>
    </Fragment>
  );
};

export default Home;
