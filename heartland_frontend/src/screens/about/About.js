import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Container } from "../../components/styled/Container.style";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";

import { AboutContainer } from "./About.Styles";
import { loadContent } from "../../actions/contentActions";

const About = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { content } = useSelector((state) => state.content);
  const { language } = useSelector((state) => state.root);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadContent("About"));
  }, []);

  return (
    <Container>
      <AboutContainer>
        <div className="about">
          <h1>{t("about_us")}</h1>
        </div>
        <div className="img"></div>
        <div className="paragraph">
          {content &&
            (language === "en" ? (
              <p>{content.contentEn}</p>
            ) : language === "ar" ? (
              <p>{content.contentAr}</p>
            ) : (
              ""
            ))}
        </div>
      </AboutContainer>
    </Container>
  );
};

export default About;
