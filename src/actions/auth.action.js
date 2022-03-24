import {
  USER_AUTH_FAIL,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constant";

import Axios from "axios";
import Cookies from "js-cookie";

const signIn = (auth) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST, payload: auth });
    const { data } = await Axios.post(
      "http://18.218.193.140:8080/v1/auth/login",
      auth
    );
    Cookies.set("userInfo", JSON.stringify(data));
    dispatch({ type: USER_AUTH_SUCCESS, payload: true });
  } catch (error) {
    console.log(error)
    dispatch({ type: USER_AUTH_FAIL, payload: error });
  }
};

const register = (registerData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { username: registerData.username, email: registerData.email },
    });
    const { data } = await Axios.post(
      "http://18.218.193.140:8080/v1/auth/register",
      registerData
    );

    Cookies.set("userInfo", JSON.stringify(data));
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: { username: registerData.username, email: registerData.email },
    });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error });
  }
};

const signOut = () => async (dispatch) => {
  Cookies.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export { signIn, signOut, register };
