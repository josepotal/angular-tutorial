import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../../models/todos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  /** GET todos from the server */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8001/todos');
  }

  /** GET todo by id */
  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:8001/todos/${id}`);
  }
}
