import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carro3PageRoutingModule } from './carro3-routing.module';

import { Carro3Page } from './carro3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carro3PageRoutingModule
  ],
  declarations: [Carro3Page]
})
export class Carro3PageModule {}
