import {
  USER_AUTH_FAIL,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_LOGOUT,
} from "../constant";

const signIn = (auth) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST, payload: auth });
    localStorage.setItem("userInfo", true);
    dispatch({ type: USER_AUTH_SUCCESS, payload: true });
  } catch (error) {
    dispatch({ type: USER_AUTH_FAIL, payload: error });
  }
};

const signOut = () => async (dispatch) => {
  localStorage.setItem("userInfo", false);
  dispatch({ type: USER_LOGOUT });
};

export { signIn, signOut };
