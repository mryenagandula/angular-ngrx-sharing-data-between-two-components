import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserReducer from '../reducers/users.reducer';

export const getUsersState = createFeatureSelector<fromUserReducer.State>('users');

export const loading = createSelector(
    getUsersState,
    (state: fromUserReducer.State) => state.loading
);

export const getUsers = createSelector(
    getUsersState,
    (state: fromUserReducer.State) => state.users
);

export const getUserDetails = createSelector(
    getUsersState,
    (state: fromUserReducer.State) => state.userDetails
);
