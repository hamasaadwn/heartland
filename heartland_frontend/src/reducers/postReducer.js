import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAIL,
  ADD_POSTS_REQUEST,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAIL,
} from "../constants/postConstants";

export const loadPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      return { loading: true };
    case LOAD_POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case LOAD_POSTS_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};

export const addPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POSTS_REQUEST:
      return { loading: true };
    case ADD_POSTS_SUCCESS:
      return { loading: false, post: action.payload };
    case ADD_POSTS_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
