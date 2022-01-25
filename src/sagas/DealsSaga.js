import { all, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_RECEIVED_DEALS,
  FETCH_RECEIVED_DEALS_SUCCESS,
  FETCH_RECEIVED_DEALS_FAILURE,
} from "../actions/DealsAction";
import { defaultApi } from "../utils/AxiosApi";

function* invokeReceivedDealsApi() {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/deal/received`;
  const { response, error } = yield defaultApi(
    endpoint,
    "GET",
    undefined,
    true
  );
  if (response) {
    yield put({
      type: FETCH_RECEIVED_DEALS_SUCCESS,
      response,
    });
  }
  if (error) {
    yield put({
      type: FETCH_RECEIVED_DEALS_FAILURE,
      error,
    });
  }
}
function* fetchReceivedDeals() {
  yield takeLatest(FETCH_RECEIVED_DEALS, invokeReceivedDealsApi);
}

export default function* rootSaga() {
  yield all([fetchReceivedDeals()]);
}
