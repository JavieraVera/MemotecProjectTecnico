import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestioncontactosPageRoutingModule } from './gestioncontactos-routing.module';

import { GestioncontactosPage } from './gestioncontactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestioncontactosPageRoutingModule
  ],
  declarations: [GestioncontactosPage]
})
export class GestioncontactosPageModule {}
