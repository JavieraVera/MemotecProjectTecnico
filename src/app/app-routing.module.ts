import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InformacionusuarioPageModule } from './pages/informacionusuario/informacionusuario.module';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./pages/crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'sesioncompletiniciada',
    loadChildren: () => import('./pages/sesion-complet-iniciada/sesion-complet-iniciada.module')
    .then(m => m.SesionCompletIniciadaPageModule)
  },
  {
    path: 'informacionagregadausuario',
    loadChildren: () => import('./pages/informacion-agregada-usuario/informacion-agregada-usuario.module')
    .then( m => m.InformacionAgregadaUsuarioPageModule)
  },
  {
    path: 'informacionusuario',
    loadChildren: () => import('./pages/informacionusuario/informacionusuario.module').then( m => m.InformacionusuarioPageModule)
  },
  {
    path: 'gestioncontactos',
    loadChildren: () => import('./pages/gestioncontactos/gestioncontactos.module').then( m => m.GestioncontactosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./pages/gps/gps.module').then( m => m.GPSPageModule)
  }
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
