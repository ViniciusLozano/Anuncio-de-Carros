import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carro0PageRoutingModule } from './carro0-routing.module';

import { Carro0Page } from './carro0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carro0PageRoutingModule
  ],
  declarations: [Carro0Page]
})
export class Carro0PageModule {}
