import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../../actions/rootActions";
import { Container } from "../../../components/styled/Container.style";
import { TrainingToolsContainer } from "./TrainingTools.style";

const TrainingTools = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <TrainingToolsContainer>
        <div className="about">
          <h1>Training Tools</h1>
        </div>
        <div className="img"></div>
      </TrainingToolsContainer>
    </Container>
  );
};

export default TrainingTools;
