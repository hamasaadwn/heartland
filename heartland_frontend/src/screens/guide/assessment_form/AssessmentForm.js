import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { Container } from "../../../components/styled/Container.style";
import { AssessmentFormContainer } from "./AssessmentForm.styles";

const AssessmentForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
  }, []);

  return (
    <Container>
      <AssessmentFormContainer>
        <div className="about">
          <h2>
            Assessment <br />
            <span style={{ color: "black" }}> Form</span>
          </h2>
        </div>
        <div className="img"></div>
      </AssessmentFormContainer>
    </Container>
  );
};

export default AssessmentForm;
