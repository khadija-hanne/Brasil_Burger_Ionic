import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogueDetailPageRoutingModule } from './catalogue-detail-routing.module';

import { CatalogueDetailPage } from './catalogue-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogueDetailPageRoutingModule
  ],
  declarations: [CatalogueDetailPage]
})
export class CatalogueDetailPageModule {}
