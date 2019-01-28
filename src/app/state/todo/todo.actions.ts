import { Action } from '@ngrx/store';
import { Todo } from '../../models/todos';

export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';

export class FetchTodo implements Action {
  readonly type = FETCH_TODO;
  constructor(public payload: string) {}
}

export class FetchTodoSuccess implements Action {
  readonly type = FETCH_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class FetchTodoFailure implements Action {
  readonly type = FETCH_TODO_FAILURE;
  constructor(public payload: any) {}
}

export type TodoAction = FetchTodo | FetchTodoSuccess | FetchTodoFailure;
