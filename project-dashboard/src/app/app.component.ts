import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPageTitle } from './state/app.selectors';
import { AppState } from './state/app.state';

@Component({
  selector: 'jrs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  pageTitle$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pageTitle$ = this.store.pipe(select(selectPageTitle));
  }
}
