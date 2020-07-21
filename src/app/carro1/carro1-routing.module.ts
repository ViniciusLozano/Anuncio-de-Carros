import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carro1Page } from './carro1.page';

const routes: Routes = [
  {
    path: '',
    component: Carro1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carro1PageRoutingModule {}
