import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  constructor(private ProductService: ProductService){}
  
  showCategories: boolean = true;
  showGrid: boolean = false;
  showNone: boolean = false;
  items: any;

  ngOnInit() {
  }

  searchProduct(keyword){
    this.items = null;
    if(keyword == ''){
      this.showCategories = true;
      this.showGrid = false;
      this.showNone = false;
    }
    else{
      this.showCategories = false;
      
      this.ProductService.searchProduct(keyword)
        .subscribe(res => {
          console.log(res);
          if(res.length == 0){
            this.showGrid = false;
            this.showNone = true;
          }
          else{
            this.showGrid = true;
            this.showNone = false;
            this.items = res;
          }

      });
    }
    
  }
}
