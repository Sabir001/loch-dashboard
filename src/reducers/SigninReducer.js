import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from "../actions/SigninAction";
import { clearUserLocalStorage } from "../utils/helper";

const initialState = {
  signin: undefined,
  signinLoader: false,
  signout: false,
  redirect: false,
};

export default function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signinLoader: true };
    case SIGN_IN_SUCCESS:
      clearUserLocalStorage();
      localStorage.setItem("user_info", JSON.stringify(action.response.data));
      // currently facing CORS error. So, seeting a demo token
      localStorage.setItem("access_token", "demo token");
      return {
        ...state,
        signinLoader: false,
        signin: action.response,
        redirect: true,
      };
    case SIGN_IN_FAILURE: {
      clearUserLocalStorage();
      // currently facing CORS error. So, seeting a demo token
      localStorage.setItem("access_token", "demo token");
      return {
        ...state,
        signinLoader: false,
        redirect: true,
      };
    }

    default:
      return state;
  }
}
