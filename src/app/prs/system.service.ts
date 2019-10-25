import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../prs/user/user.class';

const baseUrl = "http://localhost:54318/api/login";

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user : User = null;

  setuser(user:User){
    this.user = user;
  }

  clearuser(){
    this.user = null;
  }

  constructor(private http: HttpClient) { }
}
