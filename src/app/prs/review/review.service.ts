import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../review/review.class';

const baseUrl= "http://localhost:54318/api/reviews";
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  list(): Observable<Review[]> {
    return this.http.get(`${baseUrl}`) as Observable<Review[]>;
  }

  get(id: string): Observable<Review>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Review>;
  }

  create(review: Review): Observable<any> {
    return this.http.post(`${baseUrl}`, review) as Observable<any>;
  }

  change(review: Review): Observable<any> {
    return this.http.put(`${baseUrl}/${review.id}`, review) as Observable<any>;
  }

  remove(review: Review): Observable<any> {
    return this.http.delete(`${baseUrl}/${review.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
