import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User(); //cannot be undefined

  constructor(
    private router: Router,
    private usersvc: UserService
  ) { }

  save(): void{
    this.usersvc.create(this.user).subscribe(
      res => {console.log("Res from User create", res); 
      this.router.navigateByUrl('/users/list');
    }, 
      err => {console.log(err);}
    );
  }

  ngOnInit() {
  }

}
