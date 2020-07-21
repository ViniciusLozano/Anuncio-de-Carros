import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carro4Page } from './carro4.page';

const routes: Routes = [
  {
    path: '',
    component: Carro4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carro4PageRoutingModule {}
