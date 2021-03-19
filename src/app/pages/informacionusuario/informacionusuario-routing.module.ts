import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionusuarioPage } from './informacionusuario.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionusuarioPageRoutingModule {}
