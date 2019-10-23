import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  sortCriteria: string = "lastname";
  sortOrder: string = "asc";

  sortBy(prop: string): void {
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor( private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.list().subscribe(
      users => {
        this.users = users;
        console.log("Users", users);
      },
      err => {
        console.error(err);
      }
    )
  }
}
