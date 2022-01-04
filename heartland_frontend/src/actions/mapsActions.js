import {
  LOAD_MAPS_REQUEST,
  LOAD_MAPS_SUCCESS,
  LOAD_MAPS_FAIL,
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
