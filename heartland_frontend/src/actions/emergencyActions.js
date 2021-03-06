import axios from "axios";

import {
  LOAD_EMERGENCY_REQUEST,
  LOAD_EMERGENCY_SUCCESS,
  LOAD_EMERGENCY_FAIL,
  ADD_TO_EMERGENCY,
  REMOVE_FROM_EMERGENCY,
  LOAD_EMERGENCY_TYPE_REQUEST,
  LOAD_EMERGENCY_TYPE_SUCCESS,
  LOAD_EMERGENCY_TYPE_FAIL,
} from "../constants/emergencyConstants";

const axiosInstance = axios.create({
  baseURL: 'https://api.cccht.org'
});

export const loadEmergencies = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_EMERGENCY_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axiosInstance.get(`/api/emergency`, config);

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

      const { data } = await axiosInstance.post(
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

export const loadEmergenciesByType = (type) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_EMERGENCY_TYPE_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axiosInstance.get(`/api/emergency/${type}`, config);

    dispatch({
      type: LOAD_EMERGENCY_TYPE_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    console.log(err);
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: LOAD_EMERGENCY_TYPE_FAIL, payload: err.response.data });
    }
  }
};

export const removeEmergency = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: "Bearer " + userInfo.token,
      },
    };

    await axiosInstance.delete(`/api/emergency/${id}`, config);

    dispatch({ type: REMOVE_FROM_EMERGENCY, payload: id });
  } catch (err) {
    console.log(err);
  }
};
