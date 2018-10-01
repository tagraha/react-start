// counter.js
import { postMock } from './../initialStates';

// Actions
const ASYNC_DEMO = 'ASYNC_DEMO';
const ASYNC_DEMO_FAILED = 'ASYNC_DEMO_FAILED';

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
    case ASYNC_DEMO_FAILED: {
      return {
        ...state,
        asyncPostExample: {
          body: 'fetch post failed, maybe your internet connection',
          title: 'whoops, failed fetch data',
          id: 0,
          userId: 0,
        },
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

export function fetchDataFailed() {
  return { type: ASYNC_DEMO_FAILED };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export const loadPost = () => (dispatch, getState, { axios }) =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
      dispatch(fetchData(res.data));
    })
    // eslint-disable-next-line
    .catch((err) => {
      dispatch(fetchDataFailed());
    });
