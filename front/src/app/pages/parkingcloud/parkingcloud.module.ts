import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingcloudPageRoutingModule } from './parkingcloud-routing.module';

import { ParkingcloudPage } from './parkingcloud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingcloudPageRoutingModule
  ],
  declarations: [ParkingcloudPage]
})
export class ParkingcloudPageModule {}
