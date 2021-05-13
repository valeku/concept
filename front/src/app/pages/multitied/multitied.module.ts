import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultitiedPageRoutingModule } from './multitied-routing.module';

import { MultitiedPage } from './multitied.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultitiedPageRoutingModule
  ],
  declarations: [MultitiedPage]
})
export class MultitiedPageModule {}
