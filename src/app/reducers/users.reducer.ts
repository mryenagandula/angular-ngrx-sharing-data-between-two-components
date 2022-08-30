import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/users.actions';
export const usersFeatureKey = 'users';

export interface State {
  users: any[],
  loading : boolean,
  error: any,
  userDetails: any
}

export const initialState: State = {
  users: null,
  loading : false,
  error: null,
  userDetails: null
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsersUserss, (state) => ({...state,loading: false, error:null})),
  on(UserActions.loadUsersUserssSuccess, (state, { data }) => ({
    ...state,
    users:data.users,
    loading: true,
    error: null
  })),
  on(UserActions.loadUsersUserssFailure, (state,{error}) => ({...state,loading: false, error})),
  on(UserActions.loadUserById, (state) => ({...state,loading: false, error:null})),
  on(UserActions.loadUserByIdSuccess, (state, { data }) => ({
    ...state,
    userDetails:data.user,
    loading: true,
    error: null
  })),
  on(UserActions.loadUserByIdFailure, (state,{error}) => ({...state,loading: false, error})),
);
