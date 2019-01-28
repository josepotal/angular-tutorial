import { ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromTodos from './todos';
import * as fromTodo from './todo';
import { RouterStateUrl } from './router';

export interface AppState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  todos: fromTodos.TodosState;
  todo: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  routerReducer: fromRouter.routerReducer,
  todos: fromTodos.todosReducer,
  todo: fromTodo.todoReducer,
};
