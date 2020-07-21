import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carro2PageRoutingModule } from './carro2-routing.module';

import { Carro2Page } from './carro2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carro2PageRoutingModule
  ],
  declarations: [Carro2Page]
})
export class Carro2PageModule {}
