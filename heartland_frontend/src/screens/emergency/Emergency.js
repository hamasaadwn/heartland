import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";

const Emergency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
  }, []);

  return <Container></Container>;
};

export default Emergency;
