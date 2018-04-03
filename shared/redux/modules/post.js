// counter.js

// Actions
const ASYNC_DEMO = 'ASYNC_DEMO';

import { postMock } from './../initialStates';

// Reducer
export default function reducer(state = postMock, action = {}) {
  switch (action.type) {
    // do reducer stuff
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
export function fetchData(post) {
  return { type: ASYNC_DEMO, payload: post };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export const loadPost = () => (dispatch, getState, { axios }) =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      dispatch(fetchData(res.data));
    })
    .catch(err => {
      console.log('err');
    });
