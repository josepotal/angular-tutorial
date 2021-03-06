import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../state';
import * as fromTodosStore from '../../state/todos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todos$ = this.store.select<any>(fromTodosStore.getTodosSelector);
    this.store.dispatch(new fromTodosStore.FetchTodos());
  }
}
