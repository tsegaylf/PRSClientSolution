import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../prs/user/user.class';
import { Router } from '@angular/router';

const baseUrl = "http://localhost:54318/api/login";

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user : User = null;
  _loggedInUser: User = null;

  checkLogin(): void {
    if (!this.isUseroggedIn) {this.router.navigateByUrl("/login");}
    // if(this.user == null)
    // {this.router.navigateByUrl("/login");}

  }

  get isUseroggedIn(): boolean{return this._loggedInUser ! =null}

  set loggedInUser(user: User) {this._loggedInUser = user; console.log ("logged in:, this.loggedInUser")}


  // get baseUrl(): string {return baseUrl; }

  // get userUrl(): string {}

  setuser(user:User){
    this._loggedInUser = user;
  }

  getuser(): User {
    return this._loggedInUser  }

  constructor(
    private router: Router) { }
}
