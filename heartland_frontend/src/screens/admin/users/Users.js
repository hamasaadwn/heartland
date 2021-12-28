import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
  }, []);
  return <div style={{ color: "white", fontSize: "40px" }}>test</div>;
};

export default Users;
