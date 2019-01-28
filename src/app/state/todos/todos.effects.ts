import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as todosActions from './todos.actions';

import { TodoService } from 'src/app/services/todo/todo.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodoService) {}

  @Effect()
  fetchTodos$ = this.actions$.pipe(
    ofType(todosActions.FETCH_TODOS),
    mergeMap(() => {
      return this.todosService.getTodos().pipe(
        map(todos => new todosActions.FetchTodosSuccess(todos)),
        catchError(error => of(new todosActions.FetchTodosFailure(error))),
      );
    }),
  );
}
