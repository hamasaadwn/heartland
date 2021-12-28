import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { changeStatesReducer } from "./reducers/rootReducer";
import { userLoginReducer, userListReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  root: changeStatesReducer,
  user: userLoginReducer,
  userList: userListReducer,
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
