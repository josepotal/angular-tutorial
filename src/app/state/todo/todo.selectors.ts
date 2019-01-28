import { createSelector } from '@ngrx/store';

import { AppState } from '../index';
import * as fromTodoReducer from './todo.reducer';

// Selectors for todo

export const getTodoState = (state: AppState) => state.todo;

export const getTodoEntitiesSelector = createSelector(
  getTodoState,
  fromTodoReducer.getTodoEntities,
);

export const getTodoSelector = createSelector(
  getTodoEntitiesSelector,
  entities => {
    return Object.keys(entities).map(id => entities[id])[0];
  },
);

export const getTodoFetchingSelector = createSelector(
  getTodoState,
  fromTodoReducer.getTodoFetching,
);

export const getTodoErrorSelector = createSelector(
  getTodoState,
  fromTodoReducer.getTodoApiError,
);
