import { Component, OnInit } from '@angular/core';
import { RequestlineService} from '../requestline.service';
import { Requestline } from '../requestline.class';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  requestlines:Requestline[] = [];
  sortCriteria: string = "productId";
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
        console.log("Requestlines", requestlines);
      },
      err => {
        console.error(err);
      }
    )
  }

}
