import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../components/styled/Container.style";
import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { HumanTrafficingContainer } from "./HumanTrafficing.styles";
import { useTranslation } from "react-i18next";
import { loadContent } from "../../actions/contentActions";

const HumanTrafficing = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { content } = useSelector((state) => state.content);
  const { language } = useSelector((state) => state.root);

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
    dispatch(loadContent("Human Trafficing"));
  }, []);

  return (
    <Container>
      <HumanTrafficingContainer language={language}>
        <div className="h1-text">
          <h1>
            <span style={{ color: "#02a89e" }}>{t("ht_header_1")}</span>
            <br /> {t("ht_header_2")}
          </h1>
        </div>
        <div className="ht_text">
          {content &&
            (language === "en" ? (
              <p>{content.contentEn}</p>
            ) : language === "ar" ? (
              <p>{content.contentAr}</p>
            ) : (
              ""
            ))}
        </div>
      </HumanTrafficingContainer>
    </Container>
  );
};

export default HumanTrafficing;
