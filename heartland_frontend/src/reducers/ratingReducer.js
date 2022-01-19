import { RATING_SUCCESSFUL, GET_RATING } from "../constants/ratingContants";

export const ratingReducer = (state = {}, action) => {
  switch (action.type) {
    case RATING_SUCCESSFUL:
      return { ...state, rated: action.payload };
    case GET_RATING:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
