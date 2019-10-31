import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Requestline } from '../requestline.class';
import { Request } from '../../request/request.class';
import { RequestlineService} from '../requestline.service';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

 
  request: Request;
  requestlines:Requestline[] = [];
  sortCriteria: string = "request.status";
  sortOrder: string = "asc";

  sortBy(prop: string): void {
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor( 
    private requestlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

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
    
    this.requestlinesvc.list().subscribe(
      requestlines => {
        this.requestlines = requestlines;
        console.log("Requestlines", requestlines);
      },
      err => {
        console.error(err);
      }
    )
  }

}
