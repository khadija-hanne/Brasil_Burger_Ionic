import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogueListPageRoutingModule } from './catalogue-list-routing.module';

import { CatalogueListPage } from './catalogue-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogueListPageRoutingModule
  ],
  declarations: [CatalogueListPage],
  exports: [
    CatalogueListPage
  ]
})
export class CatalogueListPageModule {}
