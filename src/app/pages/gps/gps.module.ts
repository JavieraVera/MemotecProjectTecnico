import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GPSPageRoutingModule } from './gps-routing.module';

import { GPSPage } from './gps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GPSPageRoutingModule
  ],
  declarations: [GPSPage]
})
export class GPSPageModule {}
