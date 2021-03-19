import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionusuarioPageRoutingModule } from './informacionusuario-routing.module';

import { InformacionusuarioPage } from './informacionusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionusuarioPageRoutingModule
  ],
  declarations: [InformacionusuarioPage]
})
export class InformacionusuarioPageModule {}
