import { RATING_SUCCESSFUL } from "../constants/ratingContants";

export const ratingReducer = (state = {}, action) => {
  switch (action.type) {
    case RATING_SUCCESSFUL:
      return { ...state, rated: action.payload };
    default:
      return state;
  }
};
