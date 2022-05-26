import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/modules/shared/interfaces/project.interface';

export const loadProjects = createAction('[Project] Load Projects');
