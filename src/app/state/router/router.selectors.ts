import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../index';
import * as fromRouterReducer from './router.reducer';
import * as fromRouter from '@ngrx/router-store';

// Selectors for router
export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<fromRouterReducer.RouterStateUrl>
>('routerReducer');

export const getRouteParamsSelector = createSelector(
  getRouterState,
  router => router.state && router.state.params,
);
