import { Action } from '@ngrx/store';
import { Todos } from '../../models/todos';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export class FetchTodos implements Action {
  readonly type = FETCH_TODOS;
}

export class FetchTodosSuccess implements Action {
  readonly type = FETCH_TODOS_SUCCESS;
  constructor(public payload: Todos) {}
}

export class FetchTodosFailure implements Action {
  readonly type = FETCH_TODOS_FAILURE;
  constructor(public payload: any) {}
}

export type TodosAction = FetchTodos | FetchTodosSuccess | FetchTodosFailure;
