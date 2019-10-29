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
  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private router : Router,
    private syssvc : SystemService,
    private usersvc : UserService

  ) { }

  login(): void{
    this.usersvc.login(this.username, this.password)
    .subscribe(
      resp =>{
        console.log("login Sucessful!", resp);
        let user = resp;
        this.syssvc._loggedInUser = user;
        this.router.navigateByUrl("requests/list");
      },
    )
    err => {
      console.error("Login Failed.");
      alert("Retry: Username/Password combination is Invalid");
    }

  }
  // login(): void {
  //   this.usersvc.login(this.username, this.password).subscribe(
  //     res => 
  //     (this.router.navigate(["/requests/list"])))

  //   // if(this.username == 'user.username' && this.password == 'user.admin'){
    //   this.router.navigate(["/requests/list"]);
    
    // }else {

    //   alert("Retry: Username/Password combination is Invalid");
    //   console.error("Login Failed.");
    // }
  //}

  ngOnInit() {
    this.syssvc.loggedInUser = null; //clears any logged in user
    
  }
  
}


