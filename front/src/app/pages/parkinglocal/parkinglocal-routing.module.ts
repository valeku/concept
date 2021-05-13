import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkinglocalPage } from './parkinglocal.page';

const routes: Routes = [
  {
    path: '',
    component: ParkinglocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkinglocalPageRoutingModule {}
