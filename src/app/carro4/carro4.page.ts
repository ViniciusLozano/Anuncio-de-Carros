import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carro3',
  templateUrl: './carro4.page.html',
  styleUrls: ['./carro4.page.scss'],
})
export class Carro4Page implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  paginaAnterior(){
    this.navcrtl.navigateBack('carro3')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  proximaPagina(){
    this.navcrtl.navigateForward('sobre')
  }

}

