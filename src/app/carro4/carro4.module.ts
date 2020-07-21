import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carro4PageRoutingModule } from './carro4-routing.module';

import { Carro4Page } from './carro4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carro4PageRoutingModule
  ],
  declarations: [Carro4Page]
})
export class Carro4PageModule {}
