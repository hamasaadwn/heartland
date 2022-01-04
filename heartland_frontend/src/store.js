import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { changeStatesReducer } from "./reducers/rootReducer";
import {
  userLoginReducer,
  userListReducer,
  userRegisterReducer,
} from "./reducers/userReducer";
import {
  loadContentReducer,
  updateContentReducer,
} from "./reducers/contentReducer";
import { addPostsReducer, loadPostsReducer } from "./reducers/postReducer";
import { loadContactReducer } from "./reducers/contactReducer";
import { loadMapsReducer } from "./reducers/mapReducer";

const reducer = combineReducers({
  root: changeStatesReducer,
  user: userLoginReducer,
  userList: userListReducer,
  regUser: userRegisterReducer,
  content: loadContentReducer,
  updateContent: updateContentReducer,
  posts: loadPostsReducer,
  post: addPostsReducer,
  contacts: loadContactReducer,
  maps: loadMapsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  root: { black: true },
  user: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
