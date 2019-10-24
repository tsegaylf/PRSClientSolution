import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;
  verifyDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/requests/edit/${this.request.id}`);
  }

  verify(): void {
   this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    this.requestsvc.remove(this.request).subscribe(
      res => {console.log("Request change resp:", res); 
    this.router.navigateByUrl('/requests/list');
    }, 
    err => {console.log(err);}
    );
  }

  ngOnInit() {
    let requestid = this.route.snapshot.params.id;
    this.requestsvc.get(requestid).subscribe(
    request => {
      this.request =request;
      console.log("Request:", request);
    },
    err => {
      console.error(err);
    });
  }

}
