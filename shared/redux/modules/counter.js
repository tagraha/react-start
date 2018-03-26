// counter.js

// Actions
const INCREMENT = 'INCREMENT';
const ASYNC_DEMO = 'ASYNC_DEMO';

const initialState = {
  counterValue: 0,
  asyncPostExample: {
    body: '',
    id: 0,
    title: '',
    userId: 0,
  },
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case INCREMENT: {
      return {
        ...state,
        counterValue: parseInt(action.payload + 1, 10),
      };
    }
    case ASYNC_DEMO: {
      return {
        ...state,
        asyncPostExample: action.payload,
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

export function fetchData(post) {
  return { type: ASYNC_DEMO, payload: post };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export const invokeIncrement = () => (dispatch, getState) => {
  const { counterValue } = getState().counter;
  return dispatch(increment(counterValue));
};

export const loadPost = () => (dispatch, getState, { axios }) => axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => {
    dispatch(fetchData(res.data));
  })
  .catch((err) => {
    console.log('err');
  });
