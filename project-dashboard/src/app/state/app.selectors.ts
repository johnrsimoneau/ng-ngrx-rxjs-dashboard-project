import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './app.state';

export const selectAppState = createFeatureSelector<State>('appState');

export const selectPageTitle = createSelector(
  selectAppState,
  (state: State) => state.pageTitle
);
