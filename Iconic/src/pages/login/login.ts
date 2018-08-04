import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, private firebase: AngularFireAuth, private alertCtrl: AlertController) {

  }
  
  alert(message: string){
    this.alertCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login(){
    if(this.email == null || this.password == null){
      this.alert('Please fill in the fields');
      return;
    }
    this.firebase.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(data => {
      //user logged in
      this.navCtrl.push(TabsPage, {
        email: this.email
      });
    })
    .catch(error => {
      this.alert('Got an error '+ error);
    })
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}
