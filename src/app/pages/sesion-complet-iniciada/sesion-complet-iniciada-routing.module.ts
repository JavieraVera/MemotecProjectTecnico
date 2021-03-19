import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionCompletIniciadaPage } from './sesion-complet-iniciada.page';

const routes: Routes = [
  {
    path: '',
    component: SesionCompletIniciadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionCompletIniciadaPageRoutingModule {}

// import { Component } from '@angular/core';
// import { MenuController } from '@ionic/angular';



// @Component({
//   selector: 'menu-example',
//   templateUrl: 'menu-example.html',
//   styleUrls: ['./menu-example.css'],
// })
// export class MenuExample {

// constructor(private menu: MenuController) { }

//   openFirst() {
//     this.menu.enable(true, 'first');
//     this.menu.open('first');
//   }

//   openEnd() {
//     this.menu.open('end');
//   }

//   openCustom() {
//     this.menu.enable(true, 'custom');
//     this.menu.open('custom');
//   }
// }