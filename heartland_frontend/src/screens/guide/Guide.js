import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { GuideContainer } from "./Guide.styles";
import { GreenButton } from "../../components/styled/form/GreenButton.style";

const Guide = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <GuideContainer>
        <div className="about">
          <h1>{t("seeking_help")}</h1>
          <div>
            <GreenButton>{t("training")}</GreenButton>
            <GreenButton>{t("guide")}</GreenButton>
            <GreenButton>{t("form")}</GreenButton>
            <GreenButton>{t("flyer_and_brochure")}</GreenButton>
          </div>
        </div>
        <div className="img"></div>
      </GuideContainer>
    </Container>
  );
};

export default Guide;
