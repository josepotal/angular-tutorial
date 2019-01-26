import { Hero } from '../../models/heroes';

import {
  HeroesAction,
  FETCH_HEROES,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAILURE,
} from './heroes.actions';

export interface HeroesState {
  data: Hero[];
  isFetching: boolean;
  APIError?: string;
}

export const initialState: HeroesState = {
  data: [],
  isFetching: false,
  APIError: '',
};

export function heroesReducer(
  state = initialState,
  action: HeroesAction,
): HeroesState {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };

    case FETCH_HEROES_FAILURE:
      return {
        ...state,
        isFetching: false,
        APIError: 'Error API',
      };

    default:
      return state;
  }
}

// Selectors functions
export const getHeroesFetching = (state: HeroesState) => state.isFetching;
export const getHeroesApiError = (state: HeroesState) => state.APIError;
export const getHeroes = (state: HeroesState) => state.data;
