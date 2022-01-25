import { all, put, takeLatest } from "redux-saga/effects";
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from "../actions/SigninAction";
import { defaultApi } from "../utils/AxiosApi";

export function* invokeSigninApi({ credential }) {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/auth/login`;

  const { response, error } = yield defaultApi(
    endpoint,
    "POST",
    credential,
    true
  );

  if (response) {
    yield put({
      type: SIGN_IN_SUCCESS,
      data: response,
    });
  } else if (error) {
    const data = error.data;
    yield put({
      type: SIGN_IN_FAILURE,
      message: data.message,
    });
  } else {
    yield put({
      type: SIGN_IN_FAILURE,
      message: "Something went wrong!",
    });
  }
}

export function* signin() {
  yield takeLatest(SIGN_IN, invokeSigninApi);
}

export default function* rootSaga() {
  yield all([signin()]);
}
