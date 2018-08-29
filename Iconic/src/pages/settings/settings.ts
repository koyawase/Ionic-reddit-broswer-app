import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let data = navParams.get('data');
    if(data!='menuNav'){
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
  
  }

}
