import {
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAIL,
  RESET_CONTENT,
  UPDATE_CONTENT_REQUEST,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAIL,
} from "../constants/contentConstants";

import axios from "axios";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const loadContent = (type) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CONTENT_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axiosInstance.get(`/api/content/${type}`, config);

    dispatch({
      type: LOAD_CONTENT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: LOAD_CONTENT_FAIL, payload: err.response.data });
    }
  }
};

export const resetContent = () => (dispatch) => {
  dispatch({ type: RESET_CONTENT });
};

export const createOrUpdateContent =
  (type, contentEn, contentAr) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_CONTENT_REQUEST });

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
        `/api/content/${type}`,
        { type, contentEn, contentAr },
        config
      );

      dispatch({
        type: UPDATE_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err.message === "Network Error") console.log(err);
      else {
        console.log(err);
        dispatch({ type: UPDATE_CONTENT_FAIL, payload: err.response.data });
      }
    }
  };
