import {
  LOAD_MAPS_REQUEST,
  LOAD_MAPS_SUCCESS,
  LOAD_MAPS_FAIL,
  REMOVE_FROM_MAPS,
  ADD_MAPS_REQUEST,
  ADD_MAPS_SUCCESS,
  ADD_MAPS_FAIL,
  LOAD_MAP_REQUEST,
  LOAD_MAP_SUCCESS,
  LOAD_MAP_FAIL,
} from "../constants/mapConstants";

import axios from "axios";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

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

    const { data } = await axiosInstance.get("/api/maps", config);

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

export const loadMapByCity = (city) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_MAP_REQUEST });

    const { data } = await axiosInstance.get(`/api/maps/m/${city}`);

    dispatch({ type: LOAD_MAP_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: LOAD_MAP_FAIL,
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

      const { data } = await axiosInstance.post(
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

export const removeMap = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: "Bearer " + userInfo.token,
      },
    };

    await axiosInstance.delete(`/api/maps/${id}`, config);

    dispatch({ type: REMOVE_FROM_MAPS, payload: id });
  } catch (err) {
    console.log(err);
  }
};
