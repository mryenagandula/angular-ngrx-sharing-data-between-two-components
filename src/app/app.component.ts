import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import * as UserActions from "./actions/users.actions";
// import * as UserSelectors from "./selectors/users.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'angular-ngrx-sharing-data-between-two-components';
  // users$: any;

  // constructor( private readonly store: Store){
    // this.store.dispatch(UserActions.loadUsersUserss());
  // }

  ngOnInit(): void {
  //   this.users$ = this.store.select(UserSelectors.getUsers);
  }
}
