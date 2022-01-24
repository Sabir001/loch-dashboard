import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  SUCCESS,
  FAILURE,
} from "../actions/DealsAction";

const initialState = {
  counter: 0,
  todos: undefined,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.incrementValue };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.decrementValue };
    case SUCCESS: {
      return { ...state, todos: action?.response?.data };
    }
    case FAILURE: {
      return { ...state, todos: undefined };
    }
    default:
      return state;
  }
}
