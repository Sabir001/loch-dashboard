import { all, fork } from "redux-saga/effects";
import signinSaga from "./SigninSaga";
import dealsSaga from "./DealsSaga";

export default function* rootSaga() {
  yield all([fork(signinSaga), fork(dealsSaga)]);
}
