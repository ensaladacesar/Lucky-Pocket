import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  },
  {
    path: ':product_id',
    component: ViewComponent

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductPage, ViewComponent]
})
export class ProductPageModule {}
