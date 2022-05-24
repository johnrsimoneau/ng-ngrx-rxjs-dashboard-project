import { createAction, props } from '@ngrx/store';

export const setPageTitle = createAction(
  '[App] Set Page Title',
  props<{ pageTitle: string }>()
);
