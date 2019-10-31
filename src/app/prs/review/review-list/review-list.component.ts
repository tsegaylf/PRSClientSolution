import { Component, OnInit } from '@angular/core';
import { Requestline } from '../../requestline/requestline.class';
import { Request } from '../../request/request.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  request: Request;
  requestline: Requestline;

  constructor(private requestsvc: RequestService, private requestlinesvc: RequestlineService) { }

  //approve and not-approved function


  ngOnInit() {
  }

}
