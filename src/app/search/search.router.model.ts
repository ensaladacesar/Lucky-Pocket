import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: 'search',
    component: SearchPage,
    children: [
      {
        path: 'product/:product_id',
        children: [
          {
            path: '',
            loadChildren: '../product/product.module#HProductPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
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
export class TabsPageRoutingModule {}
