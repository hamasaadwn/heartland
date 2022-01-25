import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { ActivitesContainer } from "./Activities.styles";
import { GreenButton } from "../../components/styled/form/GreenButton.style";

const Activities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <ActivitesContainer>
        <div className="about">
          <h1> {t("useful_tools")}</h1>
          <div>
            <GreenButton>Emergency Numbers</GreenButton>
            <GreenButton onClick={() => navigate("/servicemap")}>
              Find Us
            </GreenButton>
            <GreenButton>VOT Emergency Contacts</GreenButton>
          </div>
        </div>
        <div className="img"></div>
        <div className="paragraph"></div>
      </ActivitesContainer>
    </Container>
  );
};

export default Activities;
