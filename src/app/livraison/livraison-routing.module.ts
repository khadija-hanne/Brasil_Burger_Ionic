import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivraisonPage } from './livraison.page';

const routes: Routes = [
  {
    path: '',
    component: LivraisonPage
  },
  {
    path: 'livraison-detail',
    loadChildren: () => import('./livraison-detail/livraison-detail.module').then( m => m.LivraisonDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivraisonPageRoutingModule {}
