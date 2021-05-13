import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkinglocalPageRoutingModule } from './parkinglocal-routing.module';

import { ParkinglocalPage } from './parkinglocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkinglocalPageRoutingModule
  ],
  declarations: [ParkinglocalPage]
})
export class ParkinglocalPageModule {}
