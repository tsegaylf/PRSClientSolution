import { Component, OnInit } from '@angular/core';

import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: Requestline;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService
  ) { }

  save(): void{
    this.requestlinesvc.change(this.requestline).subscribe(
      res => {console.log("Requestline change resp:", res); 
      this.router.navigateByUrl('/requestlines/list');
    }, 
      err => {console.log(err);}
    );
  }

  ngOnInit() {
    let requestlineid = this.route.snapshot.params.id;
    this.requestlinesvc.get(requestlineid).subscribe(
      requestline => {
        this.requestline = requestline;
        console.log("Requestline:", requestline);
      },
      err => {
        console.error(err);
      }
    );
  }

}
