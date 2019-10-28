import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request; // or user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService
  ) { }

  save(): void{
    this.requestsvc.change(this.request).subscribe(
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
        this.request = request;
        console.log("Request:", request);
      },
      err => {
        console.error(err);
      }
    );
  }

}

