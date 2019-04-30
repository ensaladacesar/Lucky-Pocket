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
  items: any = '';

  ngOnInit() {
  }

  searchProduct(keyword){
    this.items = '';
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
          if(res.length == 0){
            console.log('vacio');
            this.items = "<h3>No hay productos con tu criterio de búsqeda, intenta otra cosa.</h3>";
          }
          else{
            console.log('no vacio');
            for(let i = 0; i<res.length; i++){
              this.items += '<ion-card><ion-card-content><ion-row><ion-col size="5"><img src="../../../assets/products/' + res[i].product_id + '/1.jpg"></ion-col><ion-col size="7"><ion-card-header><ion-card-title><ion-item [routerLink]="/product/' + res[i].product_id + '">' + res[i].product_name + '</ion-item></ion-card-title><ion-card-subtitle>' + res[i].categorie_name + '</ion-card-subtitle></ion-card-header><ion-item><ion-progress-bar value="0.5"></ion-progress-bar></ion-item></ion-col></ion-row></ion-card-content></ion-card>';
            }
          }

          document.getElementById('productGrid').innerHTML = this.items;
      });
    }
    
  }
}
