import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private router: Router,
    private requestsvc: RequestService
  ) { }

  save(): void{
    this.requestsvc.create(this.request).subscribe(
      res => {console.log("Res from Request create", res); 
      this.router.navigateByUrl('/requests/list');
    }, 
      err => {console.log(err);}
    );
  }

  ngOnInit() {
  }

}
