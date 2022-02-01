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
import { FlexRow } from "../../components/styled/FlexRow.style";

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
        <FlexRow>
          <div className="about">
            <h1 style={{ color: "#aa1829" }}>{t("about_us")}</h1>
            <div className="paragraph">
              {/* {content &&
            (language === "en" ? (
              <p>{content.contentEn}</p>
            ) : language === "ar" ? (
              <p>{content.contentAr}</p>
            ) : (
              ""
            ))} */}
              <p>Heartland Alliance International (HAI) has been working in Iraq since 2004, helping victims of human rights abuses heal and obtain justice, and building the capacity of Iraqi human rights activists and organizations. HAI is active in torture prevention and treatment, gender-based vio</p>

            </div>
          </div>
          <div className="img"></div>
        </FlexRow>

      </AboutContainer>
    </Container>
  );
};

export default About;
