import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  product_exist: boolean = false;
  product_id: any = '';
  product_name: any = '';
  brand_name: any = '';
  category_name: any = '';
  
  constructor(public  ActivatedRoute: ActivatedRoute,
              public ProductService: ProductService,
              public modalController: ModalController) { }

  ngOnInit() {
    this.loadProduct(this.ActivatedRoute.snapshot.paramMap.get('product_id'));
  }

  loadProduct(product_id){
    this.ProductService.getProduct(product_id)
    .subscribe(res =>{ 
      if(res.length > 0){
        this.product_exist = true;
        this.product_id = res[0].product_id;
        this.product_name = res[0].product_name;
        this.brand_name = res[0].brand_name;
        this.category_name = res[0].category_name;
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  async dismissModal() {
    
    
    return await this.modalController.dismiss();
  }



}
