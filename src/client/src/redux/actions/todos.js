/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_TODOS, CHECK_TODO, DELETE_TODO, ADD_TODO,
} from './types';

export const getTodo = () => async (dispatch) => {
  const res = await axios('/api/v2/todos');
  const finalData = res.data.todoData;
  if (res.data.error) return dispatch({ type: GET_TODOS, payload: [] });
  dispatch({ type: GET_TODOS, payload: finalData });
};

export const checkTodo = id => (dispatch) => {
  axios.put('/api/v2/todos', { todoId: id });
  dispatch({
    type: CHECK_TODO,
    payload: id,
  });
};

export const deleteTodo = id => (dispatch) => {
  axios.delete('/api/v2/todos', { data: { todoId: id } });
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

export const addTodo = description => (dispatch) => {
  axios.post('/api/v2/todos', { description });
  dispatch({
    type: ADD_TODO,
    payload: description,
  });
};
