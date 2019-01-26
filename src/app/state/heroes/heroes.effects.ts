import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as heroesActions from './heroes.actions';

import { HeroService } from 'src/app/services/hero/hero.service';

@Injectable()
export class HeroesEffects {
  constructor(private actions$: Actions, private heroesService: HeroService) {}

  @Effect()
  fetchHeroes$ = this.actions$.pipe(
    ofType(heroesActions.FETCH_HEROES),
    mergeMap(() => {
      return this.heroesService.getHeroes().pipe(
        map(heroes => new heroesActions.FetchHeroesSuccess(heroes)),
        catchError(error => of(new heroesActions.FetchHeroesFailure(error))),
      );
    }),
  );
}
