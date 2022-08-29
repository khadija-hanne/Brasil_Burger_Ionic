import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgersPage } from './burgers.page';

const routes: Routes = [
  {
    path: '',
    component: BurgersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgersPageRoutingModule {}
