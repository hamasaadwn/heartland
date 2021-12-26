import {
  BLACK_BACKGROUND,
  CHANGE_LANGUAGE,
  LIGHT_BACKGROUND,
} from "../constants/rootConstants";

export const changeStatesReducer = (state = {}, action) => {
  switch (action.type) {
    case BLACK_BACKGROUND:
      return { ...state, black: true };
    case LIGHT_BACKGROUND:
      return { ...state, black: false };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

// export const changeLanguageReducer = (state = {}, action) => {
//   switch (action.type) {
//     case CHANGE_LANGUAGE:
//       return { language: action.payload };
//     default:
//       return state;
//   }
// };
