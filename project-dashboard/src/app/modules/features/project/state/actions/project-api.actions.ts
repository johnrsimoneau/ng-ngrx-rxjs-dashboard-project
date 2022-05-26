import { createAction, props } from '@ngrx/store';
import { Project } from '@modules/shared/interfaces/project.interface';

export const loadProjectsSuccess = createAction(
  '[Project] Load Project Success',
  props<{ projects: Project[] }>()
);

export const loadProjectError = createAction(
  '[Project] Load Project Error',
  props<{ error: string }>()
);
