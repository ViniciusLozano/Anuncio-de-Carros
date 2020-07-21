import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carro1',
  templateUrl: './carro1.page.html',
  styleUrls: ['./carro1.page.scss'],
})
export class Carro1Page implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }
  
  Voltar(){
    this.navcrtl.navigateBack('carro0')
  }

  Home(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  Proxima(){
    this.navcrtl.navigateForward('carro2')
  }

}
