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

import axios from "axios";

export const loadPosts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_POSTS_REQUEST });

    const {
      user: { userInfo },
    } = getState();

    var config = {
      method: "get",
      url: "/api/posts/author",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // const config = {
    //   Headers: {
    //     Authorization: "Bearer " + userInfo.token,
    //   },
    // };

    const { data } = await axios(config);

    dispatch({
      type: LOAD_POSTS_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: LOAD_POSTS_FAIL, payload: err.response.data });
    }
  }
};

export const loadPostsList =
  (language, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: LOAD_POSTS_LIST_REQUEST });

      const { data } = await axios(`/api/posts/${language}/${category}`);

      dispatch({
        type: LOAD_POSTS_LIST_SUCCESS,
        payload: data,
      });
      return data;
    } catch (err) {
      if (err.message === "Network Error") console.log(err);
      else {
        dispatch({ type: LOAD_POSTS_LIST_FAIL, payload: err.response.data });
      }
    }
  };

export const loadSinglePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_POSTS_REQUEST });

    const { data } = await axios(`/api/posts/${id}`);

    dispatch({
      type: ADD_POSTS_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: ADD_POSTS_FAIL, payload: err.response.data });
    }
  }
};

export const addPost =
  (title, describtion, image, pictures, video, language, type, pdf) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_POSTS_REQUEST });

      const {
        user: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userInfo.token,
        },
      };

      const { data } = await axios.post(
        `/api/posts`,
        { title, describtion, image, pictures, video, language, type, pdf },
        config
      );

      dispatch({
        type: ADD_POSTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err.message === "Network Error") console.log(err);
      else {
        console.log(err);
        dispatch({ type: ADD_POSTS_FAIL, payload: err.response.data });
      }
    }
  };

export const searchPosts = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({ type: SEARCH_POSTS_REQUEST });

    const { data } = await axios(`/api/posts/s?keyword=${keyword}`);

    dispatch({
      type: SEARCH_POSTS_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    if (err.message === "Network Error") console.log(err);
    else {
      dispatch({ type: SEARCH_POSTS_FAIL, payload: err.response.data });
    }
  }
};
