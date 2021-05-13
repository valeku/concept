import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrusionPageRoutingModule } from './intrusion-routing.module';

import { IntrusionPage } from './intrusion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrusionPageRoutingModule
  ],
  declarations: [IntrusionPage]
})
export class IntrusionPageModule {}
