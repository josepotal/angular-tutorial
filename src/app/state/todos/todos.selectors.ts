import { createSelector } from '@ngrx/store';

import { AppState } from '../index';
import * as fromTodosReducer from './todos.reducer';
import { getRouterState } from '../router/router.selectors';

// Selectors for todos

export const getTodosState = (state: AppState) => state.todos;

export const getTodosEntitiesSelector = createSelector(
  getTodosState,
  fromTodosReducer.getTodosEntities,
);

export const getTodosSelector = createSelector(
  getTodosEntitiesSelector,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  },
);

export const getSelectedTodoSelector = createSelector(
  getTodosEntitiesSelector,
  getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.id];
  },
);

export const getTodosFetchingSelector = createSelector(
  getTodosState,
  fromTodosReducer.getTodosFetching,
);

export const getTodosErrorSelector = createSelector(
  getTodosState,
  fromTodosReducer.getTodosApiError,
);
