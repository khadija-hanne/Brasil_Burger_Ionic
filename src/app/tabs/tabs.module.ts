import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CatalogueItemPage } from '../produits/catalogue/catalogue-item/catalogue-item.page';
import { CatalogueListPage } from '../produits/catalogue/catalogue-list/catalogue-list.page';
import { CataloguePage } from '../produits/catalogue/catalogue.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage
  ]
})
export class TabsPageModule {}
