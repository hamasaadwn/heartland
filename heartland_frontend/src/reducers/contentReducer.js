import {
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAIL,
  RESET_CONTENT,
  UPDATE_CONTENT_REQUEST,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAIL,
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

export const updateContentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CONTENT_REQUEST:
      return { loading: true };
    case UPDATE_CONTENT_SUCCESS:
      return { loading: false, content: action.payload };
    case UPDATE_CONTENT_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
