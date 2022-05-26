import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { NavLinkObj } from '@modules/shared/interfaces/ui.interface';
import { setPageTitle } from './state/app.actions';
import { selectPageTitle } from './state/app.selectors';
import { State } from './state/app.state';
@Component({
  selector: 'jrs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle$ = this.store.select(pipe(selectPageTitle));

  navLinks: NavLinkObj[] = [
    {
      to: '/projects',
      text: 'PROJECTS',
    },
    {
      to: '/projects',
      text: 'COMPANIES',
    },
    {
      to: '/projects',
      text: 'CONSULTANTS',
    },
  ];

  constructor(private router: Router, private store: Store<State>) {}

  handleLinkClickEvent(linkName: any) {
    this.store.dispatch(setPageTitle({ pageTitle: linkName }));
  }

  handleLogoClickEvent() {
    this.router.navigate(['/']);
    this.store.dispatch(setPageTitle({ pageTitle: 'WELCOME' }));
  }
}
