import { Action } from '@ngrx/store';
import { Heroes } from '../../models/heroes';

export const FETCH_HEROES = 'FETCH_HEROES';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE';

export class FetchHeroes implements Action {
  readonly type = FETCH_HEROES;
}

export class FetchHeroesSuccess implements Action {
  readonly type = FETCH_HEROES_SUCCESS;
  constructor(public payload: Heroes) {}
}

export class FetchHeroesFailure implements Action {
  readonly type = FETCH_HEROES_FAILURE;
  constructor(public payload: any) {}
}

export type HeroesAction =
  | FetchHeroes
  | FetchHeroesSuccess
  | FetchHeroesFailure;
