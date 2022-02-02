import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadEmergenciesByType } from "../../actions/emergencyActions";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import CallButton from "../../components/buttons/CallButton";
import { Container } from "../../components/styled/Container.style";
import { EmergencyContainer } from "./Emergency.styled";

const EmergencyList = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const type = params.type;

  const { emergencies } = useSelector((state) => state.emergencyList);

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
    dispatch(loadEmergenciesByType(type));
  }, [dispatch, type]);

  return (
    <Container>
      <EmergencyContainer>
        {emergencies &&
          emergencies.map((e) => <CallButton key={e._id} data={e} />)}
      </EmergencyContainer>
    </Container>
  );
};

export default EmergencyList;
