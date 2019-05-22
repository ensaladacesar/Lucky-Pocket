import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: 'product:product_id',
        children: [
          {
            path: '',
            loadChildren: '../product/product.module#ProductPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {}
