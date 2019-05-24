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
  ) { }

  items:any;
  
  ngOnInit() {
    this.getFeatured();
  }

  getFeatured(){
    this.items = null;
    this.product.getFeatured()
    .subscribe(res =>{
      this.items = res;      
    });
  }
}
