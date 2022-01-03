import axios from "axios";

import {
  LOAD_CONTACT_REQUEST,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_FAIL,
} from "../constants/contactConstants";

export const loadContact = (type) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CONTACT_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/contact`, config);

    dispatch({
      type: LOAD_CONTACT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    console.log(err);
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: LOAD_CONTACT_FAIL, payload: err.response.data });
    }
  }
};
