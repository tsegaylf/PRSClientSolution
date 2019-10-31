import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestlineService} from '../requestline.service';
import { Requestline } from '../requestline.class';
import { Request } from '../../request/request.class';
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

 
  user: User;
  requestlines:Requestline[] = [];
  sortCriteria: string = "request.status";
  sortOrder: string = "asc";
  requests: Request[];

  sortBy(prop: string): void {
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor( 
    private requestlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private router: Router
    ) { 
    
  }

  // delete(): void {
  //   this.requestsvc.remove(this.requests).subscribe(
  //     res => {console.log("Requestline change resp:", res); 
  //   this.router.navigateByUrl('/requestlines/list');
  //   }, 
  //   err => {console.log(err);}
  //   );
  // }

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
