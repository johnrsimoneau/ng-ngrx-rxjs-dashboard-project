import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { ProjectPageActions } from './../state/actions/index';
import { State } from '../state/project.reducer';
import {
  getProjectLoadingStatus,
  getProjects,
} from '../state/project.selectors';

@Component({
  selector: 'jrs-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects$ = this.store.pipe(select(getProjects));

  projectsLoading$ = this.store.pipe(select(getProjectLoadingStatus));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.pipe(select(getProjects), take(1)).subscribe({
      next: (items) => {
        if (items.length < 1) {
          this.loadProjects();
        }
      },
    });
  }

  loadProjects(): void {
    this.store.dispatch(ProjectPageActions.loadProjects());
  }
}
