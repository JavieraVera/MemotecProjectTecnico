import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestioncontactosPage } from './gestioncontactos.page';

const routes: Routes = [
  {
    path: '',
    component: GestioncontactosPage,
    children: [
      {
        path: 'lista-contactos',
        loadChildren: '../lista-contactos/lista-contactos.module#ListaContactosPageModule'
      },
      {
        path: 'agregar-contactos',
        loadChildren: '../agregar-contactos/agregar-contactos.module#AgregarContactosPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestioncontactosPageRoutingModule {}
