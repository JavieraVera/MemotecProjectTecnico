import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionCompletIniciadaPageRoutingModule } from './sesion-complet-iniciada-routing.module';

import { SesionCompletIniciadaPage } from './sesion-complet-iniciada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionCompletIniciadaPageRoutingModule
  ],
  declarations: [SesionCompletIniciadaPage]
})
export class SesionCompletIniciadaPageModule {}
