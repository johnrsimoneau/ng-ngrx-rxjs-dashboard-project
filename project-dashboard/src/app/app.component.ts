import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { setPageTitle } from './state/app.actions';
import { selectPageTitle } from './state/app.selectors';
import { AppState } from './state/app.state';
@Component({
  selector: 'jrs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle$ = this.store.select(pipe(selectPageTitle));

  constructor(private router: Router, private store: Store<AppState>) {}

  handleLinkClick(linkName: any) {
    this.store.dispatch(setPageTitle({ pageTitle: linkName }));
  }

  handleLogoClick() {
    this.router.navigate(['/']);
    this.store.dispatch(setPageTitle({ pageTitle: 'WELCOME' }));
  }
}
