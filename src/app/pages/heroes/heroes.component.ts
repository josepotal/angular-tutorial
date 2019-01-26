import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/heroes';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../state';
import * as fromStoreActions from '../../state/heroes/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.heroes$ = this.store.select<any>(fromStore.getHeroes);
    this.store.dispatch(new fromStoreActions.FetchHeroes());
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }
}
