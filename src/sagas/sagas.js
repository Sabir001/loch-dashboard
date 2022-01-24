import { put, takeLatest } from "redux-saga/effects";
import { FAILURE, FETCH, SUCCESS } from "../actions/DealsAction";
import { defaultApi } from "../utils/AxiosApi";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  const endpoint = "https://jsonplaceholder.typicode.com/todos";
  const { response, error } = yield defaultApi(
    endpoint,
    "GET",
    undefined,
    true
  );
  if (response) {
    yield put({
      type: SUCCESS,
      response,
    });
  }
  if (error) {
    yield put({
      type: FAILURE,
      error,
    });
  }
}
function* mySaga() {
  yield takeLatest(FETCH, fetchUser);
}

export default mySaga;
