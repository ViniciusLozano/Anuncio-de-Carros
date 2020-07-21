import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carro1PageRoutingModule } from './carro1-routing.module';

import { Carro1Page } from './carro1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carro1PageRoutingModule
  ],
  declarations: [Carro1Page]
})
export class Carro1PageModule {}
