import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carro0Page } from './carro0.page';

const routes: Routes = [
  {
    path: '',
    component: Carro0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carro0PageRoutingModule {}
