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

  user : User;
  _loggedInUser: User;

  checkLogin(): void {
    //if (this.isUseroggedIn) {return this.router.navigateByUrl("/login");}
    if(this.user == null)
    {this.router.navigateByUrl("/login");}

  }

  get isUseroggedIn(): boolean{return this._loggedInUser=null}

  set loggedInUser(user: User) {this._loggedInUser = user; console.log ("logged in:", this._loggedInUser)}


  // get baseUrl(): string {return baseUrl; }

  // get userUrl(): string {}

  setuser(user:User){
    this._loggedInUser = user;
  }

  getuser(): User {
    return this._loggedInUser }

  constructor(
    private http:HttpClient,
    private router: Router) { }
}
