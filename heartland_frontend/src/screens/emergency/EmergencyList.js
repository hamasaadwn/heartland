import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import CallButton from "../../components/buttons/CallButton";
import { Container } from "../../components/styled/Container.style";
import { EmergencyContainer } from "./Emergency.styled";

const EmergencyList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  const testDAta = {
    number: "1",
    nameEn: "Test",
    nameAr: "التێست",
    icon: "/images/policeman.png",
  };

  return (
    <Container>
      <EmergencyContainer>
        <CallButton data={testDAta} />
        <CallButton data={testDAta} />
        <CallButton data={testDAta} />
        <CallButton data={testDAta} />
        <CallButton data={testDAta} />
        <CallButton data={testDAta} />
        <CallButton data={testDAta} />
      </EmergencyContainer>
    </Container>
  );
};

export default EmergencyList;
