/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_TODOS, CHECK_TODO } from './types';

export const getTodo = () => async (dispatch) => {
  const res = await axios('/api/v2/todos');
  const finalData = res.data.todoData;
  if (res.data.error) return dispatch({ type: GET_TODOS, payload: [] });
  dispatch({ type: GET_TODOS, payload: finalData });
};

export const checkTodo = id => async (dispatch) => {
  axios({
    url: '/api/v2/updatetodos',
    method: 'POST',
    data: { todoId: id },
  });
  dispatch({
    type: CHECK_TODO,
    payload: id,
  });
};
