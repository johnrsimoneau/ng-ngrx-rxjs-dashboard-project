import { Status } from '@modules/shared/types/status.types';
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
  filteredProjects: Project[];
  isLoading: boolean;
  error: string;
  selectedSortByStatus: Status;
}

const initialState: ProjectState = {
  projects: [],
  filteredProjects: [],
  isLoading: true,
  error: '',
  selectedSortByStatus: 'none',
};

export const projectReducer = createReducer(
  initialState,
  on(ProjectApiActions.loadProjectsSuccess, (state, action): ProjectState => {
    return {
      ...state,
      projects: action.projects,
      filteredProjects: action.projects,
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
  }),
  on(ProjectPageActions.projectStatusClick, (state, action): ProjectState => {
    let filteredProjects: Project[];
    if (action.status === 'none') {
      filteredProjects = [...state.projects];
    } else {
      filteredProjects = [...state.projects].filter(
        (project) => project.overallStatus === action.status
      );
    }
    return {
      ...state,
      selectedSortByStatus: action.status,
      filteredProjects: filteredProjects,
    };
  })
);
