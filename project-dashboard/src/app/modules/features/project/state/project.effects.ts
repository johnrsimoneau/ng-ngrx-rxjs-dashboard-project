import { Injectable } from '@angular/core';
import { ProjectService } from '@modules/core/services/project.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { ProjectApiActions, ProjectPageActions } from './actions';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}

  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.loadProjects),
      exhaustMap(() =>
        this.projectService.projectsWithCompanies$.pipe(
          map((projects) => ProjectApiActions.loadProjectsSuccess({ projects }))
        )
      )
    );
  });
}
