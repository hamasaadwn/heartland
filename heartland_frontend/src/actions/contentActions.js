import {
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAIL,
  RESET_CONTENT,
} from "../constants/contentConstants";

import axios from "axios";

export const loadContent = (type) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CONTENT_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/content/${type}`, config);

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
