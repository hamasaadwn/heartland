import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { FlexRow } from "../../components/styled/FlexRow.style";
import { GuideContainer } from "./Guide.styles";
import { GreenButton } from "../../components/styled/form/GreenButton.style";

const Guide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <GuideContainer>
        <FlexRow>
          <div className="about">
            <h1>{t("seeking_help")}</h1>
            <div>
              <GreenButton onClick={() => navigate("/posts/Training")}>
                {t("training")}
              </GreenButton>
              <GreenButton onClick={() => navigate("/posts/Guide")}>
                {t("guide")}
              </GreenButton>
              <GreenButton onClick={() => navigate("/posts/Form")}>
                {t("form")}
              </GreenButton>
              <GreenButton onClick={() => navigate("/posts/Flyer And Brochure")}>
                {t("flyer_and_brochure")}
              </GreenButton>
            </div>
          </div>
          <div className="img"></div>
        </FlexRow>
      </GuideContainer>
    </Container>
  );
};

export default Guide;
