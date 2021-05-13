import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastprojectsPageRoutingModule } from './lastprojects-routing.module';

import { LastprojectsPage } from './lastprojects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastprojectsPageRoutingModule
  ],
  declarations: [LastprojectsPage]
})
export class LastprojectsPageModule {}
