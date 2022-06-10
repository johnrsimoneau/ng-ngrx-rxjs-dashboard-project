import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './project.reducer';

const getProjectFeatureState = createFeatureSelector<ProjectState>('projects');

export const getProjects = createSelector(
  getProjectFeatureState,
  (state) => state.projects
);

export const getFilteredProjects = createSelector(
  getProjectFeatureState,
  (state) => state.filteredProjects
);

export const getProjectLoadingStatus = createSelector(
  getProjectFeatureState,
  (state) => state.isLoading
);

export const getProjectLoadingErrorMsg = createSelector(
  getProjectFeatureState,
  (state) => state.error
);

export const getSelectedProjectStatus = createSelector(
  getProjectFeatureState,
  (state) => state.selectedSortByStatus
);
