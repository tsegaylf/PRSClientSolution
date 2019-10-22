import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  user: User; // or user: User = new User();
  password2: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

  save(): void{
    if(this.user.password !== this.password2) {
      alert("Passwords don't match!");
      return;
    }
    this.usersvc.change(this.user).subscribe(
      res => {console.log("User change resp:", res); 
      this.router.navigateByUrl('/users/list');
    }, 
      err => {console.log(err);}
    );
  }

  ngOnInit() {
    let userid = this.route.snapshot.params.id;
    this.usersvc.get(userid).subscribe(
      user => {
        this.user = user;
        this.password2 = this.user.password;
        console.log("User:", user);
      },
      err => {
        console.error(err);
      }
    );
  }

}
