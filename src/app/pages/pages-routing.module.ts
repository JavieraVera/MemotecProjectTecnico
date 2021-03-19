import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'sesion-complet-iniciada',
    loadChildren: () => import('./sesion-complet-iniciada/sesion-complet-iniciada.module').then( m => m.SesionCompletIniciadaPageModule)
  },
  {
    path: 'informacionagregadausuario',
    loadChildren: () => import('./informacion-agregada-usuario/informacion-agregada-usuario.module').then( m => m.InformacionAgregadaUsuarioPageModule)
  },
  {
    path: 'informacionusuario',
    loadChildren: () => import('./informacionusuario/informacionusuario.module').then( m => m.InformacionusuarioPageModule)
  },
  {
    path: 'gestioncontactos',
    loadChildren: () => import('./gestioncontactos/gestioncontactos.module').then( m => m.GestioncontactosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GPSPageModule)
  },
  {
    path: 'lista-contactos',
    loadChildren: () => import('./lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
  },
  {
    path: 'agregar-contactos',
    loadChildren: () => import('./agregar-contactos/agregar-contactos.module').then( m => m.AgregarContactosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
