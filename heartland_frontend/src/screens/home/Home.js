import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cookies from "js-cookie";

import {
  changeBackgroundToBlack,
  changeLanguage,
  changeNavbar,
} from "../../actions/rootActions";

import { CreateMargin, HomeContainer, SideMenuContainer } from "./Home.styles";
const Home = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLanguageCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("none"));
  }, [i18next.language]);

  const { t } = useTranslation();

  return (
    <Fragment>
      <div dir="ltr">
        <SideMenuContainer>
          <div>
            <h1 className="side_menu_first">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(changeLanguage("en"));
                  i18next.changeLanguage("en");
                }}
              >
                EN
              </span>{" "}
              -{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(changeLanguage("ar"));
                  i18next.changeLanguage("ar");
                }}
              >
                AR
              </span>
            </h1>
          </div>
          <div>
            <h1>
              CC<span style={{ color: "#02a89e" }}>C</span>{" "}
              <span style={{ color: "#aa1829" }}>HT</span>
            </h1>
          </div>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} className="style-fa-search" />
          </Link>
        </SideMenuContainer>
      </div>

      <CreateMargin />
      <HomeContainer>
        <div className="circle">
          <div className="menu">
            <a
              href="/"
              className="main_menu_link main_menu_link_top main_menu_link_active"
            >
              {t("home")}
            </a>
          </div>
          <div className="menu">
            <Link to="/ht" className="main_menu_link main_menu_link_top">
              {t("human_trafficing")}
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/servicemap"
              className="main_menu_link main_menu_link_top"
            >
              {t("service_map")}
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/seeking_help"
              className="main_menu_link main_menu_link_top"
            >
              {t("seeking_help")}
            </Link>
          </div>
          <div className="menu">
            <Link to="/about" className="main_menu_link main_menu_link_bottom">
              {t("about_us")}
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/international"
              className="main_menu_link main_menu_link_bottom"
            >
              {t("international_and_iraqi_law")}
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/useful_tools"
              className="main_menu_link main_menu_link_bottom"
            >
              {t("useful_tools")}
            </Link>
          </div>
          <div className="menu">
            <Link
              to="/contact"
              className="main_menu_link main_menu_link_bottom"
            >
              {t("contact_us")}
            </Link>
          </div>
        </div>
      </HomeContainer>
    </Fragment>
  );
};

export default Home;
