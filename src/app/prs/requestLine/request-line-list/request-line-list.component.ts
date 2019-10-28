import { Component, OnInit } from '@angular/core';

import { RequestlineService } from '../requestline.service';
import { RequestLine } from '../requestline.class';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})

export class RequestLineListComponent implements OnInit {

  requestlines:RequestLine[] = [];
  sortCriteria: string = "quantity";
  sortOrder: string = "asc";

  sortBy(prop: string): void {
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor( private requestlinesvc: RequestlineService) { }

  ngOnInit() {
    this.requestlinesvc.list().subscribe(
      requestlines => {
        this.requestlines = requestlines;
        console.log("RequestLines", requestlines);
      },
      err => {
        console.error(err);
      }
    )
  }

}
