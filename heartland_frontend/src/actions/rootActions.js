import {
  BLACK_BACKGROUND,
  CHANGE_LANGUAGE,
  CHANGE_MODAL,
  CHANGE_NAVBAR,
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

export const changeNavbar = (navbar) => async (dispatch) => {
  try {
    dispatch({ type: CHANGE_NAVBAR, payload: navbar });
  } catch (err) {
    console.log(err);
  }
};

export const changeUserModal = (modal) => async (dispatch) => {
  try {
    dispatch({ type: CHANGE_MODAL, payload: modal });
  } catch (err) {
    console.log(err);
  }
};
