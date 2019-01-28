import { Todo } from '../../models/todos';

import {
  TodoAction,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from './todo.actions';

export interface TodoState {
  entities: { [id: string]: Todo };
  isFetching: boolean;
  APIError?: string;
}

export const initialState: TodoState = {
  entities: {},
  isFetching: false,
  APIError: '',
};

export function todoReducer(
  state = initialState,
  action: TodoAction,
): TodoState {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_TODO_SUCCESS:
      const todo = action.payload;

      const entities = {
        [todo.id]: todo,
      };

      return {
        ...state,
        entities,
        isFetching: false,
      };

    case FETCH_TODO_FAILURE:
      return {
        ...state,
        isFetching: false,
        APIError: 'Error API',
      };

    default:
      return state;
  }
}

// Selectors functions
export const getTodoFetching = (state: TodoState) => state.isFetching;
export const getTodoApiError = (state: TodoState) => state.APIError;
export const getTodoEntities = (state: TodoState) => state.entities;
