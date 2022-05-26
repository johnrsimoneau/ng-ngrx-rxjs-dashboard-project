import { createReducer, on } from '@ngrx/store';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';
import * as AppState from 'src/app/state/app.state';
import { ProjectApiActions, ProjectPageActions } from './actions';

export const ProjectFeatureKey = 'projects';

export interface State extends AppState.State {
  projects: ProjectState;
}

export interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  error: string;
}

const initialState: ProjectState = {
  projects: [],
  isLoading: true,
  error: '',
};

export const projectReducer = createReducer(
  initialState,
  on(ProjectApiActions.loadProjectsSuccess, (state, action): ProjectState => {
    return {
      ...state,
      projects: action.projects,
      error: '',
      isLoading: false,
    };
  }),
  on(ProjectApiActions.loadProjectError, (state, action): ProjectState => {
    return {
      ...state,
      projects: [],
      isLoading: false,
      error: action.error,
    };
  })
);
