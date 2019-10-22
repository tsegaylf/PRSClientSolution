import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    user: User;
    verifyDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }
  
  edit(): void {
    this.router.navigateByUrl(`/users/edit/${this.user.id}`);
  }

  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    this.usersvc.remove(this.user).subscribe(
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
        this.user =user;
        console.log("User:", user);
      },
      err => {
        console.error(err);
      }
    );
  }

}
