import {
  USER_AUTH_FAIL,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_LOGOUT,
} from "../constant";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return { loading: true };
    case USER_AUTH_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_AUTH_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
