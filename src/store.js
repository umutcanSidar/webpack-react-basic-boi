import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth.reducer";

const userInfo = localStorage.getItem("userInfo") || null;

const initalState = {
  login: { userInfo },
};

const rootReducer = combineReducers({
  login: authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  initalState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
