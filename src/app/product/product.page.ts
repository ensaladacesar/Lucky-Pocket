import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss']
})
export class ProductPage {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private ProductService: ProductService)
    {}

  product_id:any = ''; 
  ngOnInit() {
    this.product_id = this.ActivatedRoute.snapshot.paramMap.get('product_id');
    console.log(this.product_id);
  }

  
}
