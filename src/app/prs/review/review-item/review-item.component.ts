import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  requestline: Requestline[] =[];
  requests:Request[] = [];
  sortCriteria: string = "column";
  sortOrder: string = "asc";

  sortBy(prop: string): void {
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor( 
    private requestsvc: RequestService, 
    private requestlinesvc: RequestlineService, 
    private router: Router) { 

  }

  //approve and not-approved function
  ngOnInit() {
  }

}
