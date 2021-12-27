import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { ActivitesContainer } from "./Activities.styles";

const Activities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return (
    <Container>
      <ActivitesContainer>
        <div className="about">
          <h1>Activities</h1>
        </div>
        <div className="img"></div>
        <div className="paragraph">
          <p>
            Officia pariatur sunt consequat enim quis. Deserunt ex et ullamco
            excepteur consequat reprehenderit. Aute minim et excepteur eiusmod
            sunt qui veniam elit qui pariatur tempor. Culpa quis consequat irure
            ad ex esse sit commodo.Consectetur sit esse sunt duis deserunt
            eiusmod esse amet sunt nulla dolore. Proident eu tempor id elit
            ullamco aliqua enim nisi Lorem. Deserunt anim exercitation cillum
            consequat elit. Id cupidatat aliqua ut laboris et dolore ad nisi
            ipsum. Officia eiusmod eu enim sit. Do cupidatat magna ea cillum
            exercitation. Adipisicing exercitation aute consectetur eiusmod eu.
            Excepteur excepteur dolore laborum consequat cillum. Consequat
            reprehenderit sint consectetur cillum ea mollit nisi exercitation
            consectetur labore. Do nulla commodo qui est tempor ex velit eu quis
            ea. Laboris fugiat minim ad nisi cupidatat reprehenderit mollit
            labore minim voluptate laborum aute. Laboris laboris elit deserunt
            minim aliqua ea ullamco esse proident excepteur aliqua fugiat. Qui
            laboris ullamco commodo veniam. Duis do dolore reprehenderit
            cupidatat ex. Esse deserunt non in tempor dolor officia in voluptate
            pariatur. Fugiat do nulla occaecat mollit quis est sint consequat
            eiusmod cillum cillum laboris. Ex ex aute excepteur dolore voluptate
            sint dolore pariatur amet est adipisicing sit sit nostrud. Non ut
            labore nostrud irure exercitation.
          </p>
        </div>
      </ActivitesContainer>
    </Container>
  );
};

export default Activities;
