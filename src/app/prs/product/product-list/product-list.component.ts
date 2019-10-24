import { Component, OnInit } from '@angular/core';

import { ProductService} from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsvc : ProductService,
  ) { }

  ngOnInit() {
  }

}
