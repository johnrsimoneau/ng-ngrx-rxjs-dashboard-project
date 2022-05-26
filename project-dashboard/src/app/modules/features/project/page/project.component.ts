import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';
import { ProjectPageActions } from '../state/actions';
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
  projects$: Observable<Project[]>;
  projectsLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProjectPageActions.loadProjects());

    this.projects$ = this.store.pipe(select(getProjects));

    this.projectsLoading$ = this.store.pipe(select(getProjectLoadingStatus));
  }
}
