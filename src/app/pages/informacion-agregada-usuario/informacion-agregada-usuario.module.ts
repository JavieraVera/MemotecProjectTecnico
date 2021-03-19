import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionAgregadaUsuarioPageRoutingModule } from './informacion-agregada-usuario-routing.module';

import { InformacionAgregadaUsuarioPage } from './informacion-agregada-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionAgregadaUsuarioPageRoutingModule
  ],
  declarations: [InformacionAgregadaUsuarioPage]
})
export class InformacionAgregadaUsuarioPageModule {}
