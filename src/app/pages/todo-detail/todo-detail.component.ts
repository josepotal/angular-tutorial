import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todos';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../state';
import * as fromTodoStore from '../../state/todo';
import * as fromTodosStore from '../../state/todos';
import * as fromRouterStore from '../../state/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  @Input() todo$: Observable<Todo>;
  id: string;

  constructor(private store: Store<AppState>) {
    store
      .select<any>(fromRouterStore.getRouteParamsSelector)
      .subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    // on refresh
    this.store.dispatch(new fromTodoStore.FetchTodo(this.id));
    this.store
      .select<any>(fromTodoStore.getTodoSelector)
      .subscribe((data: Observable<Todo>) => (this.todo$ = data));

    // if we already have all todos! No need to call
    // this.store
    //   .select<any>(fromTodosStore.getSelectedTodoSelector)
    //   .subscribe((data: Observable<Todo>) => (this.todo$ = data));
  }
}
