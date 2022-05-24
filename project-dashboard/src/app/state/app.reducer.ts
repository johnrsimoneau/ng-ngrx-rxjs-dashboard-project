import { createReducer, on } from '@ngrx/store';
import { setPageTitle } from './app.actions';

export const initialState = {
  pageTitle: '',
};

export const appReducer = createReducer(
  initialState,
  on(setPageTitle, (state, action) => {
    return {
      ...state,
      pageTitle: action.pageTitle,
    };
  })
);
