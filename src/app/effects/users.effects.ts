import { Injectable } from '@angular/core';
import { UsersService } from '../apis/users..service';
import * as UserActions from '../actions/users.actions';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService:UsersService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsersUserss),
      map((action: any) => action.payload),
      mergeMap(() => {
        return this.usersService.loadUsers().pipe(
          map(data => UserActions.loadUsersUserssSuccess({ data })),
          catchError(error => of(UserActions.loadUsersUserssFailure({ error })))
        );
      })
    )
  );

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserById),
      map((action: any) => action.id),
      mergeMap((id) => {
        return this.usersService.loadUserById(id).pipe(
          map(data => UserActions.loadUserByIdSuccess({ data })),
          catchError(error => of(UserActions.loadUserByIdFailure({ error })))
        );
      })
    )
  )
}
