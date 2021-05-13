import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloudapiPage } from './cloudapi.page';

const routes: Routes = [
  {
    path: '',
    component: CloudapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloudapiPageRoutingModule {}
