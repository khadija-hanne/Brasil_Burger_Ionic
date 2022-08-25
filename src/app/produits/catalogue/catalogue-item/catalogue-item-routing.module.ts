import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueItemPage } from './catalogue-item.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogueItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueItemPageRoutingModule {}
