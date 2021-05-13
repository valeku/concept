import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrusionPage } from './intrusion.page';

const routes: Routes = [
  {
    path: '',
    component: IntrusionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrusionPageRoutingModule {}
