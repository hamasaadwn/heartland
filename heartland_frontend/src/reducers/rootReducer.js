import { BLACK_BACKGROUND, LIGHT_BACKGROUND } from "../constants/rootConstants";

export const changeBackgroundReducer = (state = {}, action) => {
  switch (action.type) {
    case BLACK_BACKGROUND:
      return { black: true };
    case LIGHT_BACKGROUND:
      return { black: false };
    default:
      return state;
  }
};
