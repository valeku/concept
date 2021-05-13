import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastprojectsPage } from './lastprojects.page';

const routes: Routes = [
  {
    path: '',
    component: LastprojectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastprojectsPageRoutingModule {}
