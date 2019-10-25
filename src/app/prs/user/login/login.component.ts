import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username: string;
  password: string;
  message: string = 'Ready to Login';

  constructor(
    private router : Router,
    private syssvc : SystemService,
    private usersvc : UserService

  ) { }

  login(): void {
    if(this.username == 'user.username' && this.password == 'user.admin'){
      this.router.navigate(["/requests/list"]);
    
    }else {

      alert("Retry: Username/Password combination is Invalid");
      console.error("Login Failed.");
    }
  }

  ngOnInit() {
    
  }
  
}


