import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private product: ProductService,
    private http: HttpClient
  ) { }

  items:any = '';
  
  ngOnInit() {
    this.getFeatured();
  }

  getFeatured(){
    this.items = '';
    this.product.getFeatured()
    .subscribe(res =>{
      console.log(res.length);
      for(let i = 0; i < res.length; i++){
        this.items += '<ion-card><ion-card-content><ion-row><ion-col size="5"><img src="../../../assets/products/' + res[i].product_id + '/1.jpg"></ion-col><ion-col size="7"><ion-card-header><ion-card-title>' + res[i].product_name + '</ion-card-title><ion-card-subtitle>' + res[i].categorie_name + '</ion-card-subtitle></ion-card-header><ion-item><ion-progress-bar value="0.5"></ion-progress-bar></ion-item></ion-col></ion-row></ion-card-content></ion-card>';
      }

      document.getElementById('grid').innerHTML = this.items;
    });
  }
}
