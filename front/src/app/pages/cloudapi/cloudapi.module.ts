import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloudapiPageRoutingModule } from './cloudapi-routing.module';

import { CloudapiPage } from './cloudapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloudapiPageRoutingModule
  ],
  declarations: [CloudapiPage]
})
export class CloudapiPageModule {}
