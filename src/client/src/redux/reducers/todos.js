import { GET_TODOS } from '../actions/types';

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
}
