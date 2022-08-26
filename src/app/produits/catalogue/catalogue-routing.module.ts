import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationGuard } from 'src/app/guards/authentification.guard';

import { CataloguePage } from './catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage,
    canActivate: [AuthentificationGuard]
  },
  {
    path: 'catalogue-item',
    loadChildren: () => import('./catalogue-item/catalogue-item.module').then( m => m.CatalogueItemPageModule)
  },
  {
    path: 'catalogue-list',
    loadChildren: () => import('./catalogue-list/catalogue-list.module').then( m => m.CatalogueListPageModule),
    canActivate: [AuthentificationGuard]
  },
  {
    path: 'catalogue-detail',
    loadChildren: () => import('./catalogue-detail/catalogue-detail.module').then( m => m.CatalogueDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
