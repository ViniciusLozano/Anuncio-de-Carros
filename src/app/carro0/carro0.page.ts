import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carro0',
  templateUrl: './carro0.page.html',
  styleUrls: ['./carro0.page.scss'],
})
export class Carro0Page implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  paginaAnterior(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  proximaPagina(){
    this.navcrtl.navigateForward('carro1')
  }
 
}
