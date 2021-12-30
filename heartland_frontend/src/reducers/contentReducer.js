import {
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAIL,
  RESET_CONTENT,
} from "../constants/contentConstants";

export const loadContentReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CONTENT_REQUEST:
      return { loading: true };
    case LOAD_CONTENT_SUCCESS:
      return { loading: false, content: action.payload };
    case LOAD_CONTENT_FAIL:
      return { loading: false, errors: action.payload };
    case RESET_CONTENT:
      return {};
    default:
      return state;
  }
};
