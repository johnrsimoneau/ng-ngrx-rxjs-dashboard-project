import { Injectable } from '@angular/core';
import { ProjectState } from '@modules/features/project/state/project.reducer';
import {
  getFilteredProjects,
  getProjectLoadingStatus,
  getProjects,
} from '@modules/features/project/state/project.selectors';
import { Status } from '@modules/shared/types/status.types';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { ProjectPageActions } from './actions';

@Injectable({
  providedIn: 'root',
})
export class ProjectFacade {
  projects$ = this.store.pipe(select(getProjects));

  filteredProjects$ = this.store.pipe(select(getFilteredProjects));

  projectsLoading$ = this.store.pipe(select(getProjectLoadingStatus));

  constructor(private store: Store<ProjectState>) {
    this.store.pipe(select(getProjects), take(1)).subscribe({
      next: (items) => {
        if (items.length < 1) {
          this.store.dispatch(ProjectPageActions.loadProjects());
        }
      },
    });
  }

  statusSelect(status: Status) {
    this.store.dispatch(ProjectPageActions.projectStatusClick({ status }));
  }
}
