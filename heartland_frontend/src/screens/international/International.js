import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "../../components/styled/Container.style";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";

import { InternationalContainer } from "./International.styles";

const International = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
  }, []);

  return (
    <Container>
      <InternationalContainer>
        <div className="law_card">
          <Link to="/posts/Iraq">
            <div className="text">
              <h2>
                {t("iraq_working_laws_t1")}
                <br />
                {t("iraq_working_laws_t2")}
              </h2>
            </div>
          </Link>
          <Link to="/posts/Iraq">
            <div className="image">
              <div className="text_positioning">
                <h2>{t("iraq")}</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="law_card">
          <Link to="/posts/International">
            <div className="text">
              <h2>
                {t("international_working_laws_t1")}
                <br />
                {t("international_working_laws_t2")}
              </h2>
            </div>
          </Link>
          <Link to="/posts/International">
            <div className="image">
              <div className="text_positioning">
                <h2>{t("intenational")}</h2>
              </div>
            </div>
          </Link>
        </div>
      </InternationalContainer>
    </Container>
  );
};

export default International;
