import axios from "axios";

import {
  LOAD_CONTACT_REQUEST,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_FAIL,
  LOAD_CONTACT_CLASSES_REQUEST,
  LOAD_CONTACT_CLASSES_SUCCESS,
  LOAD_CONTACT_CLASSES_FAIL,
  ADD_TO_CONTACTS,
  REMOVE_FROM_CONTACTS,
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

export const loadContactList = (type) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CONTACT_CLASSES_REQUEST });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/contact`, config);

    let newData = { emails: [], nums: [], sm: [] };

    data.map((d) => {
      if (d.type === "email") {
        newData.emails.push(d);
      } else if (d.type === "phone") {
        newData.nums.push(d);
      } else {
        newData.sm.push(d);
      }
    });

    dispatch({
      type: LOAD_CONTACT_CLASSES_SUCCESS,
      payload: newData,
    });
    return data;
  } catch (err) {
    console.log(err);
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: LOAD_CONTACT_CLASSES_FAIL, payload: err.response.data });
    }
  }
};

export const createOrUpdateContact =
  (type, value) => async (dispatch, getState) => {
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
        `/api/contact`,
        { type, value },
        config
      );

      dispatch({
        type: ADD_TO_CONTACTS,
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

export const removeContact = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: "Bearer " + userInfo.token,
      },
    };

    await axios.delete(`/api/contact/${id}`, config);

    dispatch({ type: REMOVE_FROM_CONTACTS, payload: id });
  } catch (err) {
    console.log(err);
  }
};
