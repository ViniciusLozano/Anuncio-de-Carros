import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carro2',
  templateUrl: './carro2.page.html',
  styleUrls: ['./carro2.page.scss'],
})
export class Carro2Page implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  paginaAnterior(){
    this.navcrtl.navigateBack('carro1')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  proximaPagina(){
    this.navcrtl.navigateForward('carro3')
  }

}
