import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromHeroes from './heroes';

export interface AppState {
  heroes: fromHeroes.HeroesState;
}

export const reducers: ActionReducerMap<AppState> = {
  heroes: fromHeroes.heroesReducer,
};

// Selectors for heroes
export const getHeroesState = (state: AppState) => state.heroes;

export const getHeroes = createSelector(
  getHeroesState,
  fromHeroes.getHeroes,
);

export const getHeroesFetching = createSelector(
  getHeroesState,
  fromHeroes.getHeroesFetching,
);

export const getHeroesError = createSelector(
  getHeroesState,
  fromHeroes.getHeroesApiError,
);
