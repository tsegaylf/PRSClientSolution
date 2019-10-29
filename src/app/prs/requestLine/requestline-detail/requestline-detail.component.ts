import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';

@Component({
  selector: 'app-requestline-detail',
  templateUrl: './requestline-detail.component.html',
  styleUrls: ['./requestline-detail.component.css']
})
export class RequestlineDetailComponent implements OnInit {

  requestline: Requestline;
  verifyDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService
  ){ }

  edit(): void {
    this.router.navigateByUrl(`/requestlines/edit/${this.requestline.id}`);
  }

  verify(): void {
   this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    this.requestlinesvc.remove(this.requestline).subscribe(
      res => {console.log("Product change resp:", res); 
    this.router.navigateByUrl('/requestlines/list');
    }, 
    err => {console.log(err);}
    );
  }

  ngOnInit() {
    let requestlineid = this.route.snapshot.params.id;
    this.requestlinesvc.get(requestlineid).subscribe(
    requestline => {
      this.requestline =requestline;
      console.log("Requestline:", requestline);
    },
    err => {
      console.error(err);
    });
  }

}
