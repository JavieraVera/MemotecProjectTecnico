import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GPSPage } from './gps.page';

const routes: Routes = [
  {
    path: '',
    component: GPSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GPSPageRoutingModule {}
