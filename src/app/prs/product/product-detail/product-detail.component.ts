import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: Product;
  verifyDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ){ }

  edit(): void {
    this.router.navigateByUrl(`/products/edit/${this.product.id}`);
  }

  verify(): void {
   this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    this.productsvc.remove(this.product).subscribe(
      res => {console.log("Product change resp:", res); 
    this.router.navigateByUrl('/products/list');
    }, 
    err => {console.log(err);}
    );
  }

  ngOnInit() {
    let productid = this.route.snapshot.params.id;
    this.productsvc.get(productid).subscribe(
    product => {
      this.product =product;
      console.log("Product:", product);
    },
    err => {
      console.error(err);
    });
  }
}


