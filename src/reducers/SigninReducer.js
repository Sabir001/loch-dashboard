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
};

export default function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signinLoader: true };
    case SIGN_IN_SUCCESS:
      clearUserLocalStorage();
      localStorage.setItem("user_info", JSON.stringify(action.response.data));
      return { ...state, signinLoader: false, signin: action.response };
    case SIGN_IN_FAILURE: {
      clearUserLocalStorage();
      return {
        ...state,
        signinLoader: false,
        signin: action.response,
        signout: true,
      };
    }

    default:
      return state;
  }
}
