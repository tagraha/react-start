// counter.js

// Actions
const INCREMENT = 'INCREMENT';

const initialState = {
  counterValue: 0
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case INCREMENT: {
      return {
        ...state,
        counterValue: parseInt(action.payload + 1)
      }
    }
    default: { return state; }
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
}
