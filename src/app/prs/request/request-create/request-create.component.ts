import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from '../request.class';
import { User } from '../../user/user.class';

import { SystemService } from '../../system.service';
import { RequestService } from '../request.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User [];
  user: User;
  _loggedInName: User;
  _loggedInUsername: string;

  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private usersvc: UserService
  ) { }

  save(): void{
    this.requestsvc.create(this.request).subscribe(
      res => {console.log("Res from Request create", res); 
      this.router.navigateByUrl('/requests/list');
    }, 
      err => {console.log(err);}
    );
  }

  ngOnInit() {
    this.syssvc.checkLogin(this._loggedInName);
    this._loggedInUsername = this.syssvc._loggedInUser.username;
    this.request.userId = this.syssvc._loggedInUser.id;
    // this.syssvc.checkLogin();
    // this.user = this.syssvc.getuser();
    // this.usersvc.list().subscribe(resp => {
    //   this.users = resp;
    


    // this.request.userId = this.syssvc.getuser().id;
    // this.request.userId = this.request.userId;
    // this.syssvc.loggedInUser.username = this.syssvc.loggedInUser.username;

    //this.syssvc.getuser().id;
    //this.syssvc.checkLogin();
    //this.request.userId = this.syssvc.loggedInUser.id;
  }

}
