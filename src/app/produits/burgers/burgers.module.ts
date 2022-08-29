import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgersPageRoutingModule } from './burgers-routing.module';

import { BurgersPage } from './burgers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgersPageRoutingModule
  ],
  declarations: [BurgersPage]
})
export class BurgersPageModule {}
