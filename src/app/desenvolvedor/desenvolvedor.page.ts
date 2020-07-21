import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.page.html',
  styleUrls: ['./desenvolvedor.page.scss'],
})
export class DesenvolvedorPage implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }
  paginaAnterior(){
    this.navcrtl.navigateBack('sobre')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  proximaPagina(){
    this.navcrtl.navigateForward('social')
  }

}
