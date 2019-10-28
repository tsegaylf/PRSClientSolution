import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system.service';

import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  user = User;

  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService
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
    this.syssvc.checkLogin();
    this.request.userId = this.syssvc.loggedInUser.id;
    this.syssvc.loggedInUser.username = this.syssvc.loggedInUser.username;
  }

}
