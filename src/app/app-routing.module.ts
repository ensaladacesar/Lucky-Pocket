import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
}
