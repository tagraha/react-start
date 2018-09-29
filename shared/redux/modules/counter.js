// counter.js
import { counterMock } from './../initialStates';

// Actions
const INCREMENT = 'INCREMENT';

// Reducer
export default function reducer(state = counterMock, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case INCREMENT: {
      return {
        ...state,
        counterValue: parseInt(action.payload + 1, 10),
      };
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function increment(value) {
  return { type: INCREMENT, payload: value };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export const invokeIncrement = () => (dispatch, getState) => {
  const { counterValue } = getState().counter;
  return dispatch(increment(counterValue));
};
