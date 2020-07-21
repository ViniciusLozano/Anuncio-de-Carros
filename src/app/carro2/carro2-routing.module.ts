import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carro2Page } from './carro2.page';

const routes: Routes = [
  {
    path: '',
    component: Carro2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carro2PageRoutingModule {}
