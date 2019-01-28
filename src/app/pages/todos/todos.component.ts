import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../state';
import * as fromTodosStore from '../../state/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todos$ = this.store.select<any>(fromTodosStore.getTodosSelector);
    this.store.dispatch(new fromTodosStore.FetchTodos());
  }

  // delete(todo: Todo): void {
  //   this.todos = this.todos.filter(h => h !== todo);
  //   this.todoService.deleteTodo(todo).subscribe();
  // }
}
