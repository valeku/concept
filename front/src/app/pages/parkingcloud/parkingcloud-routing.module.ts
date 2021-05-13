import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingcloudPage } from './parkingcloud.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingcloudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingcloudPageRoutingModule {}
