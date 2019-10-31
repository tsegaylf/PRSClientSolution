import { Component, OnInit } from '@angular/core';

import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  requestline: Requestline[] =[];
  requests:Request[] = [];
  sortCriteria: string = "status";
  sortOrder: string = "asc";

  sortBy(prop: string): void {
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor( private requestsvc: RequestService, private requestlinesvc: RequestlineService) { }

  ngOnInit() {
    this.requestsvc.list().subscribe(
      requests => {
        this.requests = requests;
        console.log("Requests", requests);
      },
      err => {
        console.error(err);
      }
    )
  }

}
