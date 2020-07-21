import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carro3Page } from './carro3.page';

const routes: Routes = [
  {
    path: '',
    component: Carro3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carro3PageRoutingModule {}
