import { Status } from '@modules/shared/types/status.types';
import { createAction, props } from '@ngrx/store';

export const loadProjects = createAction('[Project Page] Load Projects');

export const projectStatusClick = createAction(
  '[Project Page] Project Status Click',
  props<{ status: Status }>()
);
