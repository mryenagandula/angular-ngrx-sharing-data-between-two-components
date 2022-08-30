import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUserReducer from './users.reducer'; 


export interface State {
  users : fromUserReducer.State
}

export const reducers: ActionReducerMap<State> = {
  users: fromUserReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
