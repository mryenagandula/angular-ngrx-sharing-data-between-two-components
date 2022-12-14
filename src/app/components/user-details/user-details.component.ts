import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserSelectors from "../../selectors/users.selectors";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails$: any;
  constructor( private readonly store: Store){}

  ngOnInit(): void {
    this.userDetails$ = this.store.select(UserSelectors.getUserDetails);
  }

}
