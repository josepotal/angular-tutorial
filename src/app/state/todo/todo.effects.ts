import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as todoActions from './todo.actions';

import { TodoService } from 'src/app/services/todo/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todosService: TodoService) {}

  @Effect()
  fetchTodo$ = this.actions$.pipe(
    ofType(todoActions.FETCH_TODO),
    map((action: { payload: string }) => action.payload),
    mergeMap(id => {
      return this.todosService.getTodo(id).pipe(
        map(todo => new todoActions.FetchTodoSuccess(todo)),
        catchError(error => of(new todoActions.FetchTodoFailure(error))),
      );
    }),
  );
}
