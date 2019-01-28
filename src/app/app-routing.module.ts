import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { CustomSerializer } from './state/router/router.reducer';

import { TodosComponent } from './pages/todos/todos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
