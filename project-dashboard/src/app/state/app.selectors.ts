import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectPageTitle = createSelector(
  selectAppState,
  (state: AppState) => state.pageTitle
);
