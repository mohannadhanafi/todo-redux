/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_TODOS } from './types';

export const getTodo = () => async (dispatch) => {
  const res = await axios('/api/v2/todos');
  const finalData = res.data.todoData;
  if (res.data.error) return dispatch({ type: GET_TODOS, payload: [] });
  dispatch({ type: GET_TODOS, payload: finalData });
};
