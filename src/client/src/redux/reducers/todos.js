import {
  GET_TODOS, CHECK_TODO, DELETE_TODO, ADD_TODO,
} from '../actions/types';

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  const { todos } = state;
  let finalArray = [];
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case CHECK_TODO:
      finalArray = todos.map((todo) => {
        if (todo.id === payload) {
          const temp = todo;
          temp.checked = !todo.checked;
          return temp;
        } return todo;
      });
      return { ...state, todos: finalArray };
    case DELETE_TODO:
      finalArray = todos.filter(todo => todo.id !== payload);
      return { ...state, todos: finalArray };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos,
          { id: state.todos.length, description: payload, checked: false },
        ],
      };
    default:
      return state;
  }
}
