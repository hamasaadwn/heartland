import {
  LOAD_MAPS_REQUEST,
  LOAD_MAPS_SUCCESS,
  LOAD_MAPS_FAIL,
  ADD_MAPS_REQUEST,
  ADD_MAPS_SUCCESS,
  ADD_MAPS_FAIL,
} from "../constants/mapConstants";

import axios from "axios";

export const loadAllMaps = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_MAPS_REQUEST });

    const {
      user: { userInfo },
    } = getState();
    const config = {
      headers: {
        authorization: "Bearer " + userInfo.token,
      },
    };

    const { data } = await axios.get("/api/maps", config);

    dispatch({ type: LOAD_MAPS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: LOAD_MAPS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const addMap =
  (name, thumbnail, countryMap, cityMap, cityMapAdd, branch) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_MAPS_REQUEST });

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
        `/api/maps`,
        { name, thumbnail, countryMap, cityMap, cityMapAdd, branch },
        config
      );

      dispatch({
        type: ADD_MAPS_SUCCESS,
        payload: data,
      });

      return data;
    } catch (err) {
      if (err.message === "Network Error") console.log(err);
      else {
        console.log(err);
        dispatch({ type: ADD_MAPS_FAIL, payload: err.response.data });
      }
    }
  };
