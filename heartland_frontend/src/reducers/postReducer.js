import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAIL,
  LOAD_POSTS_LIST_REQUEST,
  LOAD_POSTS_LIST_SUCCESS,
  LOAD_POSTS_LIST_FAIL,
  ADD_POSTS_REQUEST,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAIL,
  SEARCH_POSTS_REQUEST,
  SEARCH_POSTS_SUCCESS,
  SEARCH_POSTS_FAIL,
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

export const loadPostsListReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS_LIST_REQUEST:
      return { loading: true };
    case LOAD_POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case LOAD_POSTS_LIST_FAIL:
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

export const searchResultReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_POSTS_REQUEST:
      return { loading: true };
    case SEARCH_POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case SEARCH_POSTS_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
