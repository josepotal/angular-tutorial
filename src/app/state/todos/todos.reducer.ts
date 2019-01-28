import { Todo } from '../../models/todos';

import {
  TodosAction,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from './todos.actions';

export interface TodosState {
  entities: { [id: number]: Todo };
  isFetching: boolean;
  APIError?: string;
}

export const initialState: TodosState = {
  entities: {},
  isFetching: false,
  APIError: '',
};

export function todosReducer(
  state = initialState,
  action: TodosAction,
): TodosState {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_TODOS_SUCCESS:
      const todos = action.payload;
      // In case we receive an Array
      // const entities = todos.reduce(
      //   (entities: { [id: number]: Todo }, todo: Todo) => {
      //     return {
      //       ...entities,
      //       [todo.id]: todo,
      //     };
      //   },
      //   {
      //     ...state.entities,
      //   },
      // );

      return {
        ...state,
        entities: todos,
        isFetching: false,
      };

    case FETCH_TODOS_FAILURE:
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
export const getTodosFetching = (state: TodosState) => state.isFetching;
export const getTodosApiError = (state: TodosState) => state.APIError;
export const getTodosEntities = (state: TodosState) => state.entities;
