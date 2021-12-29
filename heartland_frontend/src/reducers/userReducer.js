import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  LOAD_ALL_USERS_REQUEST,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAIL,
  LOAD_ALL_USERS_RESET,
  ADD_USER_TO_USERLIST,
  REMOVE_USER_FROM_USERLIST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, errors: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case LOAD_ALL_USERS_REQUEST:
      return { loading: true, users: [] };
    case LOAD_ALL_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case LOAD_ALL_USERS_FAIL:
      return { loading: false, error: action.payload };
    case LOAD_ALL_USERS_RESET:
      return { loading: false, users: [] };
    case ADD_USER_TO_USERLIST:
      return { ...state, users: [...state.users, action.payload] };
    case REMOVE_USER_FROM_USERLIST:
      return {
        loading: false,
        users: state.users.filter((u) => u._id !== action.payload),
      };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: "User has been added successfully",
      };
    case USER_REGISTER_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
