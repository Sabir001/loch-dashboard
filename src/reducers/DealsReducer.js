import {
  FETCH_RECEIVED_DEALS,
  FETCH_RECEIVED_DEALS_SUCCESS,
  FETCH_RECEIVED_DEALS_FAILURE,
} from "../actions/DealsAction";

import { SIGNED_OUT } from "../actions/index";

const initialState = {
  receivedDeals: undefined,
  loader: false,
};

export default function dealsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECEIVED_DEALS:
      return { ...state, loader: true };
    case FETCH_RECEIVED_DEALS_SUCCESS:
      return { ...state, receivedDeals: action.response, loader: false };
    case FETCH_RECEIVED_DEALS_FAILURE: {
      return { ...state, receivedDeals: undefined, loader: false };
    }

    case SIGNED_OUT:
      return { ...initialState };
    default:
      return state;
  }
}
