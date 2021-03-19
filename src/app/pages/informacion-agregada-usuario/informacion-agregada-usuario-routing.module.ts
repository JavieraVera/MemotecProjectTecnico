import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionAgregadaUsuarioPage } from './informacion-agregada-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionAgregadaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionAgregadaUsuarioPageRoutingModule {}
