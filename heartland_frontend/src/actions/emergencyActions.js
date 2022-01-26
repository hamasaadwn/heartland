import axios from "axios";

import {
  LOAD_EMERGENCY_REQUEST,
  LOAD_EMERGENCY_SUCCESS,
  LOAD_EMERGENCY_FAIL,
  ADD_TO_EMERGENCY,
  REMOVE_FROM_EMERGENCY,
} from "../constants/emergencyConstants";

export const loadEmergencies = () => async (dispatch) => {
  console.log("test");
  try {
    dispatch({ type: LOAD_EMERGENCY_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/emergency`, config);

    dispatch({
      type: LOAD_EMERGENCY_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    console.log(err);
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: LOAD_EMERGENCY_FAIL, payload: err.response.data });
    }
  }
};

export const createOrUpdateEmergency =
  (type, value, nameEN, nameAR, icon) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userInfo.token,
        },
      };

      const { data } = await axios.post(
        `/api/emergency`,
        { type, value, nameEN, nameAR, icon },
        config
      );

      dispatch({
        type: ADD_TO_EMERGENCY,
        payload: data,
      });
      return data;
    } catch (err) {
      if (err.message === "Network Error") console.log(err);
      else {
        console.log(err);
        // dispatch({ type: UPDATE_CONTENT_FAIL, payload: err.response.data });
      }
    }
  };
