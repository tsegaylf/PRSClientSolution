import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';

const baseUrl = "http://localhost:54318/api/requestlines";
@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  list(): Observable<RequestLine[]> {
    return this.http.get(`${baseUrl}`) as Observable<RequestLine[]>;
  }

  get(id: string): Observable<RequestLine>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<RequestLine>;
  }

  create(requestlines: RequestLine): Observable<any> {
    return this.http.post(`${baseUrl}`, requestlines) as Observable<any>;
  }

  change(requestlines: RequestLine): Observable<any> {
    return this.http.put(`${baseUrl}/${requestlines.id}`, requestlines) as Observable<any>;
  }

  remove(requestlines: RequestLine): Observable<any> {
    return this.http.delete(`${baseUrl}/${requestlines.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
