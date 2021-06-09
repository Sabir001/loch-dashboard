import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actions";

const initialState = {
  counter: 0,
};

export function reducer(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.incrementValue };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.decrementValue };
    default:
      return state;
  }
}
