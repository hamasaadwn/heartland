import { RATING_SUCCESSFUL, GET_RATING } from "../constants/ratingContants";

import axios from "axios";

export const rate = (scope, rate) => async (dispatch) => {
  try {
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    if (scope === "service") {
      const serviceFromStorage = localStorage.getItem("serviceRate")
        ? JSON.parse(localStorage.getItem("serviceRate"))
        : null;
      if (!serviceFromStorage) {
        const { data } = await axios.post(
          `/api/rating/${scope}`,
          { rate },
          config
        );
        localStorage.setItem("serviceRate", JSON.stringify(data.rated));
        dispatch({
          type: RATING_SUCCESSFUL,
          payload: data,
        });
      }
    } else if (scope === "website") {
      const websiteFromStorage = localStorage.getItem("websiteRate")
        ? JSON.parse(localStorage.getItem("websiteRate"))
        : null;
      if (!websiteFromStorage) {
        const { data } = await axios.post(
          `/api/rating/${scope}`,
          { rate },
          config
        );
        localStorage.setItem("websiteRate", JSON.stringify(data.rated));
        dispatch({
          type: RATING_SUCCESSFUL,
          payload: data,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRatings = () => async (dispatch, getState) => {
  try {
    const { data } = await axios(`/api/rating`);

    dispatch({
      type: GET_RATING,
      payload: data,
    });
    return data;
  } catch (err) {
    if (err.message === "Network Error") console.log(err);
    else {
      console.log(err.response.data);
      // dispatch({ type: ADD_POSTS_FAIL, payload: err.response.data });
    }
  }
};
