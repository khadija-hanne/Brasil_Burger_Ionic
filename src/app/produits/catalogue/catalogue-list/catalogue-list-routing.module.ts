import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueListPage } from './catalogue-list.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogueListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueListPageRoutingModule {}
