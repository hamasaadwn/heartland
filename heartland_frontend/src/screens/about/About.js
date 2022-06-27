import React, { useEffect, useState } from "react";
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

  const [img, setImg] = useState("");

  const { content } = useSelector((state) => state.content);
  const { language } = useSelector((state) => state.root);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadContent("About"));
  }, []);

  useEffect(() => {
    if (content && content.image) {
      setImg('https://api.cccht.org' + content.image.replace("\\", "/"));
    }
  }, [content]);

  return (
    <Container>
      {content && (
        <AboutContainer img={content.image && img}>
          <FlexRow>
            <div className="about">
              <h1 style={{ color: "#aa1829" }}>{t("about_us")}</h1>
              <div className="paragraph" dir={language === "en" ? "ltr" : "rtl"}>
                {language === "en" ? (
                  <p>{content.contentEn}</p>
                ) : language === "ar" ? (
                  <p>{content.contentAr}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="img"></div>
          </FlexRow>
        </AboutContainer>
      )}
    </Container>
  );
};

export default About;
