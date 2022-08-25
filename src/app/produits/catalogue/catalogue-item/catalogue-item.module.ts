import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogueItemPageRoutingModule } from './catalogue-item-routing.module';

import { CatalogueItemPage } from './catalogue-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogueItemPageRoutingModule
  ],
  declarations: [CatalogueItemPage],

  exports: [CatalogueItemPageModule]
})
export class CatalogueItemPageModule {}
