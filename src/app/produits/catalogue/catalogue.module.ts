import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { CatalogueItemPage } from './catalogue-item/catalogue-item.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { CatalogueListPageModule } from './catalogue-list/catalogue-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    SharedDirectivesModule,
    CatalogueListPageModule

  ],
  declarations: [
    CataloguePage,
    CatalogueItemPage
  ],

  exports: [CataloguePage]
})
export class CataloguePageModule {}
