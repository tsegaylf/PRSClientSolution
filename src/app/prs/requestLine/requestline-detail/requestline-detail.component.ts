import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-requestline-detail',
  templateUrl: './requestline-detail.component.html',
  styleUrls: ['./requestline-detail.component.css']
})
export class RequestlineDetailComponent implements OnInit {

  requestline: Requestline;
  verifyDelete: boolean = false;

  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService
  ){ }

  save(): void{
    this.requestlinesvc.create(this.requestline).subscribe(
      res => {console.log("Res from Requestline create", res); 
      this.router.navigateByUrl('/requestlines/list');
    }, 
      err => {console.log(err);}
    );
  }

  ngOnInit() {
  }
}
