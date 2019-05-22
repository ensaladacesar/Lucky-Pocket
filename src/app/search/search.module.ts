import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPageRoutingModule } from './search.router.model';
import { SearchPage } from './search.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
