import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cookies from "js-cookie";

import { changeBackgroundToBlack } from "../../actions/rootActions";

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
                onClick={() => i18next.changeLanguage("en")}
              >
                EN
              </span>{" "}
              -{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => i18next.changeLanguage("ar")}
              >
                AR
              </span>
            </h1>
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
            <Link to="/guide" className="main_menu_link main_menu_link_top">
              {t("guide")}
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
              to="/activities"
              className="main_menu_link main_menu_link_bottom"
            >
              {t("activities")}
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
