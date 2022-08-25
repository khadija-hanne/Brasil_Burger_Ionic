import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueDetailPage } from './catalogue-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogueDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueDetailPageRoutingModule {}
