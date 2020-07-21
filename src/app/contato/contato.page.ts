import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  n1: any = "";
  n2: any = "";
  n3: any = "";
  n4: any = "";
  total: any = "";

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  enviar(){
    this.total = this.n1 + this.n2 + this.n3  + this.n4;
  }
  paginaAnterior(){
    this.navcrtl.navigateBack('social')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

}
