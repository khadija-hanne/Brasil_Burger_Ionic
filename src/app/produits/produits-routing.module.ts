import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationGuard } from '../guards/authentification.guard';

import { ProduitsPage } from './produits.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsPage
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule),
    canActivate: [AuthentificationGuard]
  },
  {
    path: 'burgers',
    loadChildren: () => import('./burgers/burgers.module').then( m => m.BurgersPageModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'frites',
    loadChildren: () => import('./frites/frites.module').then( m => m.FritesPageModule)
  },
  {
    path: 'boissons',
    loadChildren: () => import('./boissons/boissons.module').then( m => m.BoissonsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsPageRoutingModule {}
