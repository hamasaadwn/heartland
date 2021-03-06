import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { ActivitesContainer } from "./Activities.styles";
import { FlexRow } from "../../components/styled/FlexRow.style";
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
        <FlexRow>
          <div className="about ">
            <h1> {t("useful_tools")}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GreenButton onClick={() => navigate("/posts/Training")}>
                {t("training")}
              </GreenButton>
              <GreenButton onClick={() => navigate("/posts/Guide")}>
                {t("guide")}
              </GreenButton>

              <GreenButton
                onClick={() => navigate("/posts/Flyer And Brochure")}
              >
                {t("flyer_and_brochure")}
              </GreenButton>
              <GreenButton onClick={() => navigate("/posts/Form")}>
                {t("form")}
              </GreenButton>
            </div>
          </div>
          <div className="img"></div>
          {/* <div className="paragraph"></div> */}
        </FlexRow>
      </ActivitesContainer>
    </Container>
  );
};

export default Activities;

// <div
//   style={{
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//   }}
// >
//   <GreenButton onClick={() => navigate("/e/Emergency")}>
//     {t("emergency_numbers")}
//   </GreenButton>
//   <GreenButton onClick={() => navigate("/servicemap")}>
//     {t("find_us")}
//   </GreenButton>
//   <GreenButton onClick={() => navigate("/e/VOT")}>
//     {t("vot_emergency_contacts")}
//   </GreenButton>
// </div>