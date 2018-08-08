import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  email: string;
  constructor(public navCtrl: NavController, private fireAuth: AngularFireAuth, private app: App) {
    this.email = fireAuth.auth.currentUser.email;
  }

  logout(){
    this.fireAuth.auth.signOut().then(() => {
        this.app.getRootNav().setRoot(LoginPage);
    });
  }
}
