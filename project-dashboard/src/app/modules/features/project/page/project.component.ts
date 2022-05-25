import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPageTitle } from 'src/app/state/app.actions';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  constructor(private store: Store) {}
}
