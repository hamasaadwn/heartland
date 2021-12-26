import {
  BLACK_BACKGROUND,
  CHANGE_LANGUAGE,
  LIGHT_BACKGROUND,
} from "../constants/rootConstants";

export const changeBackgroundToBlack = () => async (dispatch) => {
  try {
    dispatch({ type: BLACK_BACKGROUND });
  } catch (err) {
    console.log(err);
  }
};

export const changeBackgroundToWhite = () => async (dispatch) => {
  try {
    dispatch({ type: LIGHT_BACKGROUND });
  } catch (err) {
    console.log(err);
  }
};

export const changeLanguage = (language) => async (dispatch) => {
  try {
    dispatch({ type: CHANGE_LANGUAGE, payload: language });
  } catch (err) {
    console.log(err);
  }
};
