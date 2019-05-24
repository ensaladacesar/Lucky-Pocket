import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  product_id: any = '';
  product_name: any = '';

  product_exist: boolean = false;
  
  constructor(public  ActivatedRoute: ActivatedRoute,
              public ProductService: ProductService) { }

  ngOnInit() {
    this.loadProduct(this.ActivatedRoute.snapshot.paramMap.get('product_id'));
  }

  loadProduct(product_id){
    this.ProductService.getProduct(product_id)
    .subscribe(res =>{ 
      if(res.length > 0){
        this.product_exist = true;
        this.setData(res[0].product_id, res[0].name)
      }
      else{
        this.product_exist = false;
      }
    })
  }

  setData(product_id, name){
    console.log(product_id + ' + ' + name);
    this.product_id = product_id;
    this.product_name = name;
  }

}
