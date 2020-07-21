import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carro3',
  templateUrl: './carro3.page.html',
  styleUrls: ['./carro3.page.scss'],
})
export class Carro3Page implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  paginaAnterior(){
    this.navcrtl.navigateBack('carro2')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  proximaPagina(){
    this.navcrtl.navigateForward('carro4')
  }

}
