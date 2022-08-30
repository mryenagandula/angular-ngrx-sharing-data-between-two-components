import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from "../../actions/users.actions";
import * as UserSelectors from "../../selectors/users.selectors";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: any;
  public selectedUserId =-1;

  constructor( private readonly store: Store){}

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsersUserss());
    this.users$ = this.store.select(UserSelectors.getUsers);
  }

  public selectUser(id){
    this.selectedUserId = id;
    this.store.dispatch(UserActions.loadUserById({id}))
  }

}
