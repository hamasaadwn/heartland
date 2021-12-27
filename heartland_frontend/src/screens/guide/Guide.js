import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { GuideContainer } from "./Guide.styles";

const Guide = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <GuideContainer>
        <div className="about">
          <h1>Guide</h1>
          <p>
            {" "}
            <Link to="/trainingtool">Training Tool</Link> -{" "}
            <Link to="/assessmentform">Assessment Form</Link>
          </p>
        </div>
        <div className="img"></div>
      </GuideContainer>
    </Container>
  );
};

export default Guide;
