import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPageTitle } from 'src/app/state/app.actions';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(setPageTitle({ pageTitle: 'Project Dashboard' }));
    console.log('project page loaded');
  }
}
