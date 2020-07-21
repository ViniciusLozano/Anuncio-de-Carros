import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }
  paginaAnterior(){
    this.navcrtl.navigateBack('desenvolvedor')
  }

  paginaHome(){
    this.navcrtl.navigateBack('folder/Inbox')
  }

  proximaPagina(){
    this.navcrtl.navigateForward('contato')
  }
}

