import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CatalogueItemPage } from '../produits/catalogue/catalogue-item/catalogue-item.page';
import { CatalogueItemPageModule } from '../produits/catalogue/catalogue-item/catalogue-item.module';
import { CataloguePage } from '../produits/catalogue/catalogue.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogueListPage } from '../produits/catalogue/catalogue-list/catalogue-list.page';

@NgModule({
  imports: [
    // BrowserModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    // CatalogueItemPageModule
  ],
  declarations: [
    Tab1Page,
    CatalogueItemPage,
    CataloguePage,
    CatalogueListPage
  ]
})
export class Tab1PageModule {}
