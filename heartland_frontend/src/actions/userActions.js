import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  LOAD_ALL_USERS_REQUEST,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAIL,
  LOAD_ALL_USERS_RESET,
  ADD_USER_TO_USERLIST,
  REMOVE_USER_FROM_USERLIST,
} from "../constants/userConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: USER_LOGIN_FAIL, payload: err.response.data });
    }
  }
};

export const allUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_ALL_USERS_REQUEST });

    const {
      user: { userInfo },
    } = getState();
    const config = {
      headers: {
        authorization: "Bearer " + userInfo.token,
      },
    };

    const { data } = await axios.get("/api/users", config);

    dispatch({ type: LOAD_ALL_USERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: LOAD_ALL_USERS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
