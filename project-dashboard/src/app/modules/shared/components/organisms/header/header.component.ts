import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setPageTitle } from 'src/app/state/app.actions';

@Component({
  selector: 'jrs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string | null = '';

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  navigateToHomePage() {
    this.router.navigate(['/']);
    this.store.dispatch(setPageTitle({ pageTitle: '' }));
  }
}
