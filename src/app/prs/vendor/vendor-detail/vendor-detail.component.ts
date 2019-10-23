import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VendorService} from '../../vendor/vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  verifyDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  edit(): void{
    this.router.navigateByUrl(`/vendor/edit/${this.vendor.id}`)
  }

  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }
  
  delete(): void {
    this.vendorsvc.remove(this.vendor).subscribe(
      res => {
        console.log("This vendor removed", res);
        this.router.navigateByUrl(`vendor/list`);
      },
      err =>{
        console.error(err);
      }
    )
  }

  ngOnInit() {
    let vendorid = this.route.snapshot.params.id;
    this.vendorsvc.get(vendorid).subscribe(
      vendor => {
        this.vendor = vendor;
        console.log("Vendor:", vendor);
      },
      err => {
        console.error(err);
      }
    );
  }

}
