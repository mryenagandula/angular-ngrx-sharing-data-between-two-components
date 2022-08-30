import { createAction, props } from '@ngrx/store';

export const loadUsersUserss = createAction(
  '[Users] LoadUsers Userss'
);

export const loadUsersUserssSuccess = createAction(
  '[Users] LoadUsers Userss Success',
  props<{ data: any }>()
);

export const loadUsersUserssFailure = createAction(
  '[Users] LoadUsers Userss Failure',
  props<{ error: any }>()
);


export const loadUserById  = createAction(
  '[Users] LoadUsers User By Id ',
   props<{ id: number | string }>()
);

export const loadUserByIdSuccess = createAction(
  '[Users] LoadUsers User By Id  Success',
  props<{ data: any }>()
);

export const loadUserByIdFailure = createAction(
  '[Users] LoadUsers User By Id  Failure',
  props<{ error: any }>()
);

