import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseUrl = "http://localhost:54318/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]> {
    return this.http.get(`${baseUrl}`) as Observable<User[]>;
  }

  get(id: string): Observable<User>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<User>;
  }
  constructor(private http: HttpClient) { }
}
