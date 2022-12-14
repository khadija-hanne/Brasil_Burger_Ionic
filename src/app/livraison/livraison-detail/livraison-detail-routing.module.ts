import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivraisonDetailPage } from './livraison-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LivraisonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivraisonDetailPageRoutingModule {}
