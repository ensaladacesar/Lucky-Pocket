import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  constructor(
    private ProductService: ProductService,
    private http: HttpClient
  ){}
  
  showCategories: boolean = true;
  showGrid: boolean = false;
  ngOnInit() {
  }

  searchProduct(keyword){
    if(keyword == ''){
      this.showCategories = true;
      this.showGrid = false;
    }
    else{
      this.showCategories = false;
      this.showGrid = true;
      
      this.ProductService.searchProduct(keyword)
        .subscribe(res => {
          console.log(res);
      });
    }
    
  }
}
