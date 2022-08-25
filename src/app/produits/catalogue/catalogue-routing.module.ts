import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguePage } from './catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage
  },
  {
    path: 'catalogue-item',
    loadChildren: () => import('./catalogue-item/catalogue-item.module').then( m => m.CatalogueItemPageModule)
  },
  {
    path: 'catalogue-list',
    loadChildren: () => import('./catalogue-list/catalogue-list.module').then( m => m.CatalogueListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
